// ==UserScript==
// @name        MyWaseda Enter Login
// @namespace   http://kize.net
// @description Scripts to enable enter key on MyWaseda login page
// @include     https://iaidp.ia.waseda.jp/idp/profile/SAML2/Redirect/*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @version     1.0
// ==/UserScript==

jQuery(function () {
	$('#j_username').unbind('keypress');
	$('#j_password').unbind('keypress');
	$('#btn-save').attr('value', $('#btn-save').attr('value') + ' (Enter)');
});
