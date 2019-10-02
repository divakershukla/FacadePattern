import { HomeTheaterFacade, Amplifier, Light, TV, CDPlayer } from "./Facade";

let amp: Amplifier = new Amplifier();
let light: Light = new Light();
let tv: TV = new TV();
let cdPlayer: CDPlayer = new CDPlayer();

let theater: HomeTheaterFacade = new HomeTheaterFacade(amp,light,tv,cdPlayer);
theater.turnOnMoovie();
