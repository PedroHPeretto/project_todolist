import styled from 'styled-components'
import Cores from '../../styles/cores'
import { CoresBarra } from '../../styles/cores'

export const Aside = styled.aside`
  padding: 16px;
  background-color: ${CoresBarra.azulClaro};
  height: 100vh;
`
export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`

export const Campo = styled.input`
  padding: 8px;
  background-color: ${Cores.branco};
  font-weight: bold;
  border-radius: 8px;
  color: ${Cores.cinza};
  border-color: ${Cores.cinza};
  width: 100%;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 13px;
  color: ${Cores.branco};
  border: none;
  cursor: pointer;
  background-color: ${Cores.azul};
  padding: 8px 12px;
  border-radius: 8px;
  margin-right: 8px;
`
