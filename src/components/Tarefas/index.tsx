import { useState, useEffect, ChangeEvent } from 'react'
import * as Styled from './styles'
import { useDispatch } from 'react-redux'
import { remover, editar, alteraStatus } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type Props = TarefaClass

const Tarefa = ({
  titulo,
  prioridade,
  status,
  descricao: descricaoOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [edit, setEdit] = useState(false)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  function cancelarEdit() {
    setEdit(false)
    setDescricao(descricaoOriginal)
  }

  function alteraStatusTarefa(evento: ChangeEvent<HTMLInputElement>) {
    dispatch(
      alteraStatus({
        id,
        finalizado: evento.target.checked
      })
    )
  }

  return (
    <Styled.Card>
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          id={titulo}
          checked={status === enums.Status.CONCLUIDA}
          onChange={alteraStatusTarefa}
        />
        <Styled.Titulo>
          {edit && <em>Editando: </em>}
          {titulo}
        </Styled.Titulo>
      </label>
      <Styled.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </Styled.Tag>
      <Styled.Tag parametro="status" status={status}>
        {status}
      </Styled.Tag>
      <Styled.Descricao
        disabled={!edit}
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
      />
      <Styled.ActionBar>
        {edit ? (
          <>
            <Styled.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    titulo,
                    prioridade,
                    status,
                    descricao,
                    id
                  })
                )
                setEdit(false)
              }}
            >
              Salvar
            </Styled.BotaoSalvar>
            <Styled.BotaoCancelarRemover onClick={cancelarEdit}>
              Cancelar
            </Styled.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Styled.Botao onClick={() => setEdit(true)}>Editar</Styled.Botao>
            <Styled.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </Styled.BotaoCancelarRemover>
          </>
        )}
      </Styled.ActionBar>
    </Styled.Card>
  )
}

export default Tarefa
