// @ts-nocheck
import React from 'react'
import ReactDOM from 'react-dom/client'
import MyRouter from './components/Router/MyRouter'
import './reset.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <MyRouter />
  </BrowserRouter>,
)
