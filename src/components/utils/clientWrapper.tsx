"use client"

import { Navbar } from "../navigation/navbar"
import { Footer } from "../navigation/footer"

export const ClientProviders = ({children}:{children:any}) => {
    return(
        <>
            <Navbar/>
                {children}
            <Footer/>
        </>
    )
}