class Demo1 extends AdventureScene {
    constructor() {
        super("demo1", "First Room");
    }
    preload() {
        this.load.path = './assets/';
        this.load.image('bedroom', 'bedroom.jpg');
    }

    onEnter() {
        var background = this.add.image(720,540,'bedroom');
        background.setScale(820/background.height,1920/background.width);
        let alone = this.add.text(10,10,'you are alone in the room and you hear the human\n coming, you need to hide quick!!!!!',{color: '0x000000',setFontSize: 4})
            .setFontSize(this.s * 2.5);
        let arrow = this.add.text(this.w * 0.4,this.w * 0.45, "Hide under the bed")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Do you want to hide under the bed?"))
            .on('pointerdown', () => {
                    this.showMessage("*skittering noise*");
                    arrow.setText("you ran under the bed");
                    this.gotoScene('demo2');
                }
            )}
            }
        //let clip = this.add.text(this.w * 0.3, this.w * 0.3, "📎 paperclip")
        //    .setFontSize(this.s * 2)
        //    .setInteractive()
        //    .on('pointerover', () => this.showMessage("Metal, bent."))
        //    .on('pointerdown', () => {
        //        this.showMessage("No touching!");
        //        this.tweens.add({
        //            targets: clip,
        //            x: '+=' + this.s,
        //            repeat: 2,
        //            yoyo: true,
        //            ease: 'Sine.inOut',
        //            duration: 100
        //        });
        //    });

//        let key = this.add.text(this.w * 0.5, this.w * 0.1, "🔑 key")
//            .setFontSize(this.s * 2)
//            .setInteractive()
//            .on('pointerover', () => {
//                this.showMessage("It's a nice key.")
//            })
//            .on('pointerdown', () => {
//                this.showMessage("You pick up the key.");
//                this.gainItem('key');
//                this.tweens.add({
//                    targets: key,
//                    y: `-=${2 * this.s}`,
//                    alpha: { from: 1, to: 0 },
//                    duration: 500,
//                    onComplete: () => key.destroy()
//                });
//            })

//        let door = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 locked door")
//            .setFontSize(this.s * 2)
//            .setInteractive()
//            .on('pointerover', () => {
//                if (this.hasItem("key")) {
//                    this.showMessage("You've got the key for this door.");
//                } else {
//                    this.showMessage("It's locked. Can you find a key?");
//                }
//            })
//            .on('pointerdown', () => {
//                if (this.hasItem("key")) {
//                    this.loseItem("key");
//                    this.showMessage("*squeak*");
//                    door.setText("🚪 unlocked door");
//                    this.gotoScene('demo2');
//                }
//            })
//
//    }
//}

class Demo2 extends AdventureScene {
    constructor() {
        super("demo2", "Under the bed");
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('skull', 'skull.jpg');
        this.load.image('cheese', 'cheese.png');
        this.load.image('mouse','mouse.png');
        this.load.image('underbed','underbed.png');
        this.load.image('crumbs','crumbs.png');
    }
    onEnter() {
        let under = this.add.image(720,540,'underbed');
        under.setScale(820/under.height,1920/under.width)
        let mouse = this.add.image(720,640,'mouse');
        mouse.setScale(320/mouse.height,480/mouse.width)
        let text = this.add.text(10,10, "All of a sudden it got really dark and scary.\nand you are starting the get very very hungry.")
            .setFontSize(this.s * 2.5)
                .setInteractive()
                .on('pointerover', () => this.showMessage("*stomach growls*"))
                .on('pointerdown', () => {
                    this.showMessage("YOU NEED FOOD!!!");
                    this.tweens.add({
                        targets: under,
                        x: '+=' + this.s,
                        repeat: 2,
                        yoyo: true,
                        ease: 'Sine.inOut',
                        duration: 100
                    });
                });

        let crumb = this.add.image(620,960,'crumbs')
            .setInteractive()
            .on('pointerover', () => this.showMessage("*stomach growls*"))
            .on('pointerdown', () => {
                this.showMessage("These crumbs will only last you a little bit you need more substantial food.");
                this.tweens.add({
                    targets: crumb,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });
        let cheese = this.add.image(1020,930,'cheese')
            .setScale(this.s * .014)
            .setInteractive()
            .on('pointerover', () => this.showMessage("*STOMACH GROWLS*\nGo to the cheese?"))
            .on('pointerdown', () => {
                this.showMessage("*skittering noise*")
                this.gotoScene('demo3')
                }
        )};

    }


class Demo3 extends AdventureScene {
    constructor() {
        super("demo3", "hallway");
    }
    preload(){
        this.load.path = './assets';
        this.load.image('key','key.png');
        this.load.image('cheese','cheese.png');
        this.load.image('hallway','hallway.png');
        this.load.image('mouse','mosue.png');
    }
    onEnter(){
        let hall = this.add.image(720,540,'hallway');
        hall.setScale(820/hall.height,1920/hall.width)
        let mouse = this.add.image(720,640,'mouse');
        mouse.setScale(320/mouse.height,480/mouse.width)
        let text = this.add.text(10,10, "While on the way to the cheese you see a key.\nYou stop to make a decision as your tummy growls\n*rumbling*")
            .setFontSize(this.s * 2.5);

        let key = this.add.image(620,960,'key')
            .setInteractive()
            .on('pointerover', () => this.showMessage("*STOMACH GROWLS*\nGo to the Key?\n*It might be useful*"))
            .on('pointerdown', () => {
                this.showMessage("*skittering noise*")
                this.gotoScene('demo4')
                });
        let cheese = this.add.image(1020,930,'cheese')
            .setScale(this.s * .014)
            .setInteractive()
            .on('pointerover', () => this.showMessage("*STOMACH GROWLS*\nGo to the cheese?"))
            .on('pointerdown', () => {
                this.showMessage("*skittering noise*")
                this.gotoScene('demo5')
                });    

    }
}

class Demo4 extends AdventureScene {
    constructor() {
        super("demo4", "key");
    }
    preload(){
        this.load.path= './assets';
        this.load.image('key','key.png');
        this.load.image('cheese','cheese.png');
        this.load.image('hallway','hallway.png');
        this.load.image('mouse','mosue.png');
    }
    onEnter(){
        let hall = this.add.image(720,540,'hallway');
        hall.setScale(820/hall.height,1920/hall.width)
        let mouse = this.add.image(720,640,'mouse');
        mouse.setScale(320/mouse.height,480/mouse.width)
        let text = this.add.text(10,10, "Now that you are here you are starving\nbut the key is right in front of you\nand it looks very important :)")
            .setFontSize(this.s * 2.5);

            let key = this.add.image(620,960,'key')
            .setInteractive()
            .on('pointerover', () => this.showMessage("*STOMACH GROWLS*\nPick up the key?\n you might as well you already\ncame to it\n*also It might be useful*"))
            .on('pointerdown', () => {
                    this.showMessage("You pick up the key.");
                    this.gainItem('key');
                    this.tweens.add({
                    targets: key,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => key.destroy()
                        })
                    });
                
                let cheese = this.add.image(1020,930,'cheese')
                .setScale(this.s * .014)
                .setInteractive()
                .on('pointerover', () => this.showMessage("*STOMACH GROWLS*\nGo to the cheese?"))
                .on('pointerdown', () => {
                    this.showMessage("*skittering noise*")
                    this.gotoScene('demo5')
                    });
                }
}

class Demo5 extends AdventureScene {
    constructor() {
        super("demo5", "cage");
    }
    preload(){
        this.load.path= './assets';
        this.load.image('cage', 'cage.png');
        this.load.image('mosue','mouse.png');
    }

    onEnter(){
        let mouse = this.add.image(720,640,'mouse');
        mouse.setScale(320/mouse.height,480/mouse.width)
        let cage = this.add.image(720,0,'cage');
        cage.setScale(400/cage.height,600/cage.width)
        .setInteractive()
                    .on('pointerover', () => {
                        if (this.hasItem("key")) {
                            this.showMessage("well good thing you took the time to pick up that key :)");
                        } else {
                            this.showMessage("uh oh maybe you should have taken the time to get the key :(");
                        }
                    })
                    .on('pointerdown', () => {
                        if (this.hasItem("key")) {
                            this.loseItem("key");
                            this.showMessage("*click*\nyou have escaped:)");
                            this.gotoScene('win');
                        } else {
                            this.showMessage("FUCK!");
                            this.gotoScene('lose');
                        }
                    })

            this.tweens.add({
                targets: cage,
                y: 640,
                duration: 2000,
                repeat: 0,
                ease: 'cubic.in'

        });
    }
}
//        let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
//            .setInteractive()
//            .on('pointerover', () => {
//                this.showMessage('*giggles*');
//                this.tweens.add({
//                    targets: finish,
//                    x: this.s + (this.h - 2 * this.s) * Math.random(),
//                    y: this.s + (this.h - 2 * this.s) * Math.random(),
//                    ease: 'Sine.inOut',
//                    duration: 500
//                });
//            })
//            .on('pointerdown', () => this.gotoScene('outro'));
//    }


class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        this.add.text(50,50, "WELCOME TO MOUSE TRAP!!!").setFontSize(50);
        this.add.text(50,100,'You are a mouse who has escaped its jail cell of a cage now it is time to escape!').setFontSize(20);
        this.add.text(50,150, "Click anywhere to begin.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('demo1'));
        });
    }
}

class Win extends Phaser.Scene {
    constructor() {
        super('win');
    }
    create() {
        this.add.text(50, 50, "GOOD JOB YOU ESCAPED").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}

class Lose extends Phaser.Scene {
    constructor() {
        super('lose');
    }
    create() {
        this.add.text(50, 50, "MAN YOU SUCK").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, Demo1, Demo2, Demo3, Demo4, Demo5, Win, Lose],
    title: "Mouse trap",
});

