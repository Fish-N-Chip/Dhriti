import { useState, memo } from 'react';
import MapMyIndia from 'mapmyindia-react';
import styled from 'styled-components';

function RouteMap({ coords, route }) {
    return (
        <Container>
            <MapMyIndia
                height="calc(100vh)"
                width="calc(100vw - 50px)"
                zoom={8}
                search={true}
                center={[coords.lat, coords.lng]}
                markers={route}
            />
        </Container>
    );
}

export default memo(RouteMap);

const Container = styled.div`
    display: grid;
    width: max-content;
    justify-content: space-between;
    align-items: center;
    margin-left: 54px;
`;
