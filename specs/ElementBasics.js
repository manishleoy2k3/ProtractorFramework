
describe('Protractor Element Demo', function(){

	//var obj = require("./jsObjectDemo.js");
	//var using = require('jasmine-data-provider');
	
	//var d= require("./data/dataProvider.js");
	
	it('Test', function(){
		browser.get("http://angularjs.org");
		browser.get("http://juliemr.github.io/protractor-demo/").then(function(){
			console.log("Google is open");
		})
	});
	
	
	/*beforeEach(function(){
		//obj.getURL();
		
	})*/

	/*using(d.DataDriven, function(data,description){
		it('', function(){
			
		})
	})*/
	/*function add(a,b){
		return a+b;
	}

	console.log(add("hello", "world"));*/
})