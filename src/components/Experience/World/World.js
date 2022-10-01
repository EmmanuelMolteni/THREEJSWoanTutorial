import Experience from "../Experience.js";

import Room from "./Room.js"
import Enviroment from "./Enviroment.js"

export default class World{
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    this.camera = this.experience.camera;
    this.resources = this.experience.resources;

    this.resources.on("ready", () => {
      this.enviroment = new Enviroment();
      this.room = new Room();
    });
  }

  setRenderer() {
    
  };
  
  resize(){
    this.camera.resize();
    this.world.resize();
    this.renderer.resize();
  };

  update(){
    if(this.room) {
      this.world.update();
      this.room.update();
    }
  };
}