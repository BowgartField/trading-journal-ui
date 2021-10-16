import React from "react";
import { ButtonType } from "../enums/ButtonTypes";
import Button from "./Button";

interface ConnectButtonHeader{
    click: () => void,
    className?: string,
    connectButtonTitle: string
}

export default function ConnectButton({ click, className, connectButtonTitle }:ConnectButtonHeader){
    return(
        <div className={className}>
            <Button title={connectButtonTitle} type={ButtonType.DEFAULT} click={click}/>
            <div></div>
        </div>
    )
}