/* eslint-disable @next/next/no-img-element */
import classNames from "classnames";
import { ReactNode, useEffect, useRef } from "react";
import { ButtonType } from "./enums/ButtonTypes";
import Button from "./utils/Button";
import { calcRem } from "./utils/style";
import Image from 'next/image';

interface PopupProps{
    open: boolean
    setOpen: (opened: boolean) => void
    title: string
    children: ReactNode
    isCancellable?: boolean,
    confirmButtonTitle: string,
    confirmAction: () => any,
    showButtons?: boolean,
    className?: string
}

export default function Popup({children, open, setOpen, title, isCancellable, confirmButtonTitle, confirmAction, showButtons, className} : PopupProps){

    // Set default value
    showButtons = showButtons ? showButtons : false;

    const node = useRef();

    useEffect(() => {
        document.addEventListener("mousedown", handleClick)
        return () => {
            document.removeEventListener("mousedown", handleClick)
        }
    }, [])

    const handleClick = e => {
        if(node.current.contains(e.target)){ return; }

        setOpen(false)
    }

    return(
        <div className={classNames({"hidden": !open})}>
            <div className={classNames("absolute h-full w-full opacity-20 bg-black")}></div>
            <div 
                className={classNames("fixed border-black rounded shadow flex flex-col top-1/2 left-1/2 bg-white p-2", className)}
                ref={node}
                style={{
                    borderWidth: calcRem(1),
                    display: "inline-block !important",
                    transform: 'translate(-50%, -50%)'
                }}
            >
                <div className="flex pb-4 items-center">
                    <div className="flex-grow font-bold" style={{ fontSize: calcRem(20) }}>{title} </div>
                    <img alt="" src="/cancel.png" className="cursor-pointer hover:opacity-70" style={{ width: calcRem(19), height: calcRem(20) }} onClick={() => setOpen(false)}/>
                </div>
                <div className="flex-grow">{children}</div>
                { showButtons ? <ActionButtons /> : '' }      
            </div>
        </div>
    )

    function ActionButtons(){
        return(
            <div className="p-2 flex justify-between">
                { isCancellable ? <Button title="Cancel" type={ButtonType.ERROR} click={() => setOpen(false)}/> : ''}
                <Button title={confirmButtonTitle} type={ButtonType.CONFIRM} click={confirmAction}/>
            </div>
        )
    }
}

