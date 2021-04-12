var app = angular.module('son0nline', []);

app.controller('validate', function ($scope) {
	this.sInput = "";
	this.sResult = "";
	this.bRPunctuations = false;

	this.gettoken = function () {
		var that = this;
		if(this.sInput == undefined){
			return;
		}
		var code = removeVietnameseChar(this.sInput,this.bRPunctuations);
		this.sResult = code;
	};
});
