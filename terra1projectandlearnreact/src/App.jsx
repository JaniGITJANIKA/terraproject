import { useState } from 'react'
import iconimg from './assets/menuimg.png'
import menuimg from './assets/menu.svg'
import janiweblogo from './assets/janiweb.png'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


import './App.css'

function Head() {
  return (
  <div className='head'>
  <Link to="/"><img id='icon' src={iconimg} alt="A Janiweb iconja" /></Link>
  <h1>Janiweb.eu</h1>
  <Link to="/menu"> <img id='menu' src={menuimg} alt="Ez a menü icon" /></Link>
  </div>
  );
}
function Prewiev({name,image,text,color1,color2}) {
  return (
    <div className='prewiev' style={{background: `linear-gradient(45deg, ${color1},${color2})`}}>
        <h1>{name}</h1>
        <img src={image} alt={name} />
        <p>{text}</p>
    </div>
  )
}
function Fooldal() {
  return (
    <div className='prewiev bottomtotop janiweblogo' style={{background: 'linear-gradient(45deg, lightgreen, skyblue)'}}>
        <h1>Üdvüzölek az új Janiweb.eu</h1>
        <img src={janiweblogo} alt="Üdvüzölek az új Janiweb.eu" />
        <p>Üdvözölek a teljesen új megjújult Janiweb.eu. Mostmár a Janiweb gyakraban fog frissülni és ezt mostmár React kódban írom. :)</p>
        <br/>
        <div> 
          <h2>Summary</h2>
          <p>Örölök neki hogy nagy nehezen de sikerült rá vennem magamat hogy tanuljam a reactet és nem gondoltam volna hogy amit tegnap kezdtem el tanulni kodal ilyeneket létre tudok hozni és nagyban segitett ez a játék is amiben részt veszek ami segithet nekem a megfelelo gyorsabb mint pc laptop megszerzéséhez project és ép hogy reactben fejlesztettem mert ugy voltam vele hogy meg próbálom és sikeresen sikerült megértenem és le fejlesztettem számomra nem rég ismeretlen nyelve de mostmár annyira megtanultam hogy ezt létre hoztam igaz hogy pl a constal nem foglalkoztam de majd a következő projektben köszönöm szépen a figyelmet!</p>
          <p>Ezzel a régi weboldalamat majd új év kor lefogom cserélni.</p>
        </div>
    </div>
    
  )
}
function Menucard({name,color1,color2,img}) {
    return (
    <div className='menucard' style={{background: `linear-gradient(45deg, ${color1},${color2})`}}>
      <img src={img} alt={name} />
      <p>{name}</p>
    </div>
    )
}
function Menu() {
  return (
    <div className='righttoleft menu'>
      <h1>Ez itt a menü</h1>
      <div className='menumenu'>
      <Link className='meni' to="/powerpoint" ><Menucard color1="red" color2='yellow' name="Powerpoint prezentációk" img="/presetation.svg"/></Link>
      <Link className='meni' to="/weboldalak"><Menucard color1="lightblue" color2='blue' name="Weboldalak" img="/menu.svg" /></Link>
      <Link className='meni' to="/youtube"><Menucard color1="red" color2='Maroon' name="Youtube csatornám" img="/youtube.svg"/></Link>
      <a href='https://janiweb.eu' target='_blank' className='meni' ><Menucard color1="green" color2='navy' name="A régi Janiweb.eu" img="https://janiweb.eu/Janiweb%20logo.png" /></a>
    </div>
    </div>
  )
}
function Download({download,video,text}) {
  return (
    <div>
    <div className='menumenu dow'>
    <a href={download}  download={download}><video autoPlay muted loop playsInline><source src={video} type='video/mp4' /></video></a>
    <p>{text}</p>
    </div>
    </div>
  )
}
function Youtube() {
  return (
    <div>
    <a className='nolinkdesing' href="https://www.youtube.com/@jjaniwweb" target='_blank'><Prewiev name="Youtube(csatorna)" image="/youtube.svg" text="Itt van a youtube csatornám és egy pár videóm." color1="brown" color2="maroon" /></a>
    <h1 className='designated'>Kiemelt videók.</h1>
    <div className='videok'>
      <h2>Shorts</h2>
      <div className='videos'>
      <iframe height="576" src="https://www.youtube.com/embed/rb7WwjTQKCA" title="Kellemes húsvéti ünnepeket! #easter #easterday" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <iframe height="576" src="https://www.youtube.com/embed/TlrFk5Co1-E" title="Boldog új évet kíván a Janiweb." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <iframe height="576" src="https://www.youtube.com/embed/4EyioUaSFII" title="Boldog karácsonyt kívánok mindenkinek!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <iframe height="576" src="https://www.youtube.com/embed/CzFg-yD0Cs8" title="Intró ötletek." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
    </div>
  )
}


function Powerpoint() {
  return (
  <div className='bottomtotop'>
    <Prewiev name="PowerPoint" image="/presetation.svg" text="Itt vannak a Powerpoint prezentációim és innen le lehet tölteni egy katintással." color1="red" color2="yellow" />
    <Download download="/A naprendszer és az űrteleszkópok(Jani).pptx" video="p1.mp4" text="Ez egy naprendszeres és ürteleszkópos kvíz." />
  </div>
  )
}
function Weboldalak() {
  return (
    <div className='bottomtotop'>
      <Prewiev name="Weboldalaim" image="/weboldalak.svg" text="Itt vannak a egyelőre a régi weboldalaim de hamarosan érkeznek újak is most ezek a weboldalak a régi Janiwebről vannak." color1="lightblue" color2="blue" />
      <div className='menumenu' >
      <a href='https://janiweb.eu/weboldalak/irregular_verbs/irregularverbs.html' target='_blank' className='meni' ><Menucard color1="blue" color2='darkblue' name="Irregular Verbs" img="https://janiweb.eu//thumbnail/irregular_verbsicon.png" /></a>
      <a href='https://janiweb.eu/weboldalak/vezuv/vezuv.html' target='_blank' className='meni' ><Menucard color1="brown" color2='gray' name="A Vezúv a vulkán" img="https://janiweb.eu/thumbnail/1736918427307.jpg" /></a>
      <a href='https://janiweb.eu/weboldalak/vizkorforgas/vizkorforgas.html' target='_blank' className='meni' ><Menucard color1="blue" color2='lightblue' name="A víz körforgása" img="https://janiweb.eu/weboldalak/vizkorforgas/alapkep/vizkorforgasa.gif" /></a>
    </div>
    </div>
  )
}

export default function website() {
  return (
    <BrowserRouter>
    <div className='background'>
    <Head />
    <div className='contener'>
      <Routes>
        <Route path='/' element={<Fooldal />}  />
        <Route path='/menu' element={<Menu />} />
        <Route path='/powerpoint' element={<Powerpoint />} />
        <Route path='/weboldalak' element={<Weboldalak />} />
        <Route path='/youtube' element={<Youtube />} />
      </Routes>


    </div>
    </div>
    </BrowserRouter>
    
  )
}
