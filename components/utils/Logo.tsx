import classNames from 'classnames';
import Image from 'next/image';
import { calcRem } from './style';

interface LogoProps{
    className?: string
}

export default function Logo({className}: LogoProps){
    return(
        <Image src="/logo.svg" alt="website logo" width={calcRem(400)} height={calcRem(400)} className={className}/>
    )
}