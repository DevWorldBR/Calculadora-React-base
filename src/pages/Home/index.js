import React from 'react'
import useCalc from 'hooks/useCalc';
import Interface from 'components/Interface'
import Keyboard from 'components/Keyboard'
import { Main } from './styled'

const Home = () => {
  const { sum, entry, actions } = useCalc();
  return (
    <Main>
      <Interface entry={entry} sum={sum} />
      <Keyboard actions={actions} />
    </Main>
  )
}

export default Home