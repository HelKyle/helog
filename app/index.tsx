import dva from 'dva'
import React, { Fragment } from 'react'
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader'
import '@/styles/index.less'
import App from '@/App'
import { createHashHistory } from 'history'
import { initRendererTheme } from './lib/theme'

const app = dva({
  history: createHashHistory()
})

app.model(require('@/store/calender').default)

app.router(({ history }: any) => (
  <AppContainer>
    <App history={history} />
  </AppContainer>
))

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer

document.addEventListener('DOMContentLoaded', () => {
  initRendererTheme()
  app.start('#root')
})
