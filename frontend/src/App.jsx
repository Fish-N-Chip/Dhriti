import { useState, memo } from 'react';
import styled from 'styled-components';
import Header from './components/header';
import Map from './components/map';
import Map1 from './components/map1';
import Map2 from './components/map2';
import RouteMap from './components/RouteMap';
import FishReports from './components/fishReports';
import Reports from './components/reports';
import PredictVessel from './components/predictVessel';
import Logo from './components/Logo';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Container>
            <Header />
            <Logo />
            <Routes>
                <Route exact path={`vessel-route`} element={<Map1 />} />
                <Route exact path={`overfishing`} element={<Map2 />} />
                <Route exact path={`fish-reports`} element={<FishReports />} />
                <Route exact path={`reports`} element={<Reports />} />
                <Route exact path={`prediction`} element={<PredictVessel />} />
                <Route exact path={`/`} element={<Map />} />
            </Routes>
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;

export default memo(App);
