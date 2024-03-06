import React from 'react'
import './main-page.scss'
import { ItemCardList, Banner } from './components'

const MainPage = () => {
  return (
    <main>
      <Banner />
      <ItemCardList />
    </main>
  )
}

export default MainPage
