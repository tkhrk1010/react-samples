import React from 'react';
import ReactDOM from 'react-dom/client'; // '/client' をインポートパスに追加
import App from './App';

// `createRoot`メソッドを使ってアプリケーションのルートを作成
const root = ReactDOM.createRoot(document.getElementById('root'));

// `root.render`を呼び出して、Appコンポーネントをレンダリング
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
