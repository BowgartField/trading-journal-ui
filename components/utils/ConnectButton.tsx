import React from "react";
import { ButtonType } from "../enums/ButtonTypes";
import Button from "./Button";

interface ConnectButtonHeader{
    click: () => void,
    className: string
}

export default function ConnectButton({click,className}:ConnectButtonHeader){
    return(
        <div className={className}>
            <Button title="Connect" type={ButtonType.DEFAULT} click={click}/>
            <div></div>
        </div>
    )
}