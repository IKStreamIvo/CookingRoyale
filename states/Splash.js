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
        console.log('Finished loading scripts');
    },

    loadBgm: function () {
        //Loads all background music
        game.load.audio('MenuOST', 'placeholders/Stardust.mp3');
        console.log('Finished loading audio');
    },

    loadImages: function () {
        //Loads all images. If you add images to the game, make sure to add them in here as well!
        // Copy & paste existing code and replace with said images.
        game.load.image('MenuBackground', 'placeholders/menuBG.jpg');
        console.log('Finished loading background image');
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
        console.log('Finished initializing splash');
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
        console.log('Finished loading logo and functions');
    },

    addGameStates: function () {
        game.state.add("PlayGame",Game);
        console.log('Finished loading Game script');
    },

    addGameMusic: function () {
        music = game.add.audio('MenuOST');
        music.loop = true;
        music.play();
        console.log('Started playing music');
    },

    create: function() {
        this.status.setText('Ready!');
        this.addGameStates();
        this.addGameMusic();

        setTimeout(function () {
            //game.state.start("PlayGame");
        }, 3000);
        console.log('Done.');
    }
};