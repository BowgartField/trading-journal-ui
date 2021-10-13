import { useState } from "react"

interface Wallet{
    hasWallet: boolean
    address: string
    connect: () => Promise<void>
}

export default function useWallet(): Wallet{

    const [hasWallet, sethasWallet] = useState(false)
    const [address, setaddress] = useState('')

    const connect = async () => {
        // TODO: Create connect function
    }

    return{
        hasWallet,
        address,
        connect
    }

}