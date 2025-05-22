import styled from 'styled-components'
import Cores from '../../styles/cores'

export const Container = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const ContainerTitulo = styled.div`
  padding: 32px 0;
`

export const Titulo = styled.p`
  font-weight: bold;
  font-size: 1.3rem;
`

export const Campo = styled.input`
  padding: 8px;
  background-color: ${Cores.branco};
  font-weight: bold;
  border-radius: 8px;
  color: ${Cores.cinza};
  border-color: ${Cores.cinza};
  width: 100%;
  margin-bottom: 16px;
`

export const Form = styled.form`
  max-width: 50vw;
  width: 100%;
  font-weight: bold;
  font-size: 14px;

  textarea {
    resize: none;
    height: 100px;
  }
`

export const Opcoes = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
    color: ${Cores.cinza};
  }

  input {
    color: ${Cores.cinza};
    margin-right: 2px;
  }

  label {
    color: ${Cores.cinza};
    margin-right: 8px;
  }
`

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  text-transform: capitalize;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  border: none;
  cursor: pointer;
  background-color: ${Cores.verde};
  padding: 8px 12px;
  border-radius: 8px;
  margin-left: 8px;

  &:hover {
    background-color: ${Cores.verdeSombra};
  }
`
