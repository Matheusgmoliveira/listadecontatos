import BotaoAdicionar from '../../components/BotaoAdicionar'
import FiltroPesquisa from '../../containers/FiltroPesquisa'
import ListaDeContatos from '../../containers/listaDeContatos'

const Home = () => (
  <>
    <FiltroPesquisa />
    <ListaDeContatos />
    <BotaoAdicionar />
  </>
)
export default Home
