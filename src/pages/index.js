import React from "react"
import styled, { css } from "styled-components"

const Div = styled.div`
  ${({theme}) => css`
    color: ${theme.colors.mainDark};
  `}
`

export default () => <Div>Hello world!</Div>
