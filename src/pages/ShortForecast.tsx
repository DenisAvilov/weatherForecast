/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import Container from '@material-ui/core/Container'
import { Header } from '../components/Header'
import { FormField } from '../components/form/Form'
import { ListItems } from '../components/ListItems'

export const ShortForecast = () => (
  <Container maxWidth="md">
    <Header>
      Порогноз погоды
    </Header>
    <FormField />
    <ListItems />
  </Container>
)
