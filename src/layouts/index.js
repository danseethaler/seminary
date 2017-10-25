import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import glamorous, { div } from 'glamorous'

import './index.css'
import './custom.css'
import '../assets/lato.css'

const NavContainer = div({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  margin: 8
})

const NavLink = props => {
  let passProps = Object.assign({}, props)

  let NavLink = glamorous(Link)({
    marginRight: '2rem',
    color: '#2d414e',
    textDecoration: 'none',
    fontFamily: 'Lato, sans-serif',
    padding: '4px 6px'
  })

  return <NavLink {...passProps} />
}

const Header = () => (
  <div
    className="app-navigation-wrapper"
  >
    <NavContainer>
      <h4 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: '#2d414e',
            textDecoration: 'none',
          }}
        >
          Hillsborough Seminary
        </Link>
      </h4>
    </NavContainer>
    <NavContainer>
      <NavLink to="/schedule" activeClassName="active-page">Schedule</NavLink>
      <NavLink to="/random" activeClassName="active-page">Random</NavLink>
      <NavLink to="/links" activeClassName="active-page">Links</NavLink>
    </NavContainer>
  </div>
)

class TemplateWrapper extends React.Component {
  state = {
    err: false,
  }

  componentDidCatch(err, info) {
    this.setState({ err, errorMsg: err.toString(), info })
  }

  render() {
    const { children } = this.props
    if (this.state.err) {
      return (
        <div>
          <p>Oops! An error occurred. Please try again.</p>
          <p>{this.state.errorMsg}</p>
        </div>
      )
    }
    return (
      <div>
        <Helmet
          title="LDS Seminary | Hillsborough, NC"
          meta={[
            {
              name: 'description',
              content: 'LDS Seminary Class | Hillsborough',
            },
            {
              name: 'keywords',
              content: 'seminary, lds, church, youth',
            },
          ]}
        />
        <Header />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children()}
        </div>
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
