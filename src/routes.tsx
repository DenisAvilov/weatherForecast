import { Redirect, Route, Switch } from 'react-router-dom'
import { Alert } from './components/Alert'
import { DetailForecast } from './pages/DetailForecast'
import { ShortForecast } from './pages/ShortForecast'

export const useRoutes = (): JSX.Element => (
  <>
    <Alert />
    <Switch>
      <Route path="/" exact>
        <ShortForecast />
      </Route>
      <Route
        path="/detailed/:slug"
        render={() => <DetailForecast />}
      />
      <Redirect to="/" />
    </Switch>
  </>
)
