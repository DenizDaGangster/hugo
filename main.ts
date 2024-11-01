let Held = sprites.create(img`
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ................2........2........................
    .................2......2.........................
    ..................2....2..........................
    ..................22222...........................
    .................2222222..........................
    .................2fffff2..........................
    .................2222222..........................
    .................2222222..........................
    .........b........22f22...........................
    ..........b........222............................
    .......b...b....222222222.........................
    ........b...b..22222222222........................
    .....b...b.b..2222222222222.......................
    ......b...b..222..22222..222......................
    .......b.b..b22...22222...22......................
    ........b....b....22222...........................
    ..............b...22222...........................
    ...............b..22.22...........................
    ................b.22.22...........................
    ..................22.22...........................
    ..................22.22...........................
    ..................22.22...........................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    `, SpriteKind.Player)
scene.cameraFollowSprite(Held)
controller.moveSprite(Held, 100, 100)
Held.setBounceOnWall(true)
scene.setBackgroundColor(1)
let myEnemy = sprites.create(img`
    ................................
    ................................
    ................................
    ........f.........f.............
    .........f.......f..............
    ..........f.....f...............
    ...........fffff................
    .........fffffffff..............
    ........fffffffffff.............
    ........ff2fffff2ff.............
    .........fff1f1fff..............
    .........ffff1ffff..............
    ..........fffffff...............
    ............fff.................
    .............f..................
    .............f..................
    ............fff.................
    ..........f.fff.f...............
    ...........fffff................
    ............fff.................
    ............fff.................
    ............fff.................
    ...........f...f................
    ...........f...f................
    ............fff.................
    .............f..................
    .............f..................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Enemy)
game.onUpdate(function () {
	
})
