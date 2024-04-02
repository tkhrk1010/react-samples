# hasura

dockerを使うときは、--hostをつけるのがコツ。
```
npm run dev --host
```

hasuraで必要な設定
- tableをpublic schemaに作成(DBに接続したら、trackボタンが出る)
- relationship tabからrelationshipを手動設定(trackボタンが出る)
- admin roleであれば問題ないが、その他roleを使う場合、publicというroleに対するaccess permissionの設定(headerで指定されている)。aggregationも必要なので注意

TODO:
- [ ] postgresqlに繋いで、init fileを作成 