import React, { useState } from "react";
import Popup from "../Popup";
import { calcRem } from "../utils/style";
import Image from 'next/image';
import RightArrow from "../images/RightArrow";

interface ProviderProps{
    title: string,
    image: string,
    onClick: () => any
}

interface ConnectPopupProps{
    open: boolean,
    setOpen: (opened: boolean) => void,
    requestConnection: () => any
}

export default function ConnectPopup({ open, setOpen, requestConnection }: ConnectPopupProps){

    const [loading, setloading] = useState(false)

    return(
        <Popup
            open={open}
            setOpen={setOpen}
            title="Connect to a wallet"
            showButtons={false}
            loading={loading}
        > 
            <div className="space-y-2">
                <Provider title="Injected" image="/metamask.png" onClick={requestConnection}/>
            </div> 
        </Popup>
    )

    function Provider({title, image, onClick } : ProviderProps){

        const [color,setColor] = useState<string>("black")
    
        return(
            <div>
                <div 
                    className="flex items-center flex-row group font-bold hover-black p-2 border-black hover:bg-black rounded hover:text-white cursor-pointer" 
                    style={{
                        width: calcRem(300),
                        borderWidth: calcRem(1)
                    }}
                    onMouseEnter={() => setColor("white")}
                    onMouseLeave={() => setColor("black")}
                    onClick={ async () => { 
                        setloading(true)
                        await onClick()
                        setloading(false)
                        setOpen(false)
                    }}
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
            </div>
        )
    }
}