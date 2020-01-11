import { Component, OnInit } from '@angular/core';

declare var hwcrypto: any;
declare var hexToPem: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'gf-mis-web';

  ngOnInit() {
    var inteval = 20
    var redirect = "https://localhost:8443/login"
    console.log("inteval: " + inteval);
    console.log("redirect: " + redirect);

    setInterval(function () {
      console.log("window.location.pathname: " + window.location.pathname)
      if (window.location.pathname != '/login') {
        hwcrypto.getCertificate({
          lang: 'en',
          filter: 'AUTH'
        }).then(function (certificate) {
          console.log("Using certificate:\n" + hexToPem(certificate.hex));

        }, function (err) {
          console.log("getCertificate() failed: " + err);
          alert("certificate not found");
          window.location.href = redirect;
        });
      }
    }, inteval * 1000);
  }  

}
