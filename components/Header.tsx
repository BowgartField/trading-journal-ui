import React from "react";
import ConnectButton from "./utils/ConnectButton";
import Logo from "./utils/Logo";
import { calcRem } from "./utils/style";

interface HeaderProps{
    onConnect: () => void
}

export default function Header({onConnect}:HeaderProps){
    return(
        <div
            className="flex pt-2 px-2"
            style={{
                height: calcRem(40),
                gridTemplateColumns: '0.3fr 1fr 9fr'
            }}
        >
            <div className="flex flex-grow items-center">
                <Logo/> 
                Trading Journal
            </div>
            <ConnectButton click={onConnect} className=""/>
        </div>
    )
}