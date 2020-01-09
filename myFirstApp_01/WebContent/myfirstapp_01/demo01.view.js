sap.ui.jsview("myfirstapp_01.demo01", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf myfirstapp_01.demo01
	*/ 
	getControllerName : function() {
		return "myfirstapp_01.demo01";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf myfirstapp_01.demo01
	*/ 
	createContent : function(oController) {
 		
		var oSimpleInput=new sap.m.Input({
			
			placeholder:"Enter Name"
			
		});
		
		
		var oBtn=new sap.m.Button({
			text:"Submit"
			
		});
		
		var oPage= new sap.m.Page({
			title: "Simple App",
			content: [
				oSimpleInput,
				oBtn
			]
		});
		
		
		
		return oPage;
	}

});


