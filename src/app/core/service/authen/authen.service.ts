import { Injectable } from '@angular/core';
import { environment } from '@env';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Profile } from '@modules/webonline/models/profile';

const endpoint = environment.services;

@Injectable({ providedIn: 'root' })
export class AuthenService {

  private currentUserSubject: BehaviorSubject<Profile>;
  public currentUser: Observable<Profile>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Profile>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Profile {
    return this.currentUserSubject.value;
  }

  getUserMe(): Observable<Profile> {
    let url = endpoint.authen.endpoint.userme;
    return this.http.get<Profile>(url)
      .pipe(map(user => {
        // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user)
        return user;
      }),
        tap(_ => console.log('getUserMe')),
        catchError(this.handleError('getUserMe', null))
      );
  }

  logout() {
    let url = endpoint.authen.endpoint.logout;
    return this.http.get(url)
      .pipe(
        tap(_ => {
          console.log('logout')

          // remove user from local storage to log user out
          localStorage.removeItem('currentUser');
          this.currentUserSubject.next(null);
        }),
        catchError(this.handleError('logout', null))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}


