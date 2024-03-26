package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        // すべてのオリジンからのリクエストを許可
		w.Header().Set("Access-Control-Allow-Origin", "*") 
		
        log.Println("Request received")
		fmt.Fprintf(w, "Hello from Go API!")
	})

	fmt.Println("Server is running on http://localhost:8080")
	http.ListenAndServe(":8080", nil)
}
