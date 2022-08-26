import React from 'react'
import Styled from 'styled-components'

function report({image, name, url}) {
  return (
    <Container>
        <Image src={image} />
        <Btn href={url}>
            {name}
        </Btn>
    </Container>
  )
}

const Container = Styled.div`
    margin-top: 50px;
    width: 500px;
    height: 300px;
    display: grid;
    background-color: #aeaeae6d;
    justify-content: space-around;
    border-radius: 25px;
`

const Image = Styled.img`
    width: 360px;
`

const Btn = Styled.a`
    font-size: 18px;
    margin: 0 auto;
`;

export default report