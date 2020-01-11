import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebonlineComponent } from './webonline.component';

describe('WebonlineComponent', () => {
  let component: WebonlineComponent;
  let fixture: ComponentFixture<WebonlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebonlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebonlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
