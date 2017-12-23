// ==UserScript==
// @name        MyWaseda Enter Login
// @namespace   https://remin.jp
// @version     1.0
// @author      remin
// @description Scripts to enable enter key on MyWaseda login page
// @include     https://iaidp.ia.waseda.jp/idp/profile/SAML2/Redirect/*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// ==/UserScript==

jQuery(function () {
	jQuery('#j_username').unbind('keypress');
	jQuery('#j_password').unbind('keypress');
	jQuery('#btn-save').attr('value', jQuery('#btn-save').attr('value') + ' (Enter)');
});
