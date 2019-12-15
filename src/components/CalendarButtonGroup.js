import React, {useState} from 'react'
import styled from 'styled-components'

const ButtonGroup = styled.div`
  padding: 16px 0;
  
  & > * {
    margin-right: 8px;
  }
`

const Button = styled.button`
  height: 16px;
  background: #fff !important;
  border: 1px solid #DFDFDF;
  border-radius: 4px;
  color: #666;
  box-shadow: inset 0 0 3px #ccc;
  padding: 0 4px;
  
  &:active {
    box-shadow: inset 0 0 6px #ccc;
  }
`

const Month = styled.p`
    display: inline-block;
    line-height: 16px;
`

export default (props) => {
    function getMonth(date) {
       const monthNames = [
           'Январь',
           'Февраль',
           'Март',
           'Апрель',
           'Май',
           'Июнь',
           'Июль',
           'Август',
           'Сентябрь',
           'Октябрь',
           'Ноябрь',
           'Декабрь',
       ]
       return monthNames[date.getMonth()] + ' ' + date.getFullYear()
    }

    function setToday() {
        const today = new Date()
        props.setDate(new Date(today.getFullYear(), today.getMonth()))
    }

    function decrementDate() {
        props.setDate(new Date(props.date.getFullYear(), props.date.getMonth() - 1))
    }

    function incrementDate() {
        props.setDate(new Date(props.date.getFullYear(), props.date.getMonth() + 1))
    }

    return (
        <ButtonGroup>
            <Button onClick={decrementDate}>&lsaquo;</Button>
            <Month>{getMonth(props.date)}</Month>
            <Button onClick={incrementDate}>&rsaquo;</Button>
            <Button onClick={setToday}>Сегодня</Button>
        </ButtonGroup>
    )
}
