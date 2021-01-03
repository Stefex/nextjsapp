import { Container, Row } from 'react-bootstrap'

import Cardelement from './cardelement'


export default function Grid() {
    return (
        <Container>
          <Row>
            <Cardelement></Cardelement>
            <Cardelement></Cardelement>
            <Cardelement></Cardelement>
            <Cardelement></Cardelement>
          </Row>
        </Container>

    )
}