import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function MyButtton() {
  return (
    <button>fsdf</button>
  );
}

const videos = {
  name: 'Janiweb',
  imageUrl: 'https://yt3.ggpht.com/ybZCQb7Gd_DZVYXmkrUAEPcD9_89gwmXFasZD4mmzty6e7KoLvhgwAw6S21S1m8YUr6nKtom=s176-c-k-c0x00ffffff-no-rj-mo',
  imageSize: 80,
}

const style = {
  h1: { backgroundColor: 'red', padding: '10px', borderRadius: '20px', margin: '10px auto', lineHeight: '1.2em', width: '80%', maxWidth: '800px' }
}

export default function website() {
  return (
    <div>
      <h2>Ez az első React projektem</h2>
      <h1 style={style.h1}>My Youtube chanel is {videos.name}</h1>
      <p>I create the videos in Blender.</p>
      <p>Coming son origami videos</p>
    
    <p>Most kezdtem el tanulni a reactet.</p>
    <MyButtton />
    <img
      className="kep"
      src={videos.imageUrl}
      alt={'Ez egy kép a'+videos.name}
      style={{
        width: videos.imageSize,
        height: videos.imageSize
      }}
    />
    </div>
    
  )
}
