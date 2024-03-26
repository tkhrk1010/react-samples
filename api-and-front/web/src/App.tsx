import React, { useEffect, useState } from 'react';
import './App.css';

// APIからデータを取得する関数
const fetchApiData = async (): Promise<string> => {
  try {
    const response = await fetch('http://localhost:8080/');
    const data = await response.text();
    return data;
  } catch (error) {
    console.error("Fetching API data failed:", error);
    return "Error fetching data";
  }
}

// hello関数をそのまま利用
function hello(name: string) {
  return `Hello, ${name}!`;
}

// APIから取得したデータを表示するコンポーネント
const ApiData: React.FC = () => {
  const [apiResponse, setApiResponse] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchApiData();
      setApiResponse(data);
    };
    
    fetchData();
  }, []);

  return <p>API Response: {apiResponse}</p>;
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
