import React from "react";
import Head from "next/head";
import Header from "./Header";

interface PageInterface{
    children?: React.ReactNode
}

export default function Page({children}: PageInterface){

    return(
        <div>
            <Head>
                <title>Trading Journal</title>
            </Head>
                
            <Header />

            {children}
            
        </div>
    )
}