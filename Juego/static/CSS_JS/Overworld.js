class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySeelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d")
        this.map = null;
    }
    bindActionInput() {
        KeyPressListener("Enter", () => {
            //Hay algún personaje al cual hablarle?
            this.map,checkForActoinCutscene()
        })
    }
startMap (mapConfig) {
    this.map = new OverworldMap(mapConfig);
    this.map.overworld = this;

}

init() {
    this.bindActionInput();
    this.startGameLoop();
    this.map.startCutscene([
        {type: "TextMessage",text: "This is my very first message!"}
        ])
    }
}
