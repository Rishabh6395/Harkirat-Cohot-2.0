import { GameManager } from "./store.js";
import { startLogger } from "./logger.js";

startLogger();

// setInterval(() => {
//     games.push({
//         "whitePlayer": "harkirat",
//         "blackPlayer": "jaskirat",
//         moves: []
//     })
// }, 5000)

const gameManager = new GameManager()


setInterval(() => {
    gameManager.addGame({
        id: Math.random().toString(),
        whitePlayer: "harkirat",
        blackPlayer: "jaskirat",
        moves: []
    });
}, 5000);