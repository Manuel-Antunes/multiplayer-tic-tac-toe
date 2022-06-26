import React, { useEffect, useState } from "react";
import { useTicTacToe } from "../contexts/TicTacToeContext";

const TicTacToe: React.FC = () => {
  const { gameBoard, xScore, oScore, move, isStarted } = useTicTacToe();

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
