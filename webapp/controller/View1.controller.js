sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("demo_git.demo_git.controller.View1", {
		onLoginTap: function () {
			var uid = this.getView().byId("uid").getValue();
			var pasw = this.getView().byId("pasw").getValue();
			if (uid === "Admin" && pasw === "123") {
				sap.m.MessageToast.show(uid + " Logged In");
				this.getView().byId("uid").setValue("");
				this.getView().byId("pasw").setValue("");
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("SplitView");
			} else if (uid !== "" && pasw !== "") {
				sap.m.MessageToast.show("Authentication failed");
			} else {
				sap.m.MessageToast.show("Either User ID or Password is empty");
			}

		}

	});
});