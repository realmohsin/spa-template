import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import theme from './styles/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='*' component={NotFound} />
      </Switch>
    </ThemeProvider>
  )
}

export default App
