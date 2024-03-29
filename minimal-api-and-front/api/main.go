package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type Item struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
}

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		items := []Item{
			{ID: 1, Name: "Item 1"},
			{ID: 2, Name: "Item 2"},
		}

		// HTTPレスポンスヘッダーにContent-Typeを設定
		w.Header().Set("Content-Type", "application/json")

		// CORS設定: すべてのオリジンからのリクエストを許可
		w.Header().Set("Access-Control-Allow-Origin", "*")

		// ステータスコード200を設定
		w.WriteHeader(http.StatusOK)

		// JSON形式でデータをエンコードし、レスポンスとして送信
		if err := json.NewEncoder(w).Encode(items); err != nil {
			fmt.Printf("Error encoding JSON: %v\n", err)
		}
	})

	fmt.Println("Server is running on http://localhost:8080")
	http.ListenAndServe(":8080", nil)
}
