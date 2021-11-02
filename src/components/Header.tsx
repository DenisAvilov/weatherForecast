import React from 'react'
import { Typography } from '@material-ui/core'
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export const Header = ({ children }: HeaderProps): JSX.Element => (
  <Typography
    variant="h4"
    gutterBottom
    component="div"
    align="center"
  >
    {children}
  </Typography>
)

type HeaderProps = {
    children: string
}
