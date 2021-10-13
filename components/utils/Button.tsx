import classNames from "classnames";
import React from "react";
import { ButtonType } from "../enums/ButtonTypes";
import { calcRem } from "./style";

interface ButtonProps{
    title: string
    type: ButtonType
    click?: () => any
    className?: string
}

export default function Button({title, type, click, className}: ButtonProps){
    return(
        <button
            className={classNames(
                "rounded py-1 px-4 font-bold hover:text-white",
                {"border-black text-black hover:bg-black" : type === ButtonType.DEFAULT},
                {"border-red text-red hover:bg-red" : type === ButtonType.ERROR},
                {"border-green text-green hover:bg-green" : type === ButtonType.CONFIRM},
                className
            )}
            style={{ borderWidth: calcRem(1) }}
            onClick={click}
        >
            {title}
        </button>
    )
}