var game = new Phaser.Game(1920, 1079, Phaser.AUTO, 'game'), Main = function () {};

Main.prototype = {
    preload: function () {
        game.load.image('background',    'sprites/background.png');
        game.load.image('loading',  'sprites/loading.png');
        game.load.image('logo',    'sprites/logo.png');
        game.load.script('utils',   'lib/Utils.js');
        game.load.script('splash',  'states/Splash.js');
    }
}