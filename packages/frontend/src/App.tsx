import TicTacToe from "./components/TicTacToe";
import { TicTacToeProvider } from "./contexts/TicTacToeContext";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <div className="App">
      <TicTacToeProvider>
        <MainLayout>
          <div className="mx-auto py-24 max-w-[1366px]">
            <h1 className="text-3xl dark:text-white mb-14">Jogo da velha</h1>
            <TicTacToe />
          </div>
        </MainLayout>
      </TicTacToeProvider>
    </div>
  );
}

export default App;
