import Link from 'next/link'
import Nav from '../components/nav'
import styled from 'styled-components'

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 93vh;
  background: grey;
  font-size: 10em;
  font-weight: 800;
  color: white;
`

export default () => (
  <div>
    <Nav />
    <Container>
      <Link href="/ ">
        <button>GITHUB</button>
      </Link>
      Home
    </Container>
  </div>
)