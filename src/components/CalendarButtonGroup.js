import React from 'react'
import styled from 'styled-components'

const ButtonGroup = styled.div`
  padding: 16px 0;
  
  & > * {
    margin-right: 8px;
  }
`

const Button = styled.button`
  line-height: 16px;
  background: #fff !important;
  border: 1px solid #DFDFDF;
  border-radius: 4px;
  color: #666;
  box-shadow: inset 0 0 3px #ccc;
  
  &:active {
    box-shadow: inset 0 0 6px #ccc;
  }
`

export default () => {
    return (
        <ButtonGroup>
            <Button>&lsaquo;</Button>
            <Button>&rsaquo;</Button>
            <Button>Сегодня</Button>
        </ButtonGroup>
    )
}
