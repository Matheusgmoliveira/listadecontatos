import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import PhoneIcon from '../../assets/phone.svg'
import EmailIcon from '../../assets/email.svg'

import { remover, editar } from '../../store/reducers/contatos'
type Props = {
  id: number
  nome: string
  email: string
  telefone: string
}

const Contato = ({ email, nome, telefone, id }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [editaTelefone, setEditaTelefone] = useState(telefone)
  const [editaEmail, setEditaEmail] = useState(email)

  useEffect(() => {
    setEditaEmail(email)
  }, [email])

  useEffect(() => {
    setEditaTelefone(telefone)
  }, [telefone])

  function cancelarEdicao() {
    setEstaEditando(false)
    setEditaEmail(email)
    setEditaTelefone(telefone)
  }

  function salvarEdicao() {
    dispatch(
      editar({
        id,
        nome,
        telefone: editaTelefone,
        email: editaEmail
      })
    )
    setEstaEditando(false)
  }

  return (
    <S.Card>
      <S.Titulo>{nome}</S.Titulo>
      {estaEditando ? (
        <>
          <S.Dados>
            <i>
              <img src={PhoneIcon} alt="PhoneIcon" />
            </i>
            <input
              type="text"
              value={editaTelefone}
              onChange={(evento) => setEditaTelefone(evento.target.value)}
            />
          </S.Dados>
          <S.Dados>
            <i>
              <img src={EmailIcon} alt="EmailIcon" />
            </i>
            <input
              type="text"
              value={editaEmail}
              onChange={(evento) => setEditaEmail(evento.target.value)}
            />
          </S.Dados>
        </>
      ) : (
        <>
          <S.Dados>
            <i>
              <img src={PhoneIcon} alt="PhoneIcon" />
            </i>
            {telefone}
          </S.Dados>
          <S.Dados>
            <i>
              <img src={EmailIcon} alt="EmailIcon" />
            </i>
            {email}
          </S.Dados>
        </>
      )}
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar onClick={salvarEdicao}>Salvar</S.BotaoSalvar>
            <S.BotaoCancelareRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelareRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelareRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelareRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
