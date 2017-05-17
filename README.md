# MyWaseda Script

[MyWaseda](https://my.waseda.jp/)用ユーザースクリプト。

Greasemonkey（Firefox）やTampermonkey（Google Chrome）の上で動作する.user.jsファイルです。特定のウェブページの特定の要素に対して処理を行うため、ページの仕様変更や更新によって動作しなくなる場合があります。

## Installation

1. ブラウザにユーザースクリプト実行アドオン（Greasemonkey, Tampermonkey）をインストールする。
2. ブラウザでスクリプトを開く。
3. アドオンにスクリプトをインストールするか尋ねられるのでインストールする。

## Scripts

### [MyWaseda Enter Login](https://github.com/rdrgn/mywaseda-script/raw/master/mywaseda-enter-login.user.js)

ログイン画面のenterキー無効可を解除するスクリプト。

ログイン画面のテキストボックス要素には次のような関数がバインドされているため、enterキーでsubmitすることができなくなっています。

```js
$("#j_username").keypress(function (e) {
	if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
		return false;
	}
});

$("#j_password").keypress(function (e) {
	if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
		return false;
	}
});
```

そこでユーザースクリプトではテキストボックスにバインドされた関数を削除しています。

```js
jQuery('#j_username').unbind('keypress');
jQuery('#j_password').unbind('keypress');
```
