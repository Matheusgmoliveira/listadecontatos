import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BotaoSalvar, MainContainer, Titulo, InputPesquisa } from '../../styles'
import { Form } from './styles'
import { cadastrar } from '../../store/reducers/contatos'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    const contatoParaAdicionar = {
      id: Date.now(),
      nome,
      email,
      telefone
    }
    dispatch(cadastrar(contatoParaAdicionar))
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <InputPesquisa
          value={nome}
          onChange={({ target }) => setNome(target.value)}
          type="text"
          placeholder="Nome"
        />
        <InputPesquisa
          value={telefone}
          onChange={({ target }) => setTelefone(target.value)}
          type="text"
          placeholder="Telefone"
        />
        <InputPesquisa
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="email" // Alterado para 'email' para melhor validação
          placeholder="Email"
        />
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
