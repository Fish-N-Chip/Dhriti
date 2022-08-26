import Styled from 'styled-components'

function fishReport({name, image, url}) {
  return (
    <Container>
        <Name>
            {name}
        </Name>
        <Image src={image} />
        <Btn href={url}>
            Download
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
    border-radius: 25px
`;

const Name = Styled.p`
    font-size: 32px;
    margin: 8px auto;
    font-weight: 600;
    color: #28ACEA;
    text-transform: uppercase;
`
const Image = Styled.img`
    width: 360px;
`

const Btn = Styled.a`
    font-size: 18px;
    margin: 0 auto;
`;

export default fishReport