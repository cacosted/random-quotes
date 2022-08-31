import { Home } from '../../pages/Home'
import { Author } from '../../pages/Author'
import { NotFound } from '../../pages/NotFound'
import { Switch, Route } from 'wouter'
export const App = () => {
  return (
    <Switch>
      <Route path='/' component={Home} />
      <Route path='/author/:name' component={Author} />
      <Route><NotFound /></Route>
    </Switch>
  )
}
