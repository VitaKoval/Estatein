'use client'
import styled from "styled-components";
import css from '@styled-system/css'
import Link from "next/link";


export const HeaderWrapper = styled.header(
    css({
        position: 'fixed',
        top: '0',
        width: '100%',
        bg: '#1A1A1A',
        zIndex: '10',
        padding: '1.25rem 0',
        minHeight: '6.188rem',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: '#262626'
    })
)

export const HeaderInner = styled.div(
    css({
        display: 'flex',
        gap: '1.5rem',
        alignItems: 'center',
        justifyContent: 'space-between'
    })
)

export const HeaderLogoLink = styled(Link)(
    css({
        maxWidth: '10rem',
    })
)

