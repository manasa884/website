import PropTypes from 'prop-types'
import React from 'react'
import NavBar from './navbar/navbar'

const Header = ({ siteTitle, menuLinks }) => (
  <NavBar menuLinks={menuLinks}/>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
