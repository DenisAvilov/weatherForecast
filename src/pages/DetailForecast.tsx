import React, { useEffect } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'
import { NavLink, useParams } from 'react-router-dom'
import Fab from '@material-ui/core/Fab'
import NavigationIcon from '@material-ui/icons/Navigation'
import { useDispatch, useSelector } from 'react-redux'
import {
  Card,
  CardContent,
  Grid,
  ImageList, ImageListItem, ImageListItemBar
} from '@material-ui/core'
import { CitysWeather, OneCall } from '../types'
import { useHttp } from '../hooks/http.hook'
import { useCitys } from '../hooks/citys.hook'
import {
  addOneCallActionCreator,
  removeOneCallActionCreator
} from '../redux-toolkit'
import './detailForecast.css'

const useStyles = makeStyles({
  fullWidth: {
    textAlign: 'center',
  },
  button: {
    height: '40px',
  },
  buttom: {
    marginBottom: '40px',
  },
  navlink: {
    textDecoration: 'none',
  },
  backgroundIcon: {
    background: '#9fa6ab8a',
    textAlign: 'center',
    textTransform: 'capitalize',
    marginRight: '20px',
  },
  backgroundImg: {
    background: '#9fa6ab8a',
    textAlign: 'center',
    textTransform: 'capitalize',
  }
})

type Slug = {
  slug: string
}

export const DetailForecast = (): JSX.Element => {
  const classes = useStyles()
  const { checkCity } = useCitys()
  const distpath = useDispatch()
  const { error, request } = useHttp()
  const resOneCall = useSelector((state: any) => state.oneCall)
  const city = useSelector((state: any) => state.shortForecast)
  const { slug } = useParams<Slug>()
  const rez = city.find((el:CitysWeather) => el.name === slug)
  useEffect(() => {
    if (rez) {
      // eslint-disable-next-line max-len
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
      const oneCall = async (lonc: number, latc: number) => {
        const response = await request(
          // eslint-disable-next-line max-len
          `https://api.openweathermap.org/data/2.5/onecall?lat=${latc}&lon=${lonc}&units=metric&lang=ru`
        )
        if (response) {
          const test = resOneCall.filter((el: any) => el.lat !== rez.coord.lat)
          distpath(removeOneCallActionCreator(test))
          distpath(addOneCallActionCreator(response))
        }
      }
      oneCall(rez.coord.lon, rez.coord.lat)
    }
  }, [rez, request, error, distpath, checkCity])

  const feelsLike = resOneCall.map((el: OneCall) => (
    <>
      {el.current.weather.map((weathers) => (

        <CardContent>
          <Grid
            container
            alignItems="center"
            justifyContent="flex-start"
            className={classes.buttom}
          >
            <ImageListItem className={classes.backgroundIcon}>
              <ImageListItemBar position="below" title={weathers.description} />
              <img
                src={`http://openweathermap.org/img/wn/${weathers.icon}@2x.png`}
                srcSet={`http://openweathermap.org/img/wn/${weathers.icon}@2x.png`}
                alt={weathers.description}
                loading="lazy"
              />
            </ImageListItem>
            <Typography
              align="left"
              variant="h6"
              component="span"
              gutterBottom
            >
              { el.timezone}
              <br />
              По ощущениям:
              {' '}
              { el.current.feels_like}
              &deg;
              <br />
              Влажность:
              {' '}
              { el.current.humidity}
              {' '}
              %
              <br />
              Облачность:
              {' '}
              { el.current.clouds}
              {' '}
              %
              <br />
              Скорость ветра:
              {' '}
              { el.current.wind_speed}
              м/с
            </Typography>
          </Grid>
        </CardContent>

      ))}
    </>
  ))
  const Hourly = resOneCall.map((el: OneCall) => (
    <Grid
      container
      alignItems="center"
      justifyContent="space-around"
      spacing={8}
    >
      {el.hourly.map((ell: any) => (
        <Grid item>
          <Card sx={{ minWidth: 275, maxWidth: 300 }}>
            <CardContent>
              {ell.weather.map((els: any) => (
                <ImageList variant="masonry" className={classes.backgroundImg}>
                  <ImageListItem cols={1} key={els.id}>
                    <img
                      src={`http://openweathermap.org/img/wn/${els.icon}@2x.png`}
                      srcSet={`http://openweathermap.org/img/wn/${els.icon}@2x.png`}
                      alt={els.description}
                      loading="lazy"
                    />
                    <ImageListItemBar position="below" title={els.description} />
                  </ImageListItem>
                </ImageList>
              ))}
              Температура:
              { ell.temp }
              &deg;
              <br />
              По ощущениям:
              { ell.feels_like}
              &deg;
              <br />
              Облачность:
              { ell.clouds}
              %
            </CardContent>
          </Card>
        </Grid>
      ))}

    </Grid>

  ))
  return (
    <Container maxWidth="xl">
      <NavLink to="/" className={classes.navlink}>
        <Fab variant="extended">
          <NavigationIcon />
          На главную
        </Fab>
      </NavLink>
      <Typography
        className={classes.fullWidth}
        variant="h2"
        component="div"
        gutterBottom
      >
        Подробно о погоде
      </Typography>
      {feelsLike}
      {Hourly}
    </Container>
  )
}
