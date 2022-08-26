import React from 'react';
import Styled from 'styled-components';
import FishReport from './fishReport';
import Title from './Title';

function fishReports() {
    return (
        <Container>
            <Title title={`Fish Reports`} />
            <FishReport
                name={`temp`}
                image={
                    'https://cdn.pixabay.com/photo/2012/04/12/22/02/fish-30828__480.png'
                }
                url={`#`}
            />
            <FishReport
                name={`temp`}
                image={
                    'https://cdn.pixabay.com/photo/2012/04/12/22/02/fish-30828__480.png'
                }
                url={`#`}
            />
            <FishReport
                name={`temp`}
                image={
                    'https://cdn.pixabay.com/photo/2012/04/12/22/02/fish-30828__480.png'
                }
                url={`#`}
            />
            <FishReport
                name={`temp`}
                image={
                    'https://cdn.pixabay.com/photo/2012/04/12/22/02/fish-30828__480.png'
                }
                url={`#`}
            />
            <FishReport
                name={`temp`}
                image={
                    'https://cdn.pixabay.com/photo/2012/04/12/22/02/fish-30828__480.png'
                }
                url={`#`}
            />
            <FishReport
                name={`temp`}
                image={
                    'https://cdn.pixabay.com/photo/2012/04/12/22/02/fish-30828__480.png'
                }
                url={`#`}
            />
            <FishReport
                name={`temp`}
                image={
                    'https://cdn.pixabay.com/photo/2012/04/12/22/02/fish-30828__480.png'
                }
                url={`#`}
            />
            <FishReport
                name={`temp`}
                image={
                    'https://cdn.pixabay.com/photo/2012/04/12/22/02/fish-30828__480.png'
                }
                url={`#`}
            />
        </Container>
    );
}

const Container = Styled.div`
    margin-left: 58px;
    width: calc(100vw - 58px);
    height: 100vh;
    border-radius: 10px;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-around;
    overflow-y: scroll;
`;

export default fishReports;
