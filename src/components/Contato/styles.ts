import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  width: 50%;
  border-radius: 16px;
`
export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
`
export const Dados = styled.span`
  display: block;
  padding: 4px 8px;
  color: #000;
  font-weight: bold;
  font-size: 12px;
  font-family: 'Roboto Mono', monospace;

  & i {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  & i img {
    padding-top: 12px;
    width: 24px;
    height: 24px;
  }
`
export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`
export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`
export const BotaoCancelareRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
