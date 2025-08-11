import express from "express";
import http from "http";
import { setupWebSocketServer } from "@/ws";

const port = process.env.PORT || 3000;

try {
	const app = express();
	const server = http.createServer(app);

	setupWebSocketServer(server);

	server.listen(port, () => {
		console.log(`server listening on port: ${port}`);
	});
} catch (err) {
	console.log(err);
}
