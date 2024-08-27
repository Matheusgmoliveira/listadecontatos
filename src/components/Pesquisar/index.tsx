import { useDispatch, useSelector } from 'react-redux'
import { InputPesquisa } from '../../styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

const Pesquisar = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <InputPesquisa
      type="text"
      placeholder="Procurar"
      value={termo}
      onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
    ></InputPesquisa>
  )
}

export default Pesquisar
