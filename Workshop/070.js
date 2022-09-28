// -> Define un objeto llamado `Robot`
// -> Define un método llamado `new` en `Robot`
// -> Cuando llamamos a `Robot.new()` debe retornar un objeto nuevo con Robot
//    como prototipo
//    Por ejemplo: var robby = Robot.new();
//    `Robot` debe ser el prototipo de `robby`

var Robot = {
  new: () => Object.create(Robot)
};

var robby = Robot.new();


// ------------------------------------------------
// Exports de Common JS para verificación, no modificar
module.exports = {
  Robot: Robot
}
