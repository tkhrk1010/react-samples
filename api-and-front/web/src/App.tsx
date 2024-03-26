import React, { useEffect, useState } from 'react';
import './App.css';

interface Item {
  id: number;
  name: string;
}

// APIからデータを取得する関数をJSON形式で取得するように更新
const fetchApiData = async (): Promise<Item[]> => {
  try {
    const response = await fetch('http://localhost:8080/');
    const data: Item[] = await response.json();
    return data;
  } catch (error) {
    console.error("Fetching API data failed:", error);
    // エラーハンドリングを改善する場合は適切なエラー処理を追加
    return [];
  }
}

// hello関数をそのまま利用
function hello(name: string) {
  return `Hello, ${name}!`;
}

// APIから取得したデータを表形式で表示するコンポーネントに書き換え
const ApiData: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchApiData();
      setItems(data);
    };
    
    fetchData();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Appコンポーネント
function App() {
  return (
    <div className="App">
      <p>{hello("hoge")}</p>
      <ApiData />
    </div>
  );
}

export default App;
