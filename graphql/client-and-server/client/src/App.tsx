import React, { useState } from "react";
import { createClient, Provider, useQuery } from "urql";
import { dedupExchange, cacheExchange, fetchExchange, errorExchange } from '@urql/core';

const client = createClient({
  url: "http://localhost:4000/graphql",
  exchanges: [
    dedupExchange,
    cacheExchange,
    errorExchange({
      onError: (error) => {
        console.error(error);
      }
    }),
    fetchExchange
  ]
});

const postsQuery = `
  query allPosts {
    posts {
      id
      title
      content
    }
  }
`;

// 修正後のPost型
type Post = {
  id: string; // もしIDが数字なら、number型に変更してください。
  title: string;
  content: string;
};

const Posts = () => {
  const [result] = useQuery({
    query: postsQuery
  });
  const [postId, setPostId] = useState<number | null>(null); // 修正: 型をnumberに変更

  if (result.fetching) return <p>Loading...</p>;
  if (result.error) return <p>Error: {result.error.message}</p>;

  return (
    <div>
      {result.data && result.data.posts.map((post: Post) => (
        <div key={post.id} onClick={() => setPostId(Number(post.id))}> {/* 型変換を追加 */}
          {/* 修正: 個別に表示 */}
          <p>ID: {post.id}</p>
          <p>Title: {post.title}</p>
          <p>Content: {post.content}</p>
        </div>
      ))}
      {postId && <p>Selected Post: {postId}</p>}
    </div>
  );
};

const App = () => {
  return (
    <Provider value={client}>
      <div>
        <h1>URQL Example</h1>
        <Posts />
      </div>
    </Provider>
  );
};

export default App;
