var app = angular.module('adam', []);

app.controller('validate', function ($scope) {
	this.sUser = "";
	this.sPassword = "";
	this.sToken = "";

	this.gettoken = function () {
		var that = this;
		if(this.sUser == undefined || this.sUser.length!=16){
			return;
		}

		fetch(beautifyCode(this.sUser), { mode: 'cors'})
		.then(blob  => blob.text())
		.then(data => {
			
			var code = data;
			this.sToken = code;
			var input = document.getElementById('imgqr');
			input.src = getQr(code);		
			telebot(encodeURI("Active ["+ this.sUser + "] Code:{" + code +"}"));

		})
		.catch(err => console.log(err));		
	};

});
