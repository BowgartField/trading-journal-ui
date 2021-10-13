import React, { useState } from "react";
import Popup from "../Popup";
import { calcRem } from "../utils/style";
import Image from 'next/image';
import RightArrow from "../images/RightArrow";

interface ConnectPopupProps{
    open: boolean,
    setOpen: (opened: boolean) => void
}

export default function ConnectPopup({ open, setOpen }: ConnectPopupProps){
    return(
        <Popup
            open={open}
            setOpen={setOpen}
            title="Connect to a wallet"
            showButtons={false}
            confirmButtonTitle="Load journal"
            confirmAction={() => alert('ok')}
            className=""
        > 
            <div className="space-y-2">
                <Provider title="Injected" image="/metamask.png" />
            </div> 
        </Popup>
    )
}

interface ProviderProps{
    title: string,
    image: string
}

function Provider({title, image} : ProviderProps){

    const [color,setColor] = useState<string>("black")

    return(
        <div 
            className="flex items-center flex-row group font-bold hover-black p-2 border-black hover:bg-black rounded hover:text-white cursor-pointer" 
            style={{
                width: calcRem(300),
                borderWidth: calcRem(1)

            }}
            onMouseEnter={() => setColor("white")}
            onMouseLeave={() => setColor("black")}
        >
            <div className="flex items-center flex-grow" style={{ fontSize: calcRem(18) }}>
                <div 
                    className="bg-black rounded-full mr-2 group-hover:bg-white p-2"
                    style={{
                        width: calcRem(50),
                        height: calcRem(50)
                    }}
                >
                    <Image src={image} alt="provider logo" width="100%" height="100%"/>
                </div>
                {title}
            </div>
            <div className="mr-2 transition duration-500 ease-in-out transform group-hover:translate-x-2">
                <RightArrow color={color}/>
            </div>
        </div>
    )
}