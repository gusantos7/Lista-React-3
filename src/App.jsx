import { useState } from 'react'
import './App.css'
import ListaMap from './assets/components/1º ListaMap'
import Filho from './assets/components/2º ComponenteProps'
import Visivel from './assets/components/3º CondicionalProps'
import Tabela from './assets/components/4º Tabela'
import Imagens from './assets/components/5º ArrayImagens'
import Estilo from './assets/components/6º EstilosDinamicos'
import Lista from './assets/components/7º ListaKey'
import ConteudoCard from './assets/components/8º Children'
import Conteudo from './assets/components/9ª FragmentosAninhados'
import ImagensComTexto from './assets/components/10º ImagensAltText'

function App() {

  return (
    <>
    <h1>3º Lista de exercícios</h1>
    <ListaMap />
    <Filho />
    <Visivel visivel={true} />
    <Tabela />
    <Imagens />
    <Estilo isHighlighted={true}/>
    <Lista />
    <ConteudoCard />
    <Conteudo />
    <ImagensComTexto />
    </>
  )
}

export default App
