import { useEffect, useRef } from "react";

export const useWebsocket = () => {
	const wsRef = useRef<WebSocket>(null);

	useEffect(() => {
		if (!wsRef.current) {
			wsRef.current = new WebSocket("ws:localhost:3000");

			wsRef.current.onopen = () => {
				console.log("Connected to WebSocket Server");
			};

			wsRef.current.onmessage = (event) => {
				console.log(event);
			};

			wsRef.current.onclose = () => {
				console.log("Disconnected from WebSocket Server");
			};

			wsRef.current.onerror = (error) => {
				console.log("WebSocket Error:", error);
			};

			return () => {
				wsRef.current?.close();
        wsRef.current = null
			};
		}
	}, []);
};
