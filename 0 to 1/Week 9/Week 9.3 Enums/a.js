// enum Direction {
//     Up, //0
//     Down, //1
//     Left, //2
//     Right //3
// }
var Direction;
(function (Direction) {
    Direction["Up"] = "up";
    Direction["Down"] = "down";
    Direction["Left"] = "left";
    Direction["Right"] = "right"; //3
})(Direction || (Direction = {}));
function doSomething(keyPressed) {
    // do something
    if (keyPressed == Direction.Up) {
    }
}
doSomething(Direction.Down);
doSomething(Direction.Left);
console.log(Direction.Up);
console.log(Direction.Left);
console.log(Direction.Right);
