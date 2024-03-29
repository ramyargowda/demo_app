sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("demo_git.demo_git.controller.master", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf demo_git.demo_git.view.master
		 */
		onInit: function () {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		},
		onSelectItem: function(oEvent) {
			var sPath = oEvent.getParameter("listItem");
			var aPath = sPath.getBindingContextPath();
			this.oRouter.navTo("Detail1",{
				employeeID: aPath.split("/")[aPath.split("/").length-1]
			});
		},
		onSearch: function(oEvent) {
			var searchStr = oEvent.getParameter("query");
			if(!searchStr){
				searchStr = oEvent.getParameter("newValue");
			}
				var eName = new sap.ui.model.Filter(
					"preferredFullName",
					sap.ui.model.FilterOperator.Contains,
					searchStr
				);
				var eId = new sap.ui.model.Filter(
					"userId",
					sap.ui.model.FilterOperator.Contains,
					searchStr
				);
				var filters = new sap.ui.model.Filter({
						filters: [eName, eId],
						and: false
					});
				var aFilters = [filters];
				var oList = this.getView().byId("idEmpList");
				oList.getBinding("items").filter(aFilters);
			
		}
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf demo_git.demo_git.view.master
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf demo_git.demo_git.view.master
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf demo_git.demo_git.view.master
		 */
		//	onExit: function() {
		//
		//	}

	});

});