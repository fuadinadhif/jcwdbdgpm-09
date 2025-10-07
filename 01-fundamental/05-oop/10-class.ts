/* -------------------------------------------------------------------------- */
/*                                   MANUAL                                   */
/* -------------------------------------------------------------------------- */
// const player1 = {
//   username: "putanginamo",
//   mmr: 2000,
//   hours: 1000,
//   totalGames: 1500,
//   wallet: undefined,
// };

// const player2 = {
//   username: "ceb",
//   mmr: 10_000,
//   hours: 25_000,
//   totalGames: 30_000,
//   wallet: undefined,
// };

// const player3 = {
//   username: "ana",
//   mmr: 15_000,
//   hours: 35_000,
//   totalGames: 40_000,
//   wallet: 50_000,
// };

/* -------------------------------------------------------------------------- */
/*                                    CLASS                                   */
/* -------------------------------------------------------------------------- */
class Player {
  username: string;
  mmr: number;
  hours: number;
  totalGames: number;
  wallet?: number;

  constructor(
    username: string,
    mmr: number,
    hours: number,
    totalGames: number,
    wallet?: number
  ) {
    this.username = username;
    this.mmr = mmr;
    this.hours = hours;
    this.totalGames = totalGames;
    this.wallet = wallet;
  }
}

const player1 = new Player("putanginamo", 2000, 1000, 1500, undefined);
const player2 = new Player("ceb", 10_000, 25_000, 30_000, undefined);
const player3 = new Player("ana", 15_000, 35_000, 40_000, 50_0000);

console.log(player1);
console.log(player2);
console.log(player3);
