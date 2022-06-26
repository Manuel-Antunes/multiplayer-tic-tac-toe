export class TicTacToe {
  constructor() {
    this.xScore = 0;
    this.oScore = 0;
    this.turn = "X";
    this.handleBuildGameBoard();
  }

  moveGame(column, row) {
    if (this.gameBoard[column][row] === "") {
      this.gameBoard[column][row] = this.turn;
    }
  }

  handleBuildGameBoard() {
    this.gameBoard = {};
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (!this.gameBoard[i]) {
          this.gameBoard[i] = [];
        }
        this.gameBoard[i].push("");
      }
    }
  }

  isGameEnded() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.gameBoard[i][j] === "") {
          return false;
        }
      }
    }
    return true;
  }

  handleVerifyGameEnd() {
    const rows = Object.values(this.gameBoard);
    if (rows.length === 0) {
      return;
    }
    const winner = this.getWinner();
    if (winner) {
      if (winner === "X") {
        this.xScore += 1;
      } else {
        this.oScore += 1;
      }
      return winner
    }
  }

  getWinner() {
    for (let i = 0; i < 3; i++) {
      if (
        this.gameBoard[i][0] !== "" &&
        this.gameBoard[i][0] === this.gameBoard[i][1] &&
        this.gameBoard[i][1] === this.gameBoard[i][2]
      ) {
        return this.turn;
      }
      if (
        this.gameBoard[0][i] !== "" &&
        this.gameBoard[0][i] === this.gameBoard[1][i] &&
        this.gameBoard[1][i] === this.gameBoard[2][i]
      ) {
        return this.turn;
      }
      if (
        this.gameBoard[0][0] !== "" &&
        this.gameBoard[0][0] === this.gameBoard[1][1] &&
        this.gameBoard[1][1] === this.gameBoard[2][2]
      ) {
        return this.turn;
      }
      if (
        this.gameBoard[0][2] &&
        this.gameBoard[0][2] === this.gameBoard[1][1] &&
        this.gameBoard[1][1] === this.gameBoard[2][0]
      ) {
        return this.turn;
      }
    }
  }
}
