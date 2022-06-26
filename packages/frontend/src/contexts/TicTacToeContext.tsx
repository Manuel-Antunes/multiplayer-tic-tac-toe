import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { io, Socket } from "socket.io-client";
import MySwal from "../services/swal";

interface TicTacToeContextData {
  gameBoard: { [key: string]: string[] };
  turn: "X" | "O";
  xScore: number;
  oScore: number;
  isStarted: boolean;
  me: "X" | "O";
  move: (column: string, row: string) => void;
}

const TicTacToeContext = createContext<TicTacToeContextData>(
  {} as TicTacToeContextData
);

interface TicTacToeProviderProps {
  children: React.ReactNode;
}

export const TicTacToeProvider: React.FC<TicTacToeProviderProps> = ({
  children,
}) => {
  useEffect(() => {
    const handleOnUpdate = (data: TicTacToeContextData) => {
      setGameBoard(data.gameBoard);
      setTurn(data.turn);
      setXScore(data.xScore);
      setOScore(data.oScore);
    };

    const handleOnWinner = (data: { winner: "X" | "O" }) => {
      if (data.winner === me) {
        MySwal.fire({
          title: "Você venceu!",
          icon: "success",
          confirmButtonText: "OK",
        })
      } else {
        MySwal.fire({
          title: "Você perdeu!",
          icon: "error",
          confirmButtonText: "OK",
        })
      }
    };

    const handleOnStart = (data: {
      game: TicTacToeContextData;
      player: "X" | "O";
    }) => {
      setMe(data.player);
      setIsStarted(true);
      handleOnUpdate(data.game);
    };

    const socket = io("ws://localhost:3333/tic-tac-toe");
    setSocket(socket);
    console.log(socket);
    socket?.on("start", handleOnStart);
    socket?.on("update", handleOnUpdate);
    socket?.on("winner", handleOnWinner);
    return () => {
      socket?.off("start", handleOnStart);
      socket?.off("update", handleOnUpdate);
      socket?.off("winner", handleOnWinner);
      setIsStarted(false);
    };
  }, []);

  const [socket, setSocket] = useState<Socket | null>(null);
  const [gameBoard, setGameBoard] = useState<{ [key: string]: string[] }>({});
  const [turn, setTurn] = useState<"X" | "O">("X");
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);
  const [me, setMe] = useState<"X" | "O">("X");
  const [isStarted, setIsStarted] = useState(false);

  const move = useCallback(
    (column: string, row: string) => {
      socket?.emit("move", { column, row });
    },
    [socket]
  );

  return (
    <TicTacToeContext.Provider
      value={{ gameBoard, turn, xScore, oScore, move, isStarted, me }}
    >
      {children}
    </TicTacToeContext.Provider>
  );
};

export const useTicTacToe = (): TicTacToeContextData => {
  const context = useContext(TicTacToeContext);
  if (!context) {
    throw new Error("useTicTacToe must be used within a TicTacToeProvider");
  }
  return context;
};
