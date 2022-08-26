import React, { useState, memo } from 'react';
import axios from 'axios';
import RouteMap from './RouteMap';
import { TextField } from '@material-ui/core';
import Styled from 'styled-components';
import Title from './Title';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
let routeFound = 0;

function PredictVessel() {
    const [route, setRoute] = useState([]);
    const [mmsi, setMMSI] = useState('');
    const [coords, setCoords] = useState({
        lat: 17.385,
        lng: 78.4867,
    });
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPosition);
    }
    function getPosition(position) {
        setCoords({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
        });
    }
    const handleMMSI = (event) => {
        setMMSI(event.target.value);
    };
    function handleSubmit() {
        console.log(mmsi);
        setMMSI('');
        axios({
            method: 'POST',
            url: 'http://127.0.0.1:5000',
            data: {
                mmsi: mmsi,
            },
        }).then((response) => {
            if (response.data == '1') {
                routeFound = 1;
            }
            setRoute(response.data);
        });
    }
    return (
        <>
            {routeFound === 0 ? (
                <Box>
                    <Title title={`Vessel Predictor`} />
                    <Container>
                        <AccountCircleIcon
                            sx={{
                                fontSize: 160,
                                color: '#28ACEA',
                                margin: '0 auto',
                            }}
                        />
                        <InputField
                            required
                            inputProps={{
                                inputMode: 'numeric',
                                pattern: '[0-9]*',
                            }}
                            type="number"
                            onChange={handleMMSI}
                            placeholder={'Enter MMSI'}
                            name={'mmsi'}
                            value={mmsi}
                        />
                        <Submit onClick={handleSubmit}>Submit</Submit>
                    </Container>
                </Box>
            ) : (
                <RouteMap coords={coords} route={route}/>
            )}
        </>
    );
}

const Box = Styled.div`
    display: grid;
    margin-left: 58px;
    width: calc(100vw - 58px);
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

const Container = Styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    background-color: #aeaeae6d;
    border-radius: 25px;
    width: 320px;
    height: 320px;
`;

const InputField = Styled.input`
    display: grid;
    outline: none;
    border: none;
    background: none;
    font-size: 20px;
    border-bottom: 4px solid rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 0 auto;
`;

const Submit = Styled.button`
    background: #28ACEA;
    width: max-content;
    padding: 8px 32px;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 500;
    border-radius: 25px;
    margin: 0 auto;
    border: none
`;

export default memo(PredictVessel);
