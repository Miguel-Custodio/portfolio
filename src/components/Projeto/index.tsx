import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card, LinkBotao } from './styles'

const Projeto = () => (
  <Card>
    <Titulo fontSize={16}>Projeto Lista de tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feita com VueJS</Paragrafo>
    <LinkBotao>Vizualizar</LinkBotao>
  </Card>
)

export default Projeto
