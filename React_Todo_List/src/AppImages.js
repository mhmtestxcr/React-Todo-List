import React from 'react'
import './App'
import img  from './assets/logo.jpeg'


function AppImages() {
    return (
        <div>

            <img className="images" src={img} alt=""/>
            <p className="images-p">Milvasoft Yazılım</p>
            <p className="images-p2">info@milvasoft.com</p>

        </div>
    )
}

export default AppImages;
