import React from 'react'
import Styled from 'styled-components'
import Title from './Title';

function map() {
    return (
        <Container>
            <Title title={`position clustering based on gear type`} />
            <iframe
                width="100%"
                height="100%"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                allowFullScreen="true"
                title="positionclusters_2016_12_31"
                src="//www.arcgis.com/apps/Embed/index.html?webmap=e40bddd84e554dae92fec44ca81bce70&extent=45.3433,-26.5809,166.4565,44.2199&home=true&zoom=true&previewImage=false&scale=true&details=true&legendlayers=true&active_panel=details&basemap_gallery=true&disable_scroll=true&theme=dark"
            ></iframe>
        </Container>
    )
}
const Container = Styled.div`
    margin-left: 58px;
    width: calc(100vw - 58px);
    height: 100vh;
    border-radius: 10px;
`

export default map