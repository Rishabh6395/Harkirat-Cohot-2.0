import { gamemanager } from "./store.js";
import { startLogger } from "./logger.js";

startLogger();

// setInterval(() => {
//     games.push({
//         "whitePlayer": "harkirat",
//         "blackPlayer": "jaskirat",
//         moves: []
//     })
// }, 5000)



setInterval(() => {
    gamemanager.addGame({
        id: Math.random().toString(),
        whitePlayer: "harkirat",
        blackPlayer: "jaskirat",
        moves: []
    });
}, 5000);