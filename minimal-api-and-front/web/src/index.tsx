import React, { useEffect, useState } from 'react';

// ReactDOMは古くて非推奨らしい
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

interface Item {
  id: number;
  name: string;
}

// APIからデータを取得する関数
const fetchApiData = async (): Promise<Item[]> => {
  try {
    const response = await fetch('http://localhost:8080/');
    const data: Item[] = await response.json();
    return data;
  } catch (error) {
    console.error("Fetching API data failed:", error);
    return [];
  }
}

// APIデータを表示するコンポーネント
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
          {items.map((item) => (
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
const App: React.FC = () => {
  return (
    <div>
      <ApiData />
    </div>
  );
}


// ReactDOMは非推奨らしいので、createRootを使う
// ReactDOM.render(<App />, document.getElementById('root'));
const container = document.getElementById('root');
const root = createRoot(container); // createRootコンテナを作成する
root.render(<App />);
