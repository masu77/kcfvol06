(function() {
    'use strict';

    // レコード追加画面の保存実行前イベント
    /********************
    ***  ブランク　１
    *********************/
        var record = event.record;

        var exportQuantity = Number(record['出庫量']['value']);

        var appId = ;                   // 商品マスタのアプリIDの設定
        var params = {
            /********************
            ***  ブランク　２
            *********************/
        };

        /********************
        ***  ブランク　３
        *********************/
        ).then(function(resp) {
            if (!resp.records[0]) {
                event['error'] = "商品マスタが見つかりません。";
                return event;
            } else {
                var updateQuantity = Number(resp.records[0]['在庫量']['value']) - exportQuantity;

                if (updateQuantity < 0) {
                    // 在庫数がマイナスになる場合はエラーにして中断
                    /********************
                    ***  ブランク　４
                    *********************/
                    return event;
                }

                // 商品アプリの在庫数を更新
                var params = {
                    /********************
                    ***  ブランク　５
                    *********************/
                };

                /********************
                ***  ブランク　６
                *********************/
                ).then(function(resp) {
                    return event;
                }).catch(function(error) {
                    event['error'] = "更新に失敗しました。";
                    return event;
                });
            }
        }).catch(function(error) {
            event['error'] = "商品マスタを取得できませんでした。";
            return event;
        });
    });

})();
