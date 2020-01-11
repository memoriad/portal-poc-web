var inteval = document.currentScript.getAttribute('interval');
var redirect = document.currentScript.getAttribute('redirect');
console.log("inteval: " + inteval);
console.log("redirect: " + redirect);

setInterval(function() {
	console.log("window.location.pathname: " + window.location.pathname)
	if (window.location.pathname != '/login') {
		window.hwcrypto.getCertificate({
			lang : 'en',
			filter : 'AUTH'
		}).then(function(certificate) {
			console.log("Using certificate:\n" + hexToPem(certificate.hex));
	
		}, function(err) {
			console.log("getCertificate() failed: " + err);
			alert("certificate not found");
			window.location = redirect;
		});
	}
}, inteval * 1000);