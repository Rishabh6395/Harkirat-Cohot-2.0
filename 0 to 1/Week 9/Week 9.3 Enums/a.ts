// Game
type KeyInput = "up" | "down" | "left" | "right"

// enum Direction {
//     Up, //0
//     Down, //1
//     Left, //2
//     Right //3
// }
enum Direction {
    Up = "up", //0
    Down = "down", //1
    Left = "left", //2
    Right = "right" //3
}

function doSomething(keyPressed: Direction){
    // do something
    if(keyPressed == Direction.Up){

    }
}

doSomething(Direction.Down)
doSomething(Direction.Left)
console.log(Direction.Up)
console.log(Direction.Left)
console.log(Direction.Right)