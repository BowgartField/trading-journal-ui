import Head from 'next/head'
import React, { useState } from 'react'
import Header from '../components/Header'
import useWallet from '../components/hooks/useWallet'
import ConnectPopup from '../components/popups/ConnectPopup';

export default function Home() {

  const {requestConnection, accounts} = useWallet();

  const [ConnectPopupIsOpen, setConnectPopupIsOpen] = useState(false)

  return (
    <div className="font-Roboto">
        
        <ConnectPopup 
          open={ConnectPopupIsOpen} 
          setOpen={setConnectPopupIsOpen}
          requestConnection={requestConnection}
        />

        <div>
          <Head>
              <title>Trading Journal</title>
              <style>@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');</style>
          </Head>
          <Header onConnect={connectUser} connectButtonTitle={ accounts[0] !== undefined ? accounts[0].substring(0,5) + "..." + accounts[0].substring(34,39) : "connect"}/>
      </div>
    </div>
  )

  function connectUser(){

    setConnectPopupIsOpen(true)

    // TODO: Open popup to choose which journal to load
  }

}
