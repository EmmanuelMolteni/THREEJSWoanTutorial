import * as THREE from "three";
import Experience from "../Experience.js"

export default class Room{
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.room = this.resources.items.room;
    this.actualRoom = this.room.scene;
    
    this.setModel();
    this.setAnimation();
  }

  setModel() {
    this.actualRoom.children.forEach((child) => {
      child.castShadow = true;
      child.receiveShadow = true;

      if(child instanceof THREE.Group) {
        child.children.forEach((groupchild) => {
          groupchild.castShadow = true;
          groupchild.receiveShadow = true;
        })
      }

      if(child.name === "AquaGlass") {
        child.material = new THREE.MeshPhysicalMaterial();
        child.material.roughness = 0;
        child.material.color.set(0x549dd2);
        child.material.ior = 2;
        child.material.transmission = 1;
        child.material.opacity = 1;
      }

      if(child.name === "Screen") {
        child.material = new THREE.MeshBasicMaterial({
          map: this.resources.items.screen,
        });
      }
    });

    this.scene.add(this.actualRoom);
    this.actualRoom.scale.set(0.11, 0.11, 0.11);
  }

  setAnimation() {
    this.mixer = new THREE.AnimationMixer();
    console.log(this.room);
    this.swim = this.mixer.clipAction(this.room.scene.animations[1]);
    this.swim.play();
  }
  
  resize(){
    
  };

  update(){
    this.mixer.update(this.time.delta * 0.0009);
  };
}