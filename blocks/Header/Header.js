

import Image from 'next/image'
import React from 'react'
import { HeaderWrapper, HeaderInner, HeaderLogoLink, MenuItem } from './Header.styled'
import logo from '../../public/logo.png'
import { SectionContainer } from '@/ui'
import { HeaderNavMenu } from '@/components'

const pages = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/meals',
    label: 'About Us',
  },
  {
    href: '/community',
    label: 'Properties',
  },
  {
    href: '/meals/share',
    label: 'Services',
   
  },
]

function Header() {
  return (
      <HeaderWrapper>
          <SectionContainer>
            <HeaderInner>
                <HeaderLogoLink href='/'>
                    <Image src={logo} alt='Logo Estatein' />
          </HeaderLogoLink>
          <HeaderNavMenu pages={pages}/>

                <button>Contact Us</button>
            </HeaderInner>
          </SectionContainer>
      </HeaderWrapper>
  )
}

export default Header
