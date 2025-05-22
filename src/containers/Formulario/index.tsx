import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as enums from '../../utils/enums/Tarefa'
import {
  Container,
  Titulo,
  ContainerTitulo,
  Campo,
  Form,
  Opcoes,
  Botao,
  SubContainer
} from './styles'
import { adicionar } from '../../store/reducers/tarefas'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const adicionarTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      adicionar({
        titulo,
        prioridade,
        descricao,
        status: enums.Status.PENDENTE
      })
    )
    navigate('/')
  }

  return (
    <Container>
      <ContainerTitulo>
        <Titulo>Nova tarefa</Titulo>
      </ContainerTitulo>
      <Form onSubmit={adicionarTarefa}>
        <Campo
          value={titulo}
          onChange={({ target }) => setTitulo(target.value)}
          type="text"
          placeholder="Título"
        />
        <Campo
          value={descricao}
          onChange={({ target }) => setDescricao(target.value)}
          as="textarea"
          placeholder="Descrição da tarefa"
        />
        <Opcoes>
          <p>Prioridade</p>
          <SubContainer>
            {Object.values(enums.Prioridade).map((prioridade) => (
              <div key={prioridade}>
                <input
                  value={prioridade}
                  name="prioridade"
                  type="radio"
                  id={prioridade}
                  defaultChecked={prioridade === enums.Prioridade.NORMAL}
                  onChange={({ target }) =>
                    setPrioridade(target.value as enums.Prioridade)
                  }
                />
                <label htmlFor={prioridade}>{prioridade}</label>
              </div>
            ))}
            <Botao type="submit">Adicionar</Botao>
          </SubContainer>
        </Opcoes>
      </Form>
    </Container>
  )
}

export default Formulario
