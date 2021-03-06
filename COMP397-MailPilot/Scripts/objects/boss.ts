﻿
module objects {
    //for sprite sheet
    var bossData = {
        "images": ["assets/images/bossAtlas.png"],
        "frames": [
            [152, 1, 131, 212],
            [282, 2, 107, 213],
            [2, 2, 148, 214],
            [388, 1, 184, 199]
        ],
        "animations": {

            "bossRun": {
                frames: [0, 1, 2, 3],
                speed: 0.1
            }
        }
    };

    export class Boss {
        stage: createjs.Stage;
        game: createjs.Container;
        image: createjs.Sprite;
        width: number;
        height: number;
        dy: number;
        dx: number;
        public isColliding: boolean = false;
        bossAtlas: createjs.SpriteSheet;
       
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.bossAtlas = new createjs.SpriteSheet(bossData);
            this.image = new createjs.Sprite(this.bossAtlas,"bossRun");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();
            this.game.addChild(this.image);
            this.game
        }

        update() {
            this.image.y -= this.dy;
            this.image.x -= this.dx;
            console.log("befor dx : "+this.dx +", dy : "+this.dy);
            //boss moving cotrol
            if (this.image.x < 20 && this.image.y < (canvasHeight-20) ) {
               
                this.pointReset();
                this.dy = this.dy * -1;
                this.dx = this.dx * -1;       
                
            } else if (this.image.x > canvasWidth && this.image.y > canvasHeight) {
                this.reset();
                
            } else if (this.image.x < 0) {                
                this.dx = this.dx * -1;
                
            } else if (this.image.x > canvasWidth) {                
                this.dx = this.dx * -1;
                
            } else if (this.image.y < 0) {                
                this.dy = this.dy * -1;
                
            } else if (this.image.y > canvasHeight) {                
                this.dy = this.dy * -1;
                
            } 

         //   this._checkBounds();

        }

        reset() {
            this.image.y = Math.floor(Math.random() * canvasHeight);
            this.dx = Math.floor(Math.random() * 3 + 3);
            this.dy = Math.floor(Math.random() * + 5) + Math.floor(Math.random() * 5);
            this.image.x = Math.floor((Math.random() * canvasWidth/2)+(canvasWidth/2));
            console.log("x : "+this.image.x +", y : "+this.image.y+", dx : "+this.dx+", dy : "+this.dy);
        }

        //reset for boss coordinates
        pointReset() {
            this.dx = Math.floor(Math.random() * 3 + 3);
            this.dy = Math.floor(Math.random() * +5) + Math.floor(Math.random() * 5);
        }

        // PRIVATE METHODS 
        private _checkBounds() {
            // check if the boss have left the screen
            if (this.image.x <= (0 - this.width)) {
                this.reset();
            }
        }        
               
    }

} 