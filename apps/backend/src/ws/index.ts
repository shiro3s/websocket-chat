import { type ServerOptions, WebSocketServer } from "ws";

type Server = ServerOptions["server"];

export const setupWebSocketServer = (server: Server) => {
	const wss = new WebSocketServer({
		server,
	});

	wss.on("connection", (ws) => {
		console.log("Client connect")

		ws.on("message", (message) => {
			console.log(message);
		});

		ws.on("close", () => {
			console.log("Client disconnected");
		});

		ws.on("close", (error) => {
			console.log("WSS Error:", error);
		});
	});
};
