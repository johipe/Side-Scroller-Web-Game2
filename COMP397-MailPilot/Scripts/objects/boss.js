var objects;
(function (objects) {
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
    var Boss = (function () {
        function Boss(stage, game) {
            this.isColliding = false;
            this.stage = stage;
            this.game = game;
            this.bossAtlas = new createjs.SpriteSheet(bossData);
            this.image = new createjs.Sprite(this.bossAtlas, "bossRun");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();
            this.game.addChild(this.image);
            this.game;
        }
        Boss.prototype.update = function () {
            this.image.y -= this.dy;
            this.image.x -= this.dx;
            //boss moving cotrol
            if (this.image.x < 0 && this.image.y < 0) {
                this.reset();
            }
            else if (this.image.x > canvasWidth && this.image.y > canvasHeight) {
                this.reset();
            }
            else if (this.image.x < 0) {
                this.pointReset();
                this.dx = this.dx * -1;
            }
            else if (this.image.x > canvasWidth) {
                this.pointReset();
                this.dx = this.dx * 1;
            }
            else if (this.image.y < 0) {
                this.pointReset();
                this.dy = this.dy * -1;
            }
            else if (this.image.y > canvasHeight) {
                this.pointReset();
                this.dy = this.dy * -1;
            }
            //   this._checkBounds();
        };
        Boss.prototype.reset = function () {
            this.image.y = Math.floor(Math.random() * canvasHeight);
            this.dx = Math.floor(Math.random() * 4 + 4);
            this.dy = Math.floor(Math.random() * -9) + Math.floor(Math.random() * 9);
            this.image.x = Math.floor(Math.random() * canvasWidth);
        };
        Boss.prototype.pointReset = function () {
            this.dx = Math.floor(Math.random() * 4 + 4);
            this.dy = Math.floor(Math.random() * -7) + Math.floor(Math.random() * 7);
        };
        // PRIVATE METHODS 
        Boss.prototype._checkBounds = function () {
            // check if the boss have left the screen
            if (this.image.x <= (0 - this.width)) {
                this.reset();
            }
        };
        return Boss;
    })();
    objects.Boss = Boss;
})(objects || (objects = {}));
//# sourceMappingURL=boss.js.map