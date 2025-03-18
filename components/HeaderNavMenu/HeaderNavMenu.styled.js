
import styled from "styled-components";
import css from '@styled-system/css'
import Link from "next/link";

export const HeaderNavMenuWrap = styled.ul(
    css({
        display: 'flex',
        gap: '0.5rem'
    })
)

export const MenuItem = styled.li(
    css({
       
    })
)

export const MenuLink = styled(Link)(
    ({isActive}) =>
    css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: '24px',
        py: '14px',
        border: '1px solid',
        borderColor: isActive ? '#262626' : 'transparent',
        borderRadius: '0.625rem',
        bg: isActive ? '#141414' : 'transparent',
        
        fontSize: '18px',
    })
)

