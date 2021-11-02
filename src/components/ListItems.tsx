import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import UpdateIcon from '@mui/icons-material/Update'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/styles'
import { useRef } from 'react'
import { removeCityAction } from '../redux-toolkit'
import { CitysWeather } from '../types'
import { useAddCitys } from '../hooks/addCity.hook'

type ListItems = {
  city: CitysWeather
  date: Date
}
const useStyle = makeStyles({
  avatar: {
    background: '#a9a2a2b3',
  },
})
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const ListItems = () => {
  const classes = useStyle()
  const nodeRef = useRef(null)
  const { removeCityLocal, updateCity } = useAddCitys()
  const dispatch = useDispatch()
  const citysItems = useSelector((state: any) => state.shortForecast)
  return (
    <List
      sx={{ width: '100%', minWidth: 300, bgcolor: 'background.paper' }}
    >
      <TransitionGroup>
        {citysItems.map((value: ListItems) => {
          const labelId = 'checkbox-list-label'
          const desc = `${Math.ceil(value.city.main.temp_max)}°/${Math.ceil(value.city.main.temp_min)}°
              ${value.city.name}
            ${value.city.weather.map((data) => data.description)}`
          const icon = `http://openweathermap.org/img/wn/${value.city.weather
            .map((item) => item.icon)}@2x.png`
          const descS = 'Подробней о погоде.'
          return (
            <CSSTransition
              key={value.city.id}
              timeout={{
                enter: 500,
                exit: 350
              }}
              classNames="item"
              nodeRef={nodeRef}
            >
              <ListItem
                // key={value.city.id}
                ref={nodeRef}
                secondaryAction={(
                  <>
                    <IconButton
                      edge="start"
                      onClick={
                          () => updateCity(value.city.name)
                        }
                    >
                      <UpdateIcon />
                    </IconButton>
                    <IconButton
                      edge="end"
                      onClick={() => {
                        dispatch(removeCityAction({ id: value.city.id }))
                        removeCityLocal(value.city.name)
                        // console.log('value.city.name', value.city.name)
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </>
                  )}
                disablePadding
              >
                <ListItemButton
                  role={undefined}
                  dense
                  component={NavLink}
                  to={`/detailed/${value.city.name}?lat=${value.city.coord.lat}&lon=${value.city.coord.lon}`}
                >
                  <ListItemIcon>
                    <Stack direction="row" spacing={2}>
                      <Avatar
                        alt="Remy Sharp"
                        src={icon}
                        className={classes.avatar}
                      />
                    </Stack>
                  </ListItemIcon>
                  <ListItemText
                    id={labelId}
                    primary={desc}
                    secondary={descS}
                  />
                </ListItemButton>

              </ListItem>
            </CSSTransition>
          )
        })}
      </TransitionGroup>
    </List>

  )
}
