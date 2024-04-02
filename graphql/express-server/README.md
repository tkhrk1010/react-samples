https://graphql.org/graphql-js/running-an-express-graphql-server/
https://graphql.org/graphql-js/graphql-clients/

```
node server.js
```
and
```
curl -X POST \
-H "Content-Type: application/json" \
-d '{"query": "{ hello }"}' \
http://localhost:4000/graphql
```