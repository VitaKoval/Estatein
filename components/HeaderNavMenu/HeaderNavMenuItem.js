import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { MenuItem, MenuLink } from './HeaderNavMenu.styled'
// import PropTypes from 'prop-types'

function HeaderNavMenuItem({label, href }) {
    const path = usePathname()
    const isActive = href === `${path}`
  
    return (
    <MenuItem>
        <MenuLink href={href} isActive={isActive}>{label}</MenuLink>
    </MenuItem>
  )
}

// HeaderNavMenuItem.propTypes = {

// }

export default HeaderNavMenuItem

