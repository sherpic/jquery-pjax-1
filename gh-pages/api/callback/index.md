---
layout: bootstrap
title: Callback
type: page
nav: nav
class: style-api style-api-detail
---

# Callback
コールバックの実行ポイントは数十箇所あり、詳細な実行タイミングを設定できます。また、戻り値の指定によりURLやTITLEなどほとんどの更新処理を個別に無効化できます。

コンテキストと第二引数に現在の動作に使用されているpjaxの設定が設定されます。この設定は`scope`パラメータで指定した個別の設定を適用後のものです。この設定を変更することはできません。

## callback( event, setting )
更新の描画後に実行されます。

## callbacks
多数のコールバック実行タイミングを持ちます。`update.any.before`で`false`を返すとページ更新処理のうちanyの示す部分の更新処理をキャンセルします。使用されない更新項目のコールバックは実行されません。

ajax系コールバックのうち`ajax.success` `ajax.error` `ajax.complete`はjQuery1.6+ではDeferredオブジェクトにより実行されるため外部から引き継いだリクエストでも実行されます。

update系コールバックは対象となる処理の制御とその前後処理を主な目的として設定されているため、間をおいて複数回実行されるものもあり、全体的な処理の進行状況の把握などほかのコールバックと連動させる用途にはあまり適していません。

### ajax.xhr( event, setting )
Ajaxの同名のメソッド内で実行されます。外部から引き継いだリクエストでは実行されません。

### ajax.beforeSend( event, setting, data, ajaxSettings )
〃

### ajax.dataFilter( event, setting, data, dataType )
〃

### ajax.success( event, setting, data, textStatus, jqXHR )
Ajaxの同名のメソッド内で実行されます。jQuery1.6+ではDeferredオブジェクトにより実行され、外部から引き継いだリクエストでも実行されます。

### ajax.error( event, setting, jqXHR, textStatus, errorThrown )
〃

### ajax.complete( event, setting, jqXHR, textStatus )
〃

### update.redirect.before( event, setting, redirectLocation, origLocation, destLocation )
ページの更新処理においてリダイレクトの確認前に実行されます。

### update.redirect.after( event, setting, redirectLocation, origLocation, destLocation )
ページの更新処理においてリダイレクトの確認後に実行されます。

### update.blur.before( event, setting, origLocation, destLocation )
ページの更新処理においてフォーカスの解除前に実行されます。

### update.blur.after( event, setting, origLocation, destLocation )
ページの更新処理においてフォーカスの解除後に実行されます。

### update.url.before( event, setting, origLocation, destLocation )
ページの更新処理においてURLの更新前に実行されます。

### update.url.after( event, setting, origLocation, destLocation )
ページの更新処理においてURLの更新後に実行されます。

### update.rewrite.before( event, setting, srcDocument, dstDocument )
ページの更新処理において更新元HTMLDocumentの書き換え前に実行されます。

### update.rewrite.after( event, setting, srcDocument, dstDocument )
ページの更新処理において更新元HTMLDocumentの書き換え後に実行されます。

### update.title.before( event, setting, srcTitle, dstTitle )
ページの更新処理においてタイトルの更新前に実行されます。

### update.title.after( event, setting, srcTitle, dstTitle )
ページの更新処理においてタイトルの更新後に実行されます。

### update.head.before( event, setting, srcHead, dstHead )
ページの更新処理においてHEAD要素の更新前に実行されます。

### update.head.after( event, setting, srcHead, dstHead )
ページの更新処理においてHEAD要素の更新後に実行されます。

### update.content.before( event, setting, srcContent, dstContent )
ページの更新処理においてコンテンツの更新前に実行されます。

### update.content.after( event, setting, srcContent, dstContent )
ページの更新処理においてコンテンツの更新後に実行されます。

### update.focus.before( event, setting, origLocation, destLocation )
ページの更新処理においてフォーカスの設定前に実行されます。

### update.focus.after( event, setting, origLocation, destLocation )
ページの更新処理においてフォーカスの設定後に実行されます。

### update.balance.before( event, setting, host, loadtime, size )
ページの更新処理においてロードバランスの周辺処理前に実行されます。

### update.balance.after( event, setting, host, loadtime, size )
ページの更新処理においてロードバランスの周辺処理後に実行されます。

### update.css.before( event, setting, srcCSS, dstCSS )
ページの更新処理においてCSSの読み込み処理前に実行されます。

### update.css.after( event, setting, srcCSS, dstCSS )
ページの更新処理においてCSSの読み込み処理後に実行されます。

### update.script.before( event, setting, srcScript, dstScript )
ページの更新処理においてJavaScriptの読み込み処理前に実行されます。

### update.script.after( event, setting, srcScript, dstScript )
ページの更新処理においてJavaScriptの読み込み処理後に実行されます。

### update.scroll.before( event, setting )
ページの更新処理においてスクロール位置の更新処理前に実行されます。

### update.scroll.after( event, setting )
ページの更新処理においてスクロール位置の更新処理後に実行されます。
