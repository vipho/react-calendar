import React from 'react'
import styled from 'styled-components'

import CalendarButtonGroup from "./CalendarButtonGroup";
import CalendarElement from './CalendarElement'

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const Table = styled.table``

export default () => {
    const line = []
    for (let i = 0; i < 7; i++) {
        line.push(<CalendarElement/>)
    }

    const lines = []
    for (let i = 0; i < 5; i++) {
        lines.push(<tr>{line}</tr>)
    }

    return (
        <Container>
            <div>
                <CalendarButtonGroup/>
                <Table>
                    <tbody>
                    {lines}
                    </tbody>
                </Table>
            </div>
        </Container>
    )
}
