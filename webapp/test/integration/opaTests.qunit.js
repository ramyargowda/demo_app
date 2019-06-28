/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"demo_git/demo_git/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});