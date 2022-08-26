import { memo } from 'react';
import Styled from 'styled-components';

const Logo = () => <Image src={'/favicon.ico'} />;

const Image = Styled.img`
    position: absolute;
    width: 120px;
    top: 10px;
    right: 10px;
`;

export default memo(Logo);
