import React, { useEffect, useState } from "react";
import { useTicTacToe } from "../contexts/TicTacToeContext";

const TicTacToe: React.FC = () => {
  const { turn, gameBoard, xScore, oScore, move, isStarted } = useTicTacToe();
  // const handleBuildGameBoard = () => {
  //   const board: { [key: string]: string[] } = {};
  //   for (let i = 0; i < 3; i++) {
  //     for (let j = 0; j < 3; j++) {
  //       if (!board[i]) {
  //         board[i] = [];
  //       }
  //       board[i].push("");
  //     }
  //   }
  //   setGameBoard(board);
  // };

  // const handleVerifyGameEnd = () => {
  //   const rows = Object.values(gameBoard);
  //   if (rows.length === 0) {
  //     return;
  //   }
  //   const winner = getWinner();
  //   if (winner) {
  //     alert(`${winner} won!`);
  //     if (winner === "X") {
  //       setXScore(xScore + 1);
  //     } else {
  //       setOScore(oScore + 1);
  //     }
  //     handleBuildGameBoard();
  //   } else {
  //     if (isGameEnded()) {
  //       alert("Draw!");
  //       handleBuildGameBoard();
  //     } else {
  //       setTurn(turn === "X" ? "O" : "X");
  //     }
  //   }
  // };

  // const getWinner = (): "X" | "O" | void => {
  //   const board = gameBoard;
  //   for (let i = 0; i < 3; i++) {
  //     if (
  //       board[i][0] !== "" &&
  //       board[i][0] === board[i][1] &&
  //       board[i][1] === board[i][2]
  //     ) {
  //       return turn;
  //     }
  //     if (
  //       board[0][i] !== "" &&
  //       board[0][i] === board[1][i] &&
  //       board[1][i] === board[2][i]
  //     ) {
  //       return turn;
  //     }
  //     if (
  //       board[0][0] !== "" &&
  //       board[0][0] === board[1][1] &&
  //       board[1][1] === board[2][2]
  //     ) {
  //       return turn;
  //     }
  //     if (
  //       board[0][2] &&
  //       board[0][2] === board[1][1] &&
  //       board[1][1] === board[2][0]
  //     ) {
  //       return turn;
  //     }
  //   }
  // };

  // const isGameEnded = (): boolean => {
  //   for (let i = 0; i < 3; i++) {
  //     for (let j = 0; j < 3; j++) {
  //       if (gameBoard[i][j] === "") {
  //         return false;
  //       }
  //     }
  //   }
  //   return true;
  // };

  // useEffect(() => {
  //   handleBuildGameBoard();
  // }, []);

  // useEffect(() => {
  //   handleVerifyGameEnd();
  // }, [gameBoard]);

  const handleClick = (column: string, row: number) => {
    if (gameBoard[column][row] === "") {
      move(column, "" + row);
    }
  };

  return (
    <div className="flex flex-1 flex-col items-center">
      {!isStarted ? (
        <div className="dark:text-white p-20 text-3xl">Game not start yet, waiting for other player to join</div>
      ) : (
        <>
          <div className="px-10 py-5 rounded mb-10 gap-5 flex dark:bg-gray-700 dark:text-white">
            <div className="text-lg text-red-500">
              <strong>X</strong> - {xScore}
            </div>
            <div className="text-lg text-blue-500">
              <strong>O</strong> - {oScore}
            </div>
          </div>
          <div className="grid mx-auto grid-cols-3 w-fit grid-rows-3 gap-10">
            {Object.keys(gameBoard).map(key =>
              gameBoard[key].map((value, index) => (
                <button
                  onClick={() => {
                    handleClick(key, index);
                  }}
                  key={`${key}:${index}`}
                  className="w-60 h-60 justify-self-center dark:bg-white dark:hover:bg-gray-200"
                >
                  {value}
                </button>
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default TicTacToe;
