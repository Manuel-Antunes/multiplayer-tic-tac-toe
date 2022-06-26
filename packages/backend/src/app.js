import express from "express";
import http from "http";
import io from "socket.io";
import { TicTacToe } from "./TicTacToe";

const app = express();
const server = http.createServer(app);

const socket = io(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const gameSocket = socket.of("/tic-tac-toe");
const game = new TicTacToe();
const players = [];

gameSocket.on("connection", socket => {
  if (players.length < 2) {
    if (!players.find(player => player.player === "X")) {
      players.push({ socket, player: "X" });
      socket.join("X");
    } else if (!players.find(player => player.player === "O")) {
      players.push({ socket, player: "O" });
      socket.join("O");
    }else {
      socket.disconnect();
    }
    socket.on("start", () => {
      socket.emit("start", game);
    });
    socket.on("move", data => {
      const player = socket.rooms.has("X") ? "X" : "O";
      if (game.turn === player) {
        game.moveGame(data.column, data.row);
        const winner = game.handleVerifyGameEnd();
        if (winner) {
          gameSocket.emit("update", game);
          gameSocket.emit("winner", { winner });
          game.handleBuildGameBoard();
          gameSocket.emit("update", game);
        } else {
          if (!game.isGameEnded()) {
            game.turn = game.turn === "X" ? "O" : "X";
          }
          gameSocket.emit("update", game);
        }
      }
    });
    socket.on("verify", () => {
      game.handleVerifyGameEnd();
      gameSocket.emit("update", game);
    });
    if (players.length === 2) {
      console.log("Game started");
      gameSocket.to("X").emit("start", { game, player: "X" });
      gameSocket.to("O").emit("start", { game, player: "O" });
    }
  }
  socket.on("disconnect", socket => {
    console.log("Player disconnected");
    console.log(socket);
    players.splice(players.indexOf(socket), 1);
  });
});

export default server;
