import React from "react";
import Page from "./Page";
import Button from "./utils/Button";
import Logo from "./utils/Logo";
import { calcRem } from "./utils/style";

export default function Header(){
    return(
        <div
            className="mt-2 mx-2 grid item-center items-center"
            style={{
                height: calcRem(40),
                gridTemplateColumns: '0.3fr 1fr 9fr'
            }}
        >
            <Logo className="mr-2"/> 
            Trading Journal
            <Button className="mr-4 justify-items-end absolute right-0" title="Connect"/>
        </div>
    )
}