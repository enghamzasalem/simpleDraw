// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.controller('Sign', function($scope, $cordovaSocialSharing ) {
	var wrapper = document.getElementById("signature-pad"),
    clearButton = wrapper.querySelector("[data-action=clear]"),
    saveButton = wrapper.querySelector("[data-action=save]"),
	   share1 = wrapper.querySelector("[data-action=share1]"), 
	//backButton = wrapper.querySelector("[data-action=back]"),
    canvas = wrapper.querySelector("canvas"),
    signaturePad;

// Adjust canvas coordinate space taking into account pixel ratio,
// to make it look crisp on mobile devices.
// This also causes canvas to be cleared.

function resizeCanvas() {
    // When zoomed out to less than 100%, for some very strange reason,
    // some browsers report devicePixelRatio as less than 1
    // and only part of the canvas is cleared then.
    var ratio =  Math.max(window.devicePixelRatio || 1, 1);
    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    canvas.getContext("2d").scale(ratio, ratio);
	
}

window.onresize = resizeCanvas;
resizeCanvas();

signaturePad = new SignaturePad(canvas);

		  
		  
		  
		  var init = function () {
			 
	 
};
init();
clearButton.addEventListener("click", function (event) {
		
    signaturePad.clear();

});
 
saveButton.addEventListener("click", function (event) {
    if (signaturePad.isEmpty()) {
        alert("أرسم يا سمير");
    } else {
      
		  
		   var image1 = document.getElementById("newimage");
		
	      image1.src=signaturePad.toDataURL();
		 
		   var div1 = document.getElementById("signature-pad");
		   div1.style.display='none';
		     var div2 = document.getElementById("div2");
		   div2.style.display='block';
	 
    }
});
share1.addEventListener("click", function (event) {
	  alert("333" );
  // $cordovaSocialSharing.share("My message", "My Subject", "", "http://ngcordova.com/docs/plugins/socialSharing/");
});
	var canvas=getElementById("signcanvas");
	var signaturePad= new signaturePad(canvas);
	$scope.ClearCnavas=function(){
		
		signaturePad.clear();
		
	};
	
		$scope.SaveCnavas=function(){
			
		var sigimg=signaturePad.ToDataUrl();
	$scope.signtureimage=sigimg;
		
	};
	
	
	$scope.shareAnywhere = function() {
		  alert("333" );
		
        $cordovaSocialSharing.share("My message", "My Subject", "", "http://ngcordova.com/docs/plugins/socialSharing/");
	
    }
		$scope.shareAnywhere2 = function(message, image, link) {
		
		 	alert("2" );
        $cordovaSocialSharing.share(message, image, link);
	
    }
	
	
});