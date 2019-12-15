import React from 'react'
import styled from 'styled-components'

const CalendarElement = styled.td`
    border: 1px solid #ebebeb;
    width: 128px;
    height: 128px;
    padding: 8px;
    box-sizing: border-box;
    color: #999;
    font-size: 14px;
    font-weight: ${props => props.bold ? 'bold' : 'normal'};
`

export default (props) => {
    const weekDays = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
    ]

    function today(td) {
        var d = new Date();
        return td.getDate() == d.getDate() && td.getMonth() == d.getMonth() && td.getFullYear() == d.getFullYear();
    }

    return (
        <CalendarElement bold={today(props.date)}>
            {props.showDayName ? weekDays[props.date.getDay()] + ',' : null} {props.date.getDate()}
        </CalendarElement>
    )
}
