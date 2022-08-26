import { memo } from 'react';
import Styled from 'styled-components';

function Title({ title }) {
    return <Heading>{title}</Heading>;
}

const Heading = Styled.div`
    position: absolute;
    width: calc(100vw - 69px);
    top: 5px;
    text-align: center;
    font-size: 36px;
    text-transform: capitalize;
    color: #28ACEA
`;

export default memo(Title);
