import Tarefa from '../../components/Tarefas'
import { Container, ParagrafoPesquisa, Pesquisa } from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        )
      }
      return tarefasFiltradas
    } else {
      return itens
    }
  }

  const tarefas = filtraTarefas()

  const resultadoFiltro = (quantidade: number) => {
    const termoPesquisa =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''

    if (criterio === 'todas') {
      if (quantidade === 1) {
        return `${quantidade} tarefa marcada como ${criterio} ${termoPesquisa}`
      } else {
        return `${quantidade} tarefas marcadas como ${criterio} ${termoPesquisa}`
      }
    } else if (criterio === 'prioridade' || criterio === 'status') {
      if (quantidade === 1) {
        return `${quantidade} tarefa marcada como ${criterio} ${valor} ${termoPesquisa}`
      } else {
        return `${quantidade} tarefas marcadas como ${criterio} ${valor} ${termoPesquisa}`
      }
    }
  }

  return (
    <Container>
      <ParagrafoPesquisa>
        <Pesquisa>{resultadoFiltro(tarefas.length)}</Pesquisa>
      </ParagrafoPesquisa>
      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              id={t.id}
              descricao={t.descricao}
              titulo={t.titulo}
              prioridade={t.prioridade}
              status={t.status}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
