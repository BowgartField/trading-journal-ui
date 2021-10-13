import { calcRem } from "../utils/style";

interface RightArrow{
    color: string
}

export default function RightArrow({color} : RightArrow){

    return(
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width={calcRem(27)} viewBox="0 0 31.418 31.418" xmlSpace="preserve"
            style={{
                transform: 'scaleX(-1)'
            }}>
            <g>
                <path fill={color} d="M26.585,3v25.418c0,1.155-0.664,2.208-1.707,2.707c-0.412,0.194-0.854,0.293-1.293,0.293c-0.672,0-1.34-0.228-1.883-0.665
                    L5.949,18.044c-0.706-0.569-1.116-1.428-1.116-2.335c0-0.907,0.41-1.766,1.116-2.335L21.703,0.665
                    c0.899-0.726,2.135-0.868,3.178-0.372C25.921,0.792,26.585,1.844,26.585,3z"/>
            </g>
        </svg>
    )

}