import React from 'react'
import Header from './Header';

export default function Variable() {
    let a = "Home";
    let b = "Upgrade";
    let c = " Contact";
    let d = "AboutUs";
    let e = "Profile"
    return (
        <div className='Variable'>
            <Header a={a} b={b} c={c} d={d} e={e}/>
        </div>
    )
}
