import './fake-requests'
import React from 'react'
import { App } from './App'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import { ProfileProvider } from './providers/profile'

const GlobalStyleComponent = createGlobalStyle`
* {
  margin: 0px;
  padding: 0px;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  background-color: rgb(250, 250, 250);
  overflow-x: hidden;
}`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyleComponent />
    <ProfileProvider>
      <App />
    </ProfileProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
