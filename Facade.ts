export class CDPlayer{

    TurnOn(){console.log("CD Player is turend on");}
    TurnOff(){console.log("CD Player is turend off");}
    RUN(){console.log("CD Player run"); }
}

export class Amplifier{

    TurnOn(){ console.log("Amplifier is turend on");}
    TurnOff(){ console.log("Amplifier is turend off");}
    SetVolume(volume: number){ console.log("Set Volume to: "+ volume);}
}

export class Light{
    TurnOn(){ console.log("Light is turend on");}
    TurnOff(){ console.log("Light is turend off");}   
}

export class TV{
    TurnOn(){ console.log("TV is turend on");}
    TurnOff(){ console.log("TV is turend off");}      
}

export class HomeTheaterFacade{
    
    private amp: Amplifier;
    private light: Light;
    private tv: TV;
    private cdPlayer: CDPlayer;

    constructor(amp: Amplifier, light: Light, tv: TV, cdPLAYER: CDPlayer)
    {
        this.amp=amp;
        this.light=light;
        this.tv=tv;
        this.cdPlayer=cdPLAYER;     
    }

    turnOnMoovie(){
        this.amp.TurnOn();
        this.amp.SetVolume(10);
        this.light.TurnOn();
        this.cdPlayer.TurnOn();
        this.tv.TurnOn();
    }

    turnOffMoovie(){
        this.amp.TurnOff();
        this.light.TurnOff();
        this.cdPlayer.TurnOff();
        this.tv.TurnOff();
    }
    
}
