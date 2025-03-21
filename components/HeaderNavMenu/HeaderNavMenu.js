'use client'
import Link from 'next/link'
import React from 'react'
import { HeaderNavMenuWrap, MenuItem } from './HeaderNavMenu.styled'
import HeaderNavMenuItem from './HeaderNavMenuItem'
// import PropTypes from 'prop-types'

function HeaderNavMenu({ pages }) {
    return (
            <nav>
            <HeaderNavMenuWrap>
                {pages.map(({...pageProps}) => (
                    <HeaderNavMenuItem key={pageProps.label} {...pageProps}/>
                ))}
                   
            </HeaderNavMenuWrap>
            </nav>
  )
}

// HeaderNavMenu.propTypes = {

// }

export default HeaderNavMenu

