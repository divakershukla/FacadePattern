"use strict";
exports.__esModule = true;
var CDPlayer = /** @class */ (function () {
    function CDPlayer() {
    }
    CDPlayer.prototype.TurnOn = function () { console.log("CD Player is turend on"); };
    CDPlayer.prototype.TurnOff = function () { console.log("CD Player is turend off"); };
    CDPlayer.prototype.RUN = function () { console.log("CD Player run"); };
    return CDPlayer;
}());
exports.CDPlayer = CDPlayer;
var Amplifier = /** @class */ (function () {
    function Amplifier() {
    }
    Amplifier.prototype.TurnOn = function () { console.log("Amplifier is turend on"); };
    Amplifier.prototype.TurnOff = function () { console.log("Amplifier is turend off"); };
    Amplifier.prototype.SetVolume = function (volume) { console.log("Set Volume to: " + volume); };
    return Amplifier;
}());
exports.Amplifier = Amplifier;
var Light = /** @class */ (function () {
    function Light() {
    }
    Light.prototype.TurnOn = function () { console.log("Light is turend on"); };
    Light.prototype.TurnOff = function () { console.log("Light is turend off"); };
    return Light;
}());
exports.Light = Light;
var TV = /** @class */ (function () {
    function TV() {
    }
    TV.prototype.TurnOn = function () { console.log("TV is turend on"); };
    TV.prototype.TurnOff = function () { console.log("TV is turend off"); };
    return TV;
}());
exports.TV = TV;
var HomeTheaterFacade = /** @class */ (function () {
    function HomeTheaterFacade(amp, light, tv, cdPLAYER) {
        this.amp = amp;
        this.light = light;
        this.tv = tv;
        this.cdPlayer = cdPLAYER;
    }
    HomeTheaterFacade.prototype.turnOnMoovie = function () {
        this.amp.TurnOn();
        this.amp.SetVolume(10);
        this.light.TurnOn();
        this.cdPlayer.TurnOn();
        this.tv.TurnOn();
    };
    HomeTheaterFacade.prototype.turnOffMoovie = function () {
        this.amp.TurnOff();
        this.light.TurnOff();
        this.cdPlayer.TurnOff();
        this.tv.TurnOff();
    };
    return HomeTheaterFacade;
}());
exports.HomeTheaterFacade = HomeTheaterFacade;
