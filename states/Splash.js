var Splash = function () {},
    playSound = true,
    playMusic = true,
    music;

Splash.prototype = {

    loadScripts: function () {
        //Loads Playgame script, which contains all the code regarding gameplay.
        //Also loads the script that initializes the fonts.
        game.load.script('WebFont', 'vendor/webfontloader.js');
        game.load.script('PlayGame','states/Playgame.js');
    },

    loadBgm: function () {
        //Loads all background music
        game.load.audio('MenuOST', 'placeholders/Stardust.mp3');
    },

    loadImages: function () {
        //Loads all images. If you add images to the game, make sure to add them in here as well!
        // Copy & paste existing code and replace with said images.
        game.load.image('MenuBackground', 'placeholders/menuBG.jpg');
    },

    loadFonts: function () {
        //Loads fonts for the game.
        WebFontConfig = {
            custom: {
                families: ['Cursive'],
                urls: ['fonts/Cursive.css']
            }
        }
    },

    init: function () {
        //Initializes the splash screen.
        this.loadingBar = game.make.sprite(game.world.centerX-(387/2), 400, "loading");
        this.logo       = game.make.sprite(game.world.centerX, 200, 'logo');
        this.status     = game.make.text(game.world.centerX, 380, 'Loading...', {fill: 'white'});
        utils.centerGameObjects([this.logo, this.status]);
    },

    preload: function () {
        game.add.sprite(0, 0, 'background');
        game.add.existing(this.logo).scale.setTo(0.5);
        game.add.existing(this.loadingBar);
        game.add.existing(this.status);
        this.load.setPreloadSprite(this.loadingBar);

        this.loadScripts();
        this.loadImages();
        this.loadFonts();
        this.loadBgm();

    },

    addGameStates: function () {
        game.state.add("PlayGame",Game);
    },

    addGameMusic: function () {
        music = game.add.audio('MenuOST');
        music.loop = true;
        music.play();
    },

    create: function() {
        this.status.setText('Ready!');
        this.addGameStates();
        this.addGameMusic();

        setTimeout(function () {
            //game.state.start("PlayGame");
        }, 3000);
    }
};