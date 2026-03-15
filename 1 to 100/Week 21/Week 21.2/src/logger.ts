import { gamemanager } from "./store.js";


export function startLogger() {
    setInterval(() => {
        console.log(gamemanager.logState());
    }, 4000)
}