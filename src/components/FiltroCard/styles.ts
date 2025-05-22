import styled from 'styled-components'
import Cores from '../../styles/cores'
import { CoresFiltro } from '../../styles/cores'

type Props = {
  ativo: boolean
}

export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid
    ${(props) => (props.ativo ? Cores.azul : CoresFiltro.cinzaClaro)};
  background-color: ${(props) => (props.ativo ? Cores.branco : Cores.branco2)};

  color: ${(props) => (props.ativo ? Cores.azul : CoresFiltro.cinzaEscuro)};
  border-radius: 8px;
  cursor: pointer;
`

export const Contador = styled.div`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.div`
  font-size: 14px;
`
