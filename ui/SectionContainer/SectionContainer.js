'use client'
import styled from "styled-components";
import css from '@styled-system/css'
import { variant } from 'styled-system'

 const SectionContainer = styled.div(
    css({
        display: 'flex',
        flexDirection: 'column',
        px: '1rem',
        mx: 'auto',
        width: '100%',
        maxWidth: '99.75rem',
    })
 )

 export default SectionContainer