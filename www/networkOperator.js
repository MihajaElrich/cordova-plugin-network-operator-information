/*
 * Cordova Network Provoder Plugin for Android
 * Cordova 3.0.0
 * Email: velonirinamihaja[at]gmail[dot]com
 * Author: Mihaja Velonirina
 * Date: 08/08/2020
 */


function NetworkOperator() {}


NetworkOperator.prototype.getNetworksOperator = function(successCallback, failureCallback) {
	return cordova.exec(
		successCallback,
		failureCallback,
		'NetworkOperator',
		'getNetworksOperator',
		[]);
}




// Installation constructor that binds networkProvider to window
NetworkOperator.install = function() {
	if (!window.plugins) {
	  window.plugins = {};
	}
	window.plugins.NetworkOperator = new NetworkOperator();
	return window.plugins.NetworkOperator;
  };
  
  cordova.addConstructor(NetworkOperator.install);

