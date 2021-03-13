import React from 'react'
import StyledButton from './styled'

const Button = ({ children, ...rest }) => (
  <StyledButton {...rest}>
    { children }
  </StyledButton>
)

export default React.memo(Button)
