import React, { useState } from 'react'
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
    const today = new Date()
    const [date, setDate] = useState(new Date(today.getFullYear(), today.getMonth()))

    function getLine(startDay, isFirstLine = false) {
        const year = date.getFullYear()
        const month = date.getMonth()

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

    function getCalendar() {
        const year = date.getFullYear()
        const month = date.getMonth()

        let firstDayIndex = new Date(year, month, 1).getDay() // По умолчанию Воскресенье имеет индекс 0
        firstDayIndex = firstDayIndex === 0 ? 6 : firstDayIndex - 1 // Делаем так, чтобы понедельник имел индекс

        const daysInMonth = new Date(year, month - 1, 0).getDate()
        const lineAmount = Math.ceil((firstDayIndex + daysInMonth) / 7)

        const lines = []
        for (let i = 0; i < lineAmount; i++) {
            lines.push(
                <tr key={i}>
                    {getLine(7 * i - firstDayIndex + 1, i === 0)}
                </tr>
            )
        }
        return lines;
    }

    return (
        <Container>
            <div>
                <CalendarButtonGroup
                    date={date}
                    setDate={setDate}
                />
                <Table>
                    <tbody>
                    {getCalendar()}
                    </tbody>
                </Table>
            </div>
        </Container>
    )
}
