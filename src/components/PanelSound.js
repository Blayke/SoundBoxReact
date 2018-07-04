import React, { Component } from 'react';

export default class PanelSound extends Component{
    audio = new Audio();

    onClick(nomAudio){
        this.audio.src = "/sounds/" + nomAudio;
        this.audio.currentTime = 0;
        this.audio.play();
    }

    render(){
        let param = this.props.item
        return (
            <img src={"/images/" + param.image} onClick={() => this.onClick(param.sound)} height="150" width="150"/>
        );
    }
}
