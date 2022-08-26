import React from 'react';
import Styled from 'styled-components';
import Title from './Title';

function map() {
    return (
        <Container>
            <Title title={`Overfishing Zones`} />
            <iframe
                width="100%"
                height="100%"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                allowFullScreen="true"
                title="positionclusters_2016_12_31"
                src="//www.arcgis.com/apps/Embed/index.html?webmap=74ae584b48fd4e4b977995383894ae80&extent=38.8069,-23.5968,159.9202,46.5342&home=true&zoom=true&previewImage=false&scale=true&details=true&legend=true&active_panel=legend&basemap_gallery=true&disable_scroll=true&theme=dark"
            ></iframe>
        </Container>
    );
}
const Container = Styled.div`
    margin-left: 54px;
    width: calc(100vw - 54px);
    height: 100vh;
    border-radius: 10px;
`;

export default map;
