class Overworld {
    constructor(config) {
        this.element = config.element;
        this.map = null;
    }
init() {
    this.map.startCutscene([
        {type: "TextMessage",text: "This is my very first message!"},
        ])
    }
}
