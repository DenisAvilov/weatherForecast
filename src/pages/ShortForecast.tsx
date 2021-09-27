/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, {
  useCallback,
  useEffect, useState
} from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import LocationSearchingIcon from '@material-ui/icons/LocationSearching'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import UpdateIcon from '@mui/icons-material/Update'
import Button from '@material-ui/core/Button'
import { styled } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import IconButton from '@material-ui/core/IconButton'
import ListItemText from '@material-ui/core/ListItemText'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Snackbar from '@material-ui/core/Snackbar'
import Fade from '@material-ui/core/Fade'
import { TransitionProps } from '@material-ui/core/transitions'
import Slide from '@material-ui/core/Slide'
import { useHttp } from '../hooks/http.hook'
import { useCitys } from '../hooks/citys.hook'
import { CitysWeather } from '../types'
import {
  addCityActionCreator,
  addRemoveActionCreator,
  addUpdateActionCreator,
} from '../redux-toolkit'

const useStyles = makeStyles({
  fullWidth: {
    textAlign: 'center',
  },
  button: {
    height: '40px',
  },
  resetStyle: {
    textDecoration: 'none',
    color: 'inherit',
    '& :hover span': {
      color: 'red',
    },
  },
  icon: {
    width: '80px',
    height: '80px',
  },
  back: {
    background: '#e5dcd2',
    marginBottom: '10px',
  }
})

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}))

export const ShortForecast = () => {
  const dispath = useDispatch()
  const shortForecast = useSelector((state: any) => state.shortForecast)
  const classes = useStyles()
  const { citysList, addCity, removeOneCity } = useCitys()
  const { request, error, loading } = useHttp()
  const [flag, setFlag] = useState<boolean>(true)
  const [newCityInput, setNewCityInput] = useState<string>('')
  const [state, setState] = useState<{
    open: boolean;
    Transition: React.ComponentType<
      TransitionProps & {
        children?: React.ReactElement<any, any>;
      }
    >;
  }>({
    open: false,
    Transition: Fade,
  })
  function SlideTransition(props: TransitionProps) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Slide {...props} direction="up" />;
  }
  const handleClick = (
    Transition: React.ComponentType<
        TransitionProps & {
          children?: React.ReactElement<any, any>;
        }
      >,
  ) => () => {
    setState({
      open: true,
      Transition,
    });
  }
  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  }

  const removeCity = (id: number, name: string) => {
    removeOneCity(name)
    dispath(addRemoveActionCreator({ id }))
  }

  const updateClick = useCallback(async (name) => {
    setFlag(false)
    const data = await request(
      // eslint-disable-next-line max-len
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&lang=ru`,
    )
    if (data.cod === 200) {
      dispath(addUpdateActionCreator(data))
      setFlag(true)
    }
  }, [request, dispath])

  const Generate = () => {
    const secondary = true
    return shortForecast.map((value:CitysWeather) => (
      <ListItem
        secondaryAction={(
          <>
            <IconButton
              size="large"
              edge="start"
              aria-label="update"
              onClick={() => updateClick(value.name)}
            >
              <UpdateIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="delete"
              onClick={() => removeCity(value.id, value.name)}
            >
              <HighlightOffIcon />
            </IconButton>
          </>
      )}
        key={value.id}
        className={classes.back}
      >
        <NavLink to={`/detail/${value.name}`} className={classes.resetStyle}>
          <Grid container alignItems="center">
            <Grid item>
              <div>
                {value.weather.map((el) => (
                  <img className={classes.icon} src={`http://openweathermap.org/img/wn/${el.icon}@2x.png`} alt={el.description} />
                ))}
              </div>
            </Grid>
            <Grid item>
              <ListItemText
                primary={`Прогноз погоды на сегодня - ${value.name}`}
                secondary={
          secondary ? `${Math.ceil(value.main.temp)}℃ ${value.weather.map(
            (we) => ` ${we.description}`
          )}` : null
        }
              />
            </Grid>
          </Grid>
        </NavLink>
      </ListItem>
    ))
  }
  const handleInputChange = (e: any) => {
    const prev = e.target.value
    setNewCityInput(prev.trim())
  }
  const handleCreateNewCity = async (e?: any) => {
    e?.preventDefault()
    const data = await request(
      // eslint-disable-next-line max-len
      `https://api.openweathermap.org/data/2.5/weather?q=${newCityInput}&units=metric&lang=ru`,
    )
    if (data.cod === 200) {
      dispath(addCityActionCreator(data))
      addCity(data.name)
    } else {
      document.addEventListener('myclick', () => {
        handleClick(SlideTransition)
      });
      const event = new MouseEvent('myclick')
      document.dispatchEvent(event)
    }
    setNewCityInput('')
  }
  handleClick(SlideTransition)
  useEffect(() => {
    <></>
  }, [citysList, error])
  return (
    <Container maxWidth="xl">
      <Typography
        className={classes.fullWidth}
        variant="h1"
        component="div"
        gutterBottom
      >
        Прогноз погоды
      </Typography>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
      >
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '35ch' },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleCreateNewCity}
        >
          <TextField
            id="addCity"
            label="Добавте Город"
            variant="standard"
            onChange={handleInputChange}
            value={newCityInput}
          />
          <Button
            className={classes.button}
            variant="contained"
            endIcon={<LocationSearchingIcon />}
            type="submit"
            disabled={loading}
          >
            Добавить
          </Button>
        </Box>
        <Snackbar
          open={state.open}
          onClose={handleClose}
          TransitionComponent={state.Transition}
          message={error}
          key={state.Transition.name}
        />
      </Grid>
      <Typography variant="h5" gutterBottom component="div">
        Погода в вашем регионе
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Областной центр Харьковской области
          </Typography>
          <Demo>
            <List>
              {Generate()}
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Container>
  )
}
