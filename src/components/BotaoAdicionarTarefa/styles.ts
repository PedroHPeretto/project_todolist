import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Cores from '../../styles/cores'

export const Circulo = styled(Link)`
  border-radius: 100%;
  background-color: ${Cores.verde};
  color: ${Cores.branco};
  display: flex;
  width: 64px;
  height: 64px;
  position: fixed;
  bottom: 40px;
  right: 40px;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  text-decoration: none;
  &:hover {
    background-color: ${Cores.verdeSombra};
  }
`
