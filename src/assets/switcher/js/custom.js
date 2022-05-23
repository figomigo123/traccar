$(function() {
	'use strict'
	

	// ______________Switcher
	
	/*Darkmode*/
	$('#myonoffswitch').click(function () {    
		if (this.checked) {
			$('body').addClass('dark-theme');
			$('body').removeClass('Light-mode');
			localStorage.setItem("dark-theme", "True");
		}
		else {
			$('body').removeClass('dark-theme');
			localStorage.setItem("dark-theme", "false");
		}
	});
	
	/*Lightmode*/
	$('#myonoffswitch2').click(function () {    
		if (this.checked) {
			$('body').addClass('Light-mode');
			$('body').removeClass('dark-theme');
			localStorage.setItem("Light-mode", "True");
		}
		else {
			$('body').removeClass('Light-mode');
			localStorage.setItem("Light-mode", "false");
		}
	});
	
	
 
  
  /*Skin modes*/
	
	
	$(document).on("click", '#myonoffswitch7', function () {    
		if (this.checked) {
			$('body').addClass('body-default');
			$('body').removeClass('body-style1');
			localStorage.setItem("body-default", "True");
		}
		else {
			$('body').removeClass('body-default');
			localStorage.setItem("body-default", "false");
		}
	});
	$(document).on("click", '#myonoffswitch6', function () {    
		if (this.checked) {
			$('body').addClass('body-style1');
			$('body').removeClass('body-default');
			localStorage.setItem("body-style1", "True");
		}
		else {
			$('body').removeClass('body-style1');
			localStorage.setItem("body-style1", "false");
		}
	});
	
	/*Horizontal Styles*/
	$(document).on("click", '#myonoffswitch2', function () {    
		if (this.checked) {
			$('body').addClass('horizontal-light');
			$('body').removeClass('horizontal-color');
			$('body').removeClass('horizontal-dark');
			$('body').removeClass('horizontal-gradient');
			$('body').removeClass('horizontal-darktheme');
			$('body').removeClass('horizontal-theme');
			localStorage.setItem("horizontal-light", "True");
		}
		else {
			$('body').removeClass('horizontal-light');
			localStorage.setItem("horizontal-light", "false");
		}
	});
	$(document).on("click", '#myonoffswitch3', function () {    
		if (this.checked) {
			$('body').addClass('horizontal-color');
			$('body').removeClass('horizontal-light');
			$('body').removeClass('horizontal-dark');
			$('body').removeClass('leftmenu-light');
			$('body').removeClass('horizontal-light-1');
			$('body').removeClass('horizontal-theme');
			$('body').removeClass('horizontal-gradient');
			localStorage.setItem("horizontal-color", "True");
		}
		else {
			$('body').removeClass('horizontal-color');
			localStorage.setItem("horizontal-color", "false");
		}
	});
	$(document).on("click", '#myonoffswitch4', function () {    
		if (this.checked) {
			$('body').addClass('horizontal-dark');
			$('body').removeClass('horizontal-color');
			$('body').removeClass('horizontal-light');
			$('body').removeClass('horizontal-gradient');
			$('body').removeClass('horizontal-theme');
			localStorage.setItem("horizontal-dark", "True");
		}
		else {
			$('body').removeClass('horizontal-dark');
			localStorage.setItem("horizontal-dark", "false");
		}
	});
	$(document).on("click", '#myonoffswitch5', function () {    
		if (this.checked) {
			$('body').addClass('horizontal-gradient');
			$('body').removeClass('horizontal-color');
			$('body').removeClass('horizontal-light');
			$('body').removeClass('horizontal-dark');
			$('body').removeClass('horizontal-light');
			$('body').removeClass('horizontal-light-1');
			$('body').removeClass('horizontal-theme');
			$('body').removeClass('horizontal-darktheme');
			localStorage.setItem("horizontal-gradient", "True");
		}
		else {
			$('body').removeClass('horizontal-gradient');
			localStorage.setItem("horizontal-gradient", "false");
		}
	});	
	$(document).on("click", '#myonoffswitch8', function () {    
		if (this.checked) {
			$('body').addClass('reset');
			$('body').removeClass('horizontal-color');
			$('body').removeClass('horizontal-light');
			$('body').removeClass('horizontal-dark');
			$('body').removeClass('horizontal-gradient');
			$('body').removeClass('horizontal-light-1');
			$('body').removeClass('horizontal-color');
			$('body').removeClass('theme-style2');
			$('body').removeClass('horizontal-theme');
			$('body').removeClass('horizontal-darktheme');
			localStorage.setItem("reset", "True");
		}
		else {
			$('body').removeClass('reset');
			localStorage.setItem("reset", "false");
		}
	});
	
	/*Leftmenu Styles*/
	$(document).on("click", '#myonoffswitch9', function () {    
		if (this.checked) {
			$('body').addClass('leftmenu-light');
			$('body').removeClass('leftmenu-color');
			$('body').removeClass('leftmenu-dark');
			$('body').removeClass('leftmenu-gradient');
			$('body').removeClass('leftbgimage');
			$('body').removeClass('leftbgimage2');
			$('body').removeClass('leftbgimage3');
			$('body').removeClass('leftbgimage4');
			$('body').removeClass('leftbgimage5');
			$('body').removeClass('theme-style2');
			$('body').removeClass('horizontal-darkthem');
			localStorage.setItem("leftmenu-light", "True");
		}
		else {
			$('body').removeClass('leftmenu-light');
			localStorage.setItem("leftmenu-light", "false");
		}
	});
	$(document).on("click", '#myonoffswitch10', function () {    
		if (this.checked) {
			$('body').addClass('leftmenu-color');
			$('body').removeClass('leftmenu-light');
			$('body').removeClass('leftmenu-dark');
			$('body').removeClass('leftmenu-gradient');
			$('body').removeClass('horizontal-darkthem');
			localStorage.setItem("leftmenu-color", "True");
		}
		else {
			$('body').removeClass('leftmenu-color');
			localStorage.setItem("leftmenu-color", "false");
		}
	});
	$(document).on("click", '#myonoffswitch11', function () {    
		if (this.checked) {
			$('body').addClass('leftmenu-dark');
			$('body').removeClass('leftmenu-color');
			$('body').removeClass('leftmenu-light');
			$('body').removeClass('leftmenu-gradient');
			$('body').removeClass('horizontal-darkthem');
			localStorage.setItem("leftmenu-dark", "True");
		}
		else {
			$('body').removeClass('leftmenu-dark');
			localStorage.setItem("leftmenu-dark", "false");
		}
	});
	$(document).on("click", '#myonoffswitch12', function () {    
		if (this.checked) {
			$('body').addClass('leftmenu-gradient');
			$('body').removeClass('leftmenu-color');
			$('body').removeClass('leftmenu-light');
			$('body').removeClass('leftmenu-dark');
			$('body').removeClass('plain-color');
			$('body').removeClass('plain-color2');
			$('body').removeClass('theme-style');
			$('body').removeClass('theme-style2');
			$('body').removeClass('horizontal-darkthem');
			localStorage.setItem("leftmenu-gradient", "True");
		}
		else {
			$('body').removeClass('leftmenu-gradient');
			localStorage.setItem("leftmenu-gradient", "false");
		}
	});	
	$(document).on("click", '#myonoffswitch13', function () {    
		if (this.checked) {
			$('body').addClass('reset');
			$('body').removeClass('leftmenu-color');
			$('body').removeClass('leftmenu-light');
			$('body').removeClass('leftmenu-dark');
			$('body').removeClass('leftmenu-gradient');
			$('body').removeClass('plain-color');
			$('body').removeClass('plain-color2');
			$('body').removeClass('theme-style');
			$('body').removeClass('theme-style2');
			$('body').removeClass('horizontal-darktheme');
			
			
			localStorage.setItem("reset", "True");
		}
		else {
			$('body').removeClass('reset');
			localStorage.setItem("reset", "false");
		}
	});
	
	$(document).on("click", '#myonoffswitch14', function () {    
		if (this.checked) {
			$('body').addClass('theme-style');
			$('body').removeClass('leftmenu-color');
			$('body').removeClass('leftmenu-light');
			$('body').removeClass('leftmenu-dark');
			$('body').removeClass('leftmenu-gradient');
			$('body').removeClass('plain-color');
			$('body').removeClass('plain-color2');
			$('body').removeClass('leftbgimage1');
			$('body').removeClass('leftbgimage2');
			$('body').removeClass('leftbgimage3');
			$('body').removeClass('leftbgimage4');
			$('body').removeClass('leftbgimage5');
			localStorage.setItem("theme-style", "True");
		}
		else {
			$('body').removeClass('theme-style');
			localStorage.setItem("theme-style", "false");
		}
	});
	
	$(document).on("click", '#myonoffswitch15', function () {    
		if (this.checked) {
			$('body').addClass('theme-style2');
			$('body').removeClass('leftmenu-color');
			$('body').removeClass('leftmenu-light');
			$('body').removeClass('leftmenu-dark');
			$('body').removeClass('leftmenu-gradient');
			$('body').removeClass('leftbgimage1');
			$('body').removeClass('leftbgimage2');
			$('body').removeClass('leftbgimage3');
			$('body').removeClass('leftbgimage4');
			$('body').removeClass('leftbgimage5');
			$('body').removeClass('horizontal-darkthem');
			localStorage.setItem("theme-style2", "True");
		}
		else {
			$('body').removeClass('theme-style2');
			localStorage.setItem("theme-style2", "false");
		}
	});
	
	$(document).on("click", '#myonoffswitch16', function () {    
		if (this.checked) {
			$('body').addClass('horizontal-light-1');
			$('body').removeClass('leftmenu-color');
			$('body').removeClass('leftmenu-light');
			$('body').removeClass('leftmenu-dark');
			$('body').removeClass('leftmenu-gradient');
			$('body').removeClass('leftbgimage1');
			$('body').removeClass('leftbgimage2');
			$('body').removeClass('leftbgimage3');
			$('body').removeClass('leftbgimage4');
			$('body').removeClass('leftbgimage5');
			$('body').removeClass('horizontal-color');
			$('body').removeClass('horizontal-gradient');
			$('body').removeClass('horizontal-color');
			$('body').removeClass('horizontal-darktheme');
			localStorage.setItem("theme-style2", "True");
		}
		else {
			$('body').removeClass('theme-style2');
			localStorage.setItem("theme-style2", "false");
		}
	});
	
	//Pattern
	$("a[data-theme]").click(function() {
		$("head link#theme").attr("href", $(this).data("theme"));
		$(this).toggleClass('active').siblings().removeClass('active');
	});
	
	
	
	
	/*--- Left-menu Image --*/
	// $('#leftmenuimage1').on('click', function() {
	//   $('body').removeClass('leftbgimage2');
	//   $('body').removeClass('leftbgimage3');
	//   $('body').removeClass('leftbgimage4');
	//   $('body').removeClass('leftbgimage5');
	//   $('body').removeClass('theme-style2');
	//   $('body').removeClass('theme-style');
	//   $('body').removeClass('horizontal-darktheme');
	  
	//   $('body').addClass('leftbgimage1');
	//   return false;
	// });
	$(document).on("click", '#leftmenuimage1', function () {    
		$('body').removeClass('leftbgimage2');
		  $('body').removeClass('leftbgimage3');
		  $('body').removeClass('leftbgimage4');
		  $('body').removeClass('leftbgimage5');
		  $('body').removeClass('theme-style2');
		  $('body').removeClass('theme-style');
		  $('body').removeClass('horizontal-darktheme');
		  
		  $('body').addClass('leftbgimage1');
		  return false;
		
	});
	
	$(document).on("click", '#leftmenuimage2', function (){
	  $('body').removeClass('leftbgimage1');
	  $('body').removeClass('leftbgimage3');
	  $('body').removeClass('leftbgimage4');
	  $('body').removeClass('leftbgimage5');
	  $('body').removeClass('theme-style2');
	  $('body').removeClass('theme-style');
	  $('body').removeClass('horizontal-darktheme');
	  $('body').addClass('leftbgimage2');
	  return false;
	});
	
	$(document).on("click", '#leftmenuimage3', function (){
	  $('body').removeClass('leftbgimage1');
	  $('body').removeClass('leftbgimage2');
	  $('body').removeClass('leftbgimage4');
	  $('body').removeClass('leftbgimage5');
	  $('body').removeClass('theme-style2');
	  $('body').removeClass('theme-style');
	  $('body').removeClass('horizontal-darktheme');
	  $('body').addClass('leftbgimage3');
	  return false;
	});
	
	$(document).on("click", '#leftmenuimage4', function (){
	  $('body').removeClass('leftbgimage1');
	  $('body').removeClass('leftbgimage2');
	  $('body').removeClass('leftbgimage3');
	  $('body').removeClass('leftbgimage5');
	  $('body').removeClass('theme-style2');
	  $('body').removeClass('theme-style');
	  $('body').removeClass('horizontal-darktheme');
	  $('body').addClass('leftbgimage4');
	  return false;
	});
	
	$(document).on("click", '#leftmenuimage5', function (){
	  $('body').removeClass('leftbgimage1');
	  $('body').removeClass('leftbgimage2');
	  $('body').removeClass('leftbgimage3');
	  $('body').removeClass('leftbgimage4');
	  $('body').removeClass('theme-style2');
	  $('body').removeClass('theme-style');
	  $('body').removeClass('horizontal-darktheme');
	  $('body').addClass('leftbgimage5');
	  return false;
	});
	

	/*--- horizontal-theme-style  Image --*/
	
	$(document).on("click", '#myonoffswitch22', function () {    
		if (this.checked) {
			$('body').addClass('horizontal-theme');
			$('body').removeClass('horizontal-gradient');
			$('body').removeClass('leftmenu-color');
			$('body').removeClass('leftmenu-light');
			$('body').removeClass('leftmenu-dark');
			$('body').removeClass('leftmenu-gradient');
			$('body').removeClass('leftbgimage1');
			$('body').removeClass('leftbgimage2');
			$('body').removeClass('leftbgimage3');
			$('body').removeClass('leftbgimage4');
			$('body').removeClass('leftbgimage5');
			$('body').removeClass('horizontal-darktheme');
			localStorage.setItem("horizontal-theme", "True");
		}
		else {
			$('body').removeClass('horizontal-theme');
			localStorage.setItem("horizontal-theme", "false");
		}
	});
	
	
	$(document).on("click", '#myonoffswitch23', function () {    
		if (this.checked) {
			$('body').addClass('horizontal-darktheme');
			$('body').removeClass('leftmenu-color');
			$('body').removeClass('horizontal-light-1');
			$('body').removeClass('leftmenu-light');
			$('body').removeClass('leftmenu-dark');
			$('body').removeClass('leftmenu-gradient');
			$('body').removeClass('leftbgimage1');
			$('body').removeClass('leftbgimage2');
			$('body').removeClass('leftbgimage3');
			$('body').removeClass('leftbgimage4');
			$('body').removeClass('leftbgimage5');
			$('body').removeClass('theme-style2');
			localStorage.setItem("horizontal-darktheme", "True");
		}
		else {
			$('body').removeClass('horizontal-darktheme');
			localStorage.setItem("horizontal-darktheme", "false");
		}
	});
	
});
	