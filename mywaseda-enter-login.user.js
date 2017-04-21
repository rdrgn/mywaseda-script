// ==UserScript==
// @name        MyWaseda Enter Login
// @namespace   http://kize.net
// @description Scripts to enable enter key on MyWaseda login page
// @include     https://iaidp.ia.waseda.jp/idp/profile/SAML2/Redirect/*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @version     1.0
// ==/UserScript==

jQuery(function () {
	jQuery('#j_username').unbind('keypress');
	jQuery('#j_password').unbind('keypress');
	jQuery('#btn-save').attr('value', jQuery('#btn-save').attr('value') + ' (Enter)');
});
