class OverworldEvent {
    constructor({map,event}) {
        this.map = map;
        this.event = event;
    }
    textMessage(resolve) { //Funcion de mensaje, como evento.

        if (this.event.faceHero) { 
            const obj = this.map.gameObjects[this.event.faceHero];
            obj.direction = utils.oppositeDirection ( this.map.gameObjects["hero"].direction);
        }
        const message = new TextMessage({
            text: this.event.text,
            onComplete: () => resolve()
        })
        message.init( document.querySelector(".game-container") )
    }

    changeMap(resolve) {
        const sceneTransition = new SceneTransition();
        sceneTransition.init(document,querySelector(".game-container"), () => {
            this.map.overworld.startMap ( window.OverworldMaps[this.event.map] );
            resolve();

            sceneTransition.fadeOut();

        })
    }
    init() {
        return new Promise(resolve => {
            this[this.event.type](resolve)
        })
    }
}