/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
// https://github.com/AugustoRavazoli/react-weather-app/blob/main/src/App.js
import React, { useEffect } from 'react'
import moment from 'moment'
import 'moment/locale/ru'
import { useParams } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import {
  Button, Card, Grid, Paper
} from '@mui/material'
import { makeStyles, styled } from '@material-ui/styles'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import Stack from '@material-ui/core/Stack'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { useSelector } from 'react-redux'
import {
  Box, CardContent,
} from '@material-ui/core'
import { useDetailed } from '../hooks/detailed.hook'
import { everyN, giveColor } from '../components/functionHelper'

const theme = createTheme()
const useStyles = makeStyles(({
  root: {
    color: theme.palette.primary.main
  },
  test: {
    backgroundColor: '#cecee',
  },
  card: {
    backgroundImage: 'url(https://media.istockphoto.com/photos/the-changes-of-weather-a-natural-phenomenon-of-the-differences-of-picture-id1257525705?b=1&k=20&m=1257525705&s=170667a&w=0&h=8APfi2HN3sWhvfqC5CHs0dkhMDpX1reiiOOD2sBJAj4=)',
    backgroundColor: '#cecece',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: '200px',
    marginBottom: '20px',
  },
  cardContentMain: {
    backgroundColor: '#96c1e22b'
  },
  cardDaily: {
    '& .css-13i4rnv-MuiGrid-root': {
      marginBottom: '30px',
    },
    '& img': {
      width: '80px',
      backgroundColor: 'orange'
    }
  },
  c: {
    marginRight: '10px',
  },
  itemsDealy: {
    marginBottom: '20px',
    '& span': {
      marginBottom: '10px'
    },
    '& img': {
      backgroundColor: '#cecece',
    },
    '& .css-1clyo4s-MuiStack-root': {
      marginBottom: '20px',
    },
    '& .css-0': {
      height: '100px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  textCapitalize: {
    textTransform: 'capitalize',
  },
  typographyH2: {
    marginBottom: '20px !important'
  }
}))
const Item = styled(Paper)(() => ({
  textAlign: 'center',
  minHeight: '250px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'end',
}))
const AvatarMain = styled(Avatar)(() => ({
  height: '70px !important',
  width: '70px !important',
}))
export const DetailForecast = () => {
  const { slug } = useParams<Slug>()
  const classes = useStyles()
  const dataOneCalls = useSelector((state: any) => state.oneCall)
  const { createDetailed } = useDetailed()
  const ItemsDealy = () => {
    const currentID = dataOneCalls[0] ? dataOneCalls[0].hourly : []
    const DayToDayH = dataOneCalls[0]
      ? everyN(currentID, 3)
      : []
    return DayToDayH.slice(0, 9).map((el: Hourly): JSX.Element => {
      const t = `${Math.ceil(el.temp)}`
      // eslint-disable-next-line no-plusplus
      let g = 0
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i <= +t; i++) {
        g += 3
      }
      const styleTest = {
        padding: `${+t < 0 ? (g / 50) * 100 : 0}% 0 ${+t >= 0 ? (g / 50) * 100 : 0}% 0`
      }
      const paperTempHour = {
        padding: '3px 7px',
        background: `${giveColor(+t)}`,
      }
      const dealyAvatar = `http://openweathermap.org/img/wn/${el.weather
        .map((item: Weather) => item.icon)}@2x.png`
      return (
        <Grid
          item
          key={el.dt}
          className={classes.itemsDealy}
        >
          <Box component="span">
            <Typography component="span">
              { moment.unix(el.dt).locale('ru').format('ddd') }
            </Typography>
            <Typography component="span">
              { moment.unix(el.dt).hours() }
              :
              { moment.unix(el.dt).minutes() }
              0
            </Typography>
          </Box>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Avatar
              alt="Remy Sharp"
              src={dealyAvatar}
            />
          </Stack>
          <Box component="div" style={styleTest}>
            <Paper variant="outlined" style={paperTempHour}>
              {Math.ceil(el.temp)}
              °С
            </Paper>
          </Box>
        </Grid>
      )
    })
  }
  const WeatherToDay = () => {
    const currentTemp = `${Math.ceil(dataOneCalls[0] && dataOneCalls[0].current.temp)}°С`
    const feelsLike = `${Math.ceil(dataOneCalls[0] && dataOneCalls[0].current.feels_like)}°C`
    const curentAvater = `http://openweathermap.org/img/wn/${dataOneCalls[0] && dataOneCalls[0].current.weather[0].icon}@2x.png`
    const curentAvaterStyle = {
      backgroundColor: '#ec6e4cf2',
    }
    return (
      <Item>
        <Card className={classes.card}>
          <CardContent className={classes.cardContentMain}>
            <Typography
              variant="caption"
              component="div"
              textAlign="start"
            >
              В данный момент
            </Typography>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item xs={10} textAlign="start">
                <Grid container>
                  <Typography
                    component="span"
                    variant="h4"
                    flexGrow={1}
                  >
                    {currentTemp}
                  </Typography>
                  <Box
                    component="div"
                    alignItems="self-end"
                    flexGrow={15}
                  >
                    <Typography variant="body2" color="text.secondary">
                      <strong>По ощущениям: </strong>
                      {' '}
                      {feelsLike}
                      {' '}
                      {dataOneCalls[0] && dataOneCalls[0].current.weather[0].description}
                      <br />
                      <strong>Скорость ветра:</strong>
                      {' '}
                      {dataOneCalls[0] && dataOneCalls[0].current.wind_speed}
                      {' '}
                      М/С
                      <br />
                      <strong>Восход:</strong>
                      {' '}
                      {moment.unix(dataOneCalls[0] && dataOneCalls[0].current.sunrise).hours()}
                      :
                      {moment.unix(dataOneCalls[0] && dataOneCalls[0].current.sunrise).minutes()}
                      <br />
                      <strong>Закат:</strong>
                      {' '}
                      {moment.unix(dataOneCalls[0] && dataOneCalls[0].current.sunset).hours()}
                      :
                      {moment.unix(dataOneCalls[0] && dataOneCalls[0].current.sunset).minutes()}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Grid item xs={2}>
                <Stack direction="row" justifyContent="end">
                  <AvatarMain
                    alt="Remy Sharp"
                    src={curentAvater}
                    style={curentAvaterStyle}
                  />
                </Stack>
              </Grid>
            </Grid>
          </CardContent>

        </Card>
        <Grid
          container
          justifyContent="space-between"
        >
          <ItemsDealy />
        </Grid>

      </Item>
    )
  }
  useEffect(() => {
    const reg = /[a-z][a-z0-9]*=\d+(\.\d+)?/g
    const coord = window.location.href.match(reg)
    if (coord) {
      createDetailed(coord[0], coord[1])
    }
  }, [createDetailed])
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Button href="https://denisavilov.github.io/weatherForecast"> На главную </Button>
        <Typography component="h2" className={classes.typographyH2}>
          <strong>Погода на cегодня</strong>
          {' '}
          <strong>{ slug }</strong>
        </Typography>
        <WeatherToDay />
        <br />
        <Typography component="h2" className={classes.typographyH2}>
          <strong>Суточный прогноз на 8 дней</strong>
        </Typography>
        <Grid
          container
          justifyContent="space-between"
          alignSelf="center"
          alignItems="center"
          className={classes.cardDaily}
        >
          {dataOneCalls[0] && dataOneCalls[0].daily.map((el: Daily) => {
            const dealyAvatar = `http://openweathermap.org/img/wn/${el.weather
              .map((item: Weather) => item.icon)}@2x.png`
            return (
              <Grid
                item
                key={el.dt}
              >
                <Card>
                  <CardContent>
                    <Typography component="span">
                      <strong>Дата:</strong>
                      <br />
                      { moment.unix(el.dt).locale('ru').format('dddd') }
                      {' '}
                      { moment.unix(el.dt).date()}
                      .
                      { moment.unix(el.dt).month()}
                    </Typography>
                    <br />
                    <Typography component="span">
                      <strong>Описание:</strong>
                      <br />
                      { el.weather.map((item: Weather) => item.description) }
                    </Typography>
                    <Stack direction="row" spacing={2} justifyContent="center">
                      <Avatar
                        alt="alt"
                        src={dealyAvatar}
                      />
                    </Stack>
                    <Typography component="span">
                      <strong>По ощущениям:</strong>
                      <br />
                      Утром:
                      {' '}
                      {Math.ceil(el.feels_like.morn)}
                      °С
                      <br />
                      Днем:
                      {' '}
                      {Math.ceil(el.feels_like.day)}
                      °С
                      <br />
                      Вечером:
                      {' '}
                      { Math.ceil(el.feels_like.eve) }
                      °С
                      <br />
                      Ночью:
                      {' '}
                      { Math.ceil(el.feels_like.day) }
                      °С
                    </Typography>
                    <br />
                    <Typography component="span">
                      <strong>Скорость ветра:</strong>
                      {' '}
                      {el.wind_speed}
                      {' '}
                      М/С
                    </Typography>
                    <br />
                    <Typography component="span">
                      <strong>Восход:</strong>
                      {' '}
                      {moment.unix(el.sunrise).hours()}
                      :
                      {moment.unix(el.sunrise).minutes()}
                    </Typography>
                    <br />
                    <Typography component="span">
                      <strong>Закат:</strong>
                      {' '}
                      {moment.unix(el.sunset).hours()}
                      :
                      {moment.unix(el.sunset).minutes()}
                    </Typography>
                    <br />
                    <Typography component="span">
                      <strong>Восход луны:</strong>
                      {' '}
                      {moment.unix(el.moonrise).hours()}
                      :
                      {moment.unix(el.moonrise).minutes()}
                    </Typography>
                    <br />
                    <Typography component="span">
                      <strong>Закат луны:</strong>
                      {' '}
                      {moment.unix(el.moonset).hours()}
                      :
                      {moment.unix(el.moonset).minutes()}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </ThemeProvider>
  )
}
type Slug = {
  slug: string
}
const weather = {
  id: 803,
  main: 'Clouds',
  description: 'облачно с прояснениями',
  icon: '04d'
}
type Weather = typeof weather
const daily = {
  dt: 1632560400,
  sunrise: 1632540345,
  sunset: 1632583656,
  moonrise: 1632590280,
  moonset: 1632556920,
  moon_phase: 0.64,
  temp: {
    day: 10.99,
    min: 8.76,
    max: 13.53,
    night: 11.76,
    eve: 13.1,
    morn: 9.31
  },
  feels_like: {
    day: 10.29,
    night: 11.11,
    eve: 12.16,
    morn: 8.7
  },
  pressure: 1008,
  humidity: 82,
  dew_point: 8.04,
  wind_speed: 5.26,
  wind_deg: 290,
  wind_gust: 9.71,
  weather: [
    {
      id: 803,
      main: 'Clouds',
      description: 'облачно с прояснениями',
      icon: '04d'
    }
  ],
  clouds: 75,
  pop: 0.36,
  uvi: 2.3
}
type Daily = typeof daily
const hourly = {
  dt: 1632556800,
  temp: 10.94,
  feels_like: 10.26,
  pressure: 1008,
  humidity: 83,
  dew_point: 8.17,
  uvi: 1.47,
  clouds: 80,
  visibility: 10000,
  wind_speed: 1.97,
  wind_deg: 225,
  wind_gust: 2.6,
  weather: [
    {
      id: 803,
      main: 'Clouds',
      description: 'облачно с прояснениями',
      icon: '04d'
    }
  ],
  pop: 0.04
}
type Hourly = typeof hourly
