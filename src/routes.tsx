import { Redirect, Route, Switch } from 'react-router-dom'
import { DetailForecast } from './pages/DetailForecast';
import { ShortForecast } from './pages/ShortForecast';

export const useRoutes = (): JSX.Element => (
  <Switch>
    <Route path="/" exact>
      <ShortForecast />
    </Route>
    <Route path="/detail/:slug">
      <DetailForecast />
    </Route>
    <Redirect to="/" />
  </Switch>
)
