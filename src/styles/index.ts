import styled, { createGlobalStyle } from 'styled-components'
import { darken } from 'polished'
import variaveis from './variaveis'
import { Botao } from '../components/Contato/styles'
const EstiloGlobal = createGlobalStyle`
*{
margin:0;
padding:0;
box-sizing: border-box;
font-family: Roboto, sans-serif;
list-style:none;
}`

export const Container = styled.div`
  display: block;
  margin-top: 24px;
  padding-left: 240px;
  align-itens: center;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const InputPesquisa = styled.input`
  width: 480px;
  padding: 4px 8px;
  margin-bottom: 16px;
  color: #000;
  font-weight: bold;
  font-size: 14px;
  font-family: 'Roboto Mono', monospace;
  border-radius: 8px;
`

export const Titulo = styled.p`
  font-size: 18px;
  font-weight: bold;
  font-family: Roboto, 'sans-serif';
  margin-bottom: 16px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};

  &:hover {
    background-color: ${darken(0.1, variaveis.verde)};
  }
`

export default EstiloGlobal
