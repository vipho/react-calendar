import React from 'react'
import styled from 'styled-components'

import CalendarButtonGroup from "./CalendarButtonGroup";
import CalendarElement from './CalendarElement'

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const Table = styled.table`
  margin-bottom: 16px;
`

export default () => {
    function getLine(startDay, year, month, isFirstLine = false) {
        const line = []
        for (let i = 0; i < 7; i++) {
            line.push(
                <CalendarElement
                    key={i}
                    date={new Date(year, month, startDay + i)}
                    showDayName={isFirstLine}
                />)
        }
        return line
    }

    function getCalendar(year, month) {
        let firstDayIndex = new Date(year, month, 1).getDay() // По умолчанию Воскресенье имеет индекс 0
        if (firstDayIndex === 0) { // Делаем так, чтобы понедельник имел индекс 0
            firstDayIndex = 5
        } else if (firstDayIndex === 5) {
            firstDayIndex = 0
        } else {
            firstDayIndex -= 1
        }

        const daysInMonth = new Date(year, month - 1, 0).getDate()
        const lineAmount = Math.ceil((firstDayIndex + daysInMonth) / 7)

        const lines = []
        for (let i = 0; i < lineAmount; i++) {
            lines.push(
                <tr key={i}>
                    {getLine(7 * i - firstDayIndex, year, month, i === 0)}
                </tr>
            )
        }
        return lines;
    }

    return (
        <Container>
            <div>
                <CalendarButtonGroup/>
                <Table>
                    <tbody>
                    {/*<tr>{getFirstLine()}</tr>*/}
                    {getCalendar(2019, 11)}
                    </tbody>
                </Table>
            </div>
        </Container>
    )
}
