import { useState } from 'react'
import './App.css'
import Img from './assets/img2.svg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Imagens</h1>
      <h2>Imagens Públicas no React</h2>
      <p>Puxar uma imagens da pasta public no react e muito simples, basta colocar '/' + o nome da imagem.formato</p>
      <p>Seu uso é indicado para coisas imutaveis, ja que a troca exigiria mais esforço para editar em todo projeto</p>
      <p>&lt;img src="/img1.svg" alt="Wallpaper"&gt;</p>
      
      <div>
        <img src="/img1.svg" alt="Wallpaper" />
      </div>

      <h2>Imagens no "assets"</h2>
      <p>Por mais que necessitem de importação, as imnagens colocadas no assets facilitam a manuntenção do código, 
      já que ela vai se comportar semelhante a um componente, facilitando a sua edição que automaticamente mudará 
      para tudo.
      </p>
      <p>&lt;img src={Img} alt="Wallpaper 2"&gt;</p>
      <div>
        <img src={Img} alt="Wallpaper 2" />
      </div>
    </>
  )
}

export default App
