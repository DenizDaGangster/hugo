namespace SpriteKind {
    export const Geschoss = SpriteKind.create()
    export const Münze = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Laser = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Geschoss)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
sprites.onOverlap(SpriteKind.Geschoss, SpriteKind.Enemy, function (sprite, otherSprite) {
    Münze = sprites.create(assets.image`Münze`, SpriteKind.Münze)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Münze, function (sprite, otherSprite) {
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    tiles.placeOnRandomTile(Held, assets.tile`myTile`)
    info.changeLifeBy(-1)
})
let Münze: Sprite = null
let Laser: Sprite = null
let Held: Sprite = null
tiles.setCurrentTilemap(tilemap`Level27`)
Held = sprites.create(img`
    ................................
    ............dddd................
    ...........dddddd...............
    ...........dfddfd...............
    ...........dddddd...............
    ...........dddddd...............
    ............dddd................
    ...........811618...............
    ...........811618...............
    ...........881688...............
    ...........881688.fff...........
    ..........d881688df.............
    ...........888888...............
    ...........888888...............
    ...........888888...............
    ..........88888888..............
    ..........88888888..............
    ..........888..888..............
    ..........88....88..............
    ..........88....88..............
    ..........88....88..............
    ..........88....88..............
    ..........88....88..............
    ..........88....88..............
    ..........f.....f...............
    ..........ff....ff..............
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
tiles.placeOnRandomTile(Held, assets.tile`myTile`)
scene.cameraFollowSprite(Held)
Held.ay = 100
controller.moveSprite(Held, 100, 0)
Held.setBounceOnWall(true)
info.setLife(3)
let Schlüssel = sprites.create(img`
    ..........................
    ..........................
    ..........................
    ..44444........4444.......
    .4555554.......4554.......
    .45555544444444455444.....
    .45555544555555555554.....
    .45555544444444444444.....
    .4555554..................
    ..44444...................
    ..........................
    ..........................
    ..........................
    ..........................
    ..........................
    ..........................
    `, SpriteKind.Projectile)
game.onUpdateInterval(500, function () {
    if (Held.vx < 0) {
        Held.setImage(img`
            ................................
            ............dddd................
            ...........dddddd...............
            ...........dfddfd...............
            ...........dddddd...............
            ...........dddddd...............
            ............dddd................
            ...........811618...............
            ...........811618...............
            ...........881688...............
            ...........881688.fff...........
            ..........d881688df.............
            ...........888888...............
            ...........888888...............
            ...........888888...............
            ..........88888888..............
            ..........88888888..............
            ..........888..888..............
            ..........88....88..............
            ..........88....88..............
            ..........88....88..............
            ..........88....88..............
            ..........88....88..............
            ..........88....88..............
            ..........f.....f...............
            ..........ff....ff..............
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            `)
    }
    if (Held.vx > 0) {
        Held.setImage(img`
            ................................
            ............dddd................
            ...........dddddd...............
            ...........dfddfd...............
            ...........dddddd...............
            ...........dddddd...............
            ............dddd................
            ...........811618...............
            ...........811618...............
            ...........881688...............
            ...........881688.fff...........
            ..........d881688df.............
            ...........888888...............
            ...........888888...............
            ...........888888...............
            ..........88888888..............
            ..........88888888..............
            ..........888..888..............
            ..........88....88..............
            ..........88....88..............
            ..........88....88..............
            ..........88....88..............
            ..........88....88..............
            ..........88....88..............
            ..........f.....f...............
            ..........ff....ff..............
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            `)
    }
})
