import React from 'react'

const useCalc = () => {
  const [sum, setSum] = React.useState('')
  const [entry, setEntry] = React.useState('')
  const [operator, setOperator] = React.useState(null)

  const handleNumber = value => {
    const newEntry = entry + value
    if (newEntry.length < 18) {
      setEntry(newEntry)
    } 
  }

  const handleOperator = value => {
    if (sum === '') {
      setSum(entry)
      setEntry('')
    } else {
      handleSum()
    }
    setOperator(value)
  }

  const handleSum = () => {
    const result = calcSum() + ''
    setSum(result)
    setEntry('')
  }

  const handleDel = () => {
    const newEntry = entry.slice(0, -1)
    setEntry(newEntry)
  }

  const handleClearEntry = () => {
    setEntry('')
  }

  const handleClear = () => {
    setEntry('')
    setSum('')
    setOperator(null)
  }

  const handleInvert = () => {
    if (entry === '' && sum !== '') {
      setSum(invertSignal(sum))
    } else if (entry !== '') {
      setEntry(invertSignal(entry))
    }
  }

  const handleSymbol = () => {
    if (entry.indexOf('.') === -1) {
      handleNumber('.')
    }
  }

  const invertSignal = value => {
    const floatedNumber = parseFloat("" + value) * -1
    return '' + floatedNumber
  }

  const calcSum = () => {
    const floatedSum = parseFloat(sum)
    const floatedEntry = parseFloat(entry)
    switch (operator) {
      case '/':
        return floatedSum / floatedEntry
      case '*':
        return floatedSum * floatedEntry
      case '+':
        return floatedSum + floatedEntry
      case '-': 
        return floatedSum - floatedEntry
      default:
        return floatedSum
    }
  }
  
  const actions = {
    'number': handleNumber,
    'operator': handleOperator,
    'sum': handleSum,
    'del': handleDel,
    'ce': handleClearEntry,
    'c': handleClear,
    'invert': handleInvert,
    'symbol': handleSymbol
  }

  return {
    sum,
    entry,
    actions
  }
}

export default useCalc; 