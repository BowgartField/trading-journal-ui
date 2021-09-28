import classNames from "classnames";
import React from "react";
import { calcRem } from "./style";

interface ButtonInterface{
    title: string
    click?: () => any
    className: string
}

export default function Button({title, click, className}: ButtonInterface){

    return(
        <button
            className={classNames("border-black text-black rounded py-1 px-4 font-bold hover:bg-black hover:text-white",className)}
            style={{ borderWidth: calcRem(1), width: calcRem(100) }}
            onClick={click}
        >
            {title}
        </button>
    )

}