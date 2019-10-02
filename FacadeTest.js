"use strict";
exports.__esModule = true;
var Facade_1 = require("./Facade");
var amp = new Facade_1.Amplifier();
var light = new Facade_1.Light();
var tv = new Facade_1.TV();
var cdPlayer = new Facade_1.CDPlayer();
var theater = new Facade_1.HomeTheaterFacade(amp, light, tv, cdPlayer);
theater.turnOnMoovie();
