import { useState } from 'react'
import iconimg from './assets/menuimg.png'
import menuimg from './assets/menu.svg'
import janiweblogo from './assets/janiweb.png'
import './App.css'

function Head() {
  return (
  <div className='head'>
  <img src={iconimg} alt="sf" />
  <h1>Janiweb.eu</h1>
  <img src={menuimg} alt="" />
  </div>
  );
}
function Prewiev({name,image,text}) {
  return (
    <div className='prewiev'>
        <h1>{name}</h1>
        <img src={image} alt={name} />
        <p>{text}</p>
    </div>
  )
}


export default function website() {
  return (
    <div className='background'>
      <Head />
    <div className='contener'>
      
      <Prewiev name="Üdvüzölek az új Janiweb.eu" image={janiweblogo} text="Üdvözölek a teljesen új megjújult Janiweb.eu. Mostmár a Janiweb gyakraban fog frissülni és ezt mostmár React kódban írom. :)"/>
    </div>
    </div>
    
  )
}
