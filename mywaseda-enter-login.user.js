// ==UserScript==
// @name        MyWaseda Enter Login
// @namespace   https://remin.jp
// @version     1.1
// @author      remin
// @description Scripts to enable enter key on MyWaseda login page
// @include     https://iaidp.ia.waseda.jp/idp/profile/SAML2/Redirect/*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// ==/UserScript==

$(() => {
  $('#j_username, #j_password').on('keypress', e => {
    if ((e.which || e.keyCode) === 13) {
      $('.col-xs-12 .btn-save').click();
    }
  });
  $('#btn-save').attr('value', $('#btn-save').attr('value') + ' (Enter)');
});
