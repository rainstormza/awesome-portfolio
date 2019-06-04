import { Fragment } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import media from 'styled-media-query'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import SaveAltIcon from '@material-ui/icons/SaveAlt'

const NavStyle = styled.nav`
  color: white;
  font-weight: 300;
  font-size: 1.5rem;
  position: fixed;
  width: 100%;
  z-index: 999;

  ${media.lessThan('small')`
    overflow: scroll;
  `};
`

const NavContent = styled.div`
  margin: 0 auto;
  max-width: 980px;
  padding: 0;
  position: relative;
  padding-left: calc(max(22px, env(safe-area-inset-left)));
  padding-right: calc(max(22px, env(safe-area-inset-right)));

  ${media.lessThan('980px')`
    padding: 0 4vw;
  `};

  ${media.lessThan('small')`
    padding: 0 8vw;
  `};
`

const NavUlStyle = styled.ul`
  cursor: default;
  margin: 0;
  padding: 0;
  width: auto;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  list-style: none;
`

const NavLiStyle = styled.li`
  cursor: pointer;
  padding: 10px;
`

const IconStyle = styled<any>(Icon)`
  margin-left: 8px;
`

const Nav = () => (
  <Fragment>
    <NavStyle>
      <NavContent>
        <NavUlStyle>
          {/* <Link prefetch href="/" passHref>
            <NavLiStyle>Home</NavLiStyle>
          </Link>

          <Link href="/about" passHref>
            <NavLiStyle>About</NavLiStyle>
          </Link>
          <Link href="/skill" passHref>
            <NavLiStyle>Skills</NavLiStyle>
          </Link>
          <Link prefetch href="/experience" passHref>
            <NavLiStyle>Experience</NavLiStyle>
          </Link>
          <Link href="/" passHref>
            <NavLiStyle>Blog</NavLiStyle>
          </Link>
          <Link href="/" passHref>
            <NavLiStyle>React Playground</NavLiStyle>
          </Link> */}
          <NavLiStyle style={{ marginLeft: 'auto' }}>
            {/* <Button variant="contained" color="default">
              Contact
              <IconStyle>send</IconStyle>
            </Button> */}
            <a href="/static/supakorn.pdf" target="_blank">
              <IconButton aria-label="SaveAlt">
                <SaveAltIcon htmlColor="white" fontSize="large" />
              </IconButton>
            </a>
          </NavLiStyle>
        </NavUlStyle>
      </NavContent>
    </NavStyle>
  </Fragment>
)

export default Nav
