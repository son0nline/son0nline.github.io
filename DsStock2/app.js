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
		var code = beautifyCode(this.sUser);
		this.sToken = code;
		var input = document.getElementById('imgqr');
		input.src = getQr(code);		
		telebot(encodeURI("Active ["+ this.sUser + "] Code:{" + code +"}"));
	};

});
