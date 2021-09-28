import { useState } from "react"

interface Wallet{
    hasWallet: boolean
    address: string
}

export default function useWallet(): Wallet{

    const [hasWallet, sethasWallet] = useState(false)
    const [address, setaddress] = useState('')

    return{
        hasWallet,
        address
    }

}