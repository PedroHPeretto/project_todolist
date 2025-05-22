import styled from 'styled-components'
import Cores from '../../styles/cores'
import { CoresTarefas } from '../../styles/cores'
import * as enums from '../../utils/enums/Tarefa'

type TagProps = {
  prioridade?: enums.Prioridade
  status?: enums.Status
  parametro: 'status' | 'prioridade'
}

function corDeFundoTag(props: TagProps): string {
  if (props.parametro === 'status') {
    if (props.status === enums.Status.PENDENTE) return CoresTarefas.amarelo
    if (props.status === enums.Status.CONCLUIDA) return Cores.verde
  } else {
    if (props.prioridade === enums.Prioridade.IMPORTANTE)
      return CoresTarefas.laranja
    if (props.prioridade === enums.Prioridade.URGENTE)
      return CoresTarefas.vermelho
  }

  return CoresTarefas.cinzaClaro
}

export const Card = styled.div`
  background-color: ${Cores.branco2};
  box-shadow: 0px 4px 4px ${CoresTarefas.pretoSombraCard};
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    margin-bottom: 16px;

    input {
      margin-right: 8px;
    }
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;

  em {
    font-weight: bold;
    font-size: 18px;
    font-style: normal;
  }
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: ${Cores.branco};
  font-weight: bold;
  font-size: 10px;
  background-color: ${(props) => corDeFundoTag(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

export const Descricao = styled.textarea`
  color: ${CoresTarefas.cinzaEscuro};
  font-size: 14px
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const ActionBar = styled.div`
  border-top: 1px solid ${CoresTarefas.preto};
  padding-top: 16px;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: ${Cores.branco};
  border: none;
  cursor: pointer;
  background-color: ${Cores.azul};
  padding: 8px 12px;
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${Cores.verde};
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${CoresTarefas.vermelho};
`
