const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

// GraphQLスキーマ定義
const schema = buildSchema(`
  type Query {
    countries: [Country]
  }
  
  type Country {
    name: String
  }
`);

// ルートリゾルバ
// countriesリゾルバはCountry型のオブジェクトの配列を返すように修正
const root = {
  countries: () => {
    return [
      { name: "Hello world!" },
    ];
  },
};

const app = express();

// CORSを許可するミドルウェア
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    // preflightリクエストに対して204 No Contentを返す
    return res.sendStatus(204);
  }
  next();
});

// GraphQLハンドラ
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true, // GraphiQL IDEを有効化
  })
);

// サーバー起動
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`);
});
