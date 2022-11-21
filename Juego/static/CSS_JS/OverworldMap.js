class OverworldMap {
    constructor (config) {
        this.overworld = null;

        this.cutsceneSpaces = config.cutsceneSpaces || {} ;
        
        this.isCutscenePlaying = false;
    }
    async startCutscene(events) {
            this.isCutscenePlaying = true;

            for (let i=0; i<events.length; i++) {
                const eventHandler = new OverworldEvent({
                event: events[i],
                map: this,
                })
                await eventHandler.init();
            }
            this.isCutscenePlaying = false;
            }
        }