import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import LocationSearchingIcon from '@material-ui/icons/LocationSearching'
import {
  Formik, Form, ErrorMessage, Field
} from 'formik'
import { Grid } from '@material-ui/core'
import { useAddCitys } from '../../hooks/addCity.hook'

export const FormField = (): JSX.Element => {
  const { addNewCity } = useAddCitys()
  const [value, setValues] = useState<string>('')
  const initialValues: InitialValuesForm = {
    cityName: ''
  }
  const validate = (e: InitialValuesForm): ErrorForm => {
    setValues(e.cityName)
    const error: ErrorForm = {}
    if (!e.cityName.length) {
      error.cityName = 'Поле не должно быть пустым!'
    } else if (e.cityName.length <= 3) {
      error.cityName = 'Введите больше 3 символов'
    }
    return error
  }
  const onSubmit = (
    cityName: InitialValuesForm,
    { resetForm }: any
  ): void => {
    addNewCity(cityName.cityName)
    resetForm({ cityName: '' })
    setValues('')
  }
  const formStyle = {
    display: 'flex'
  }
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
    >
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        {() => (
          <Form style={formStyle}>
            <Field name="cityName">
              {(props: any) => (
                <>
                  <>
                    <TextField
                      placeholder="Ведите город"
                      variant="standard"
                    // eslint-disable-next-line react/jsx-props-no-spreading
                      {...props.field}
                      value={value}
                    />
                    <Button
                      variant="contained"
                      endIcon={<LocationSearchingIcon />}
                      type="submit"
                      size="small"
                      disabled={!!props.meta.error}
                    >
                      Добавить
                    </Button>
                  </>
                  <>
                    <ErrorMessage name="cityName">
                      {(error: React.ReactNode) => (
                        <div className="error">
                          {' '}
                          {error}
                          {' '}
                        </div>
                      )}
                    </ErrorMessage>
                  </>
                </>
              )}
            </Field>
          </Form>
        )}
      </Formik>
    </Grid>

  )
}

type InitialValuesForm = {
  cityName: string
}
type ErrorForm = {
    cityName?: string
}
