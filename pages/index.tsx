import Head from 'next/head'
import React, { useState } from 'react'
import Header from '../components/Header'
import useWallet from '../components/hooks/useWallet'
import ConnectPopup from '../components/popups/ConnectPopup';

export default function Home() {

  const {connect} = useWallet();

  const [ConnectPopupIsOpen, setConnectPopupIsOpen] = useState(false)

  return (
    <div className="font-Roboto">
        
        <ConnectPopup open={ConnectPopupIsOpen} setOpen={setConnectPopupIsOpen}/>

        <div>
          <Head>
              <title>Trading Journal</title>
              <style>
                @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
              </style>
          </Head>
          <Header onConnect={connectUser}/>
      </div>
    </div>
  )

  async function connectUser(){

    await connect();

    setConnectPopupIsOpen(true)

    // TODO: Open popup to choose which journal to load
  }

}
