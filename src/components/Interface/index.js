import React from 'react'
import { Title, Wrapper } from './styled'

const getValue = ({ entry, sum }) => {
  if (entry === '') {
    if (sum === '') {
      return '0';
    }
    return sum;
  }
  return entry;
}

const getInterface = ({ entry, sum }) => {
  const value = getValue(({ entry, sum }));
  const splited = value.split('.');
  const firstPart = splited[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  const secondPart = splited.length > 1 ? ',' + splited[1] : ''
  return firstPart + secondPart
}

const Interface = ({ entry, sum }) => {
  const title = getInterface({ entry, sum})
  return (
    <Wrapper>
      <Title>{ title }</Title>
    </Wrapper>
  )
}

export default React.memo(Interface)