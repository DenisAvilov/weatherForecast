/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useRoutes } from './routes'

export const App = () => {
  const router = useRoutes()
  return (
    <>
      { router }
    </>
  )
}
