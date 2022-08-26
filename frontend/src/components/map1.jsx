import React from 'react'
import Styled from 'styled-components'
import Title from './Title';

function map() {
    return (
        <Container>
            <Title title={`Vessel Analysis`} />
            <iframe
                width="100%"
                height="100%"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                allowFullScreen="true"
                title="positionclusters_2016_12_31"
                src="https://app.powerbi.com/view?r=eyJrIjoiODQzNWM2NjYtMzUzNC00MmRlLWExNzUtNGY4ZWJhZDZkMTNlIiwidCI6Ijc4MWY1MWNjLTQ2MTgtNDI0Ny04YmU3LTNiYjc0ODU4YzkwMSIsImMiOjEwfQ%3D%3D&pageName=ReportSectiondd788b79c1c0fc86086f"
            ></iframe>
        </Container>
    )
}
const Container = Styled.div`
    margin-left: 54px;
    width: calc(100vw - 54px);
    height: 100vh;
    border-radius: 10px;
`

export default map