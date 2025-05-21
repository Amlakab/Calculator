'use client'

import { useState } from 'react'
import Display from './Display'
import Button from './Button'
import { calculate } from './utils'
import { ButtonValue, CalculatorState } from './types'

export default function Calculator() {
  const [state, setState] = useState<CalculatorState>({
    currentValue: '0',
    previousValue: '',
    operation: '',
    overwrite: true,
  })

  const handleButtonClick = (value: ButtonValue) => {
    setState(prev => calculate(prev, value))
  }

  const buttons: ButtonValue[][] = [
    ['C', '±', '%', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
    ['sin', 'cos', 'tan', '√'],
    ['log', 'ln', 'π', '^'],
    ['(', ')', '!', 'e'],
  ]

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <Display value={state.currentValue} />
      <div className="grid grid-cols-4 gap-1 p-2 bg-gray-50">
        {buttons.flat().map((btn, i) => (
          <Button
            key={i}
            value={btn}
            onClick={handleButtonClick}
            className={`
              ${btn === '=' ? 'col-span-1 bg-blue-600 text-white' : ''}
              ${['÷', '×', '-', '+', '='].includes(btn) ? 'bg-orange-500 text-white' : ''}
              ${['C', '±', '%'].includes(btn) ? 'bg-gray-300' : ''}
              ${!isNaN(Number(btn)) || btn === '.' ? 'bg-gray-200' : ''}
              ${['sin', 'cos', 'tan', '√', 'log', 'ln', 'π', '^', '(', ')', '!', 'e'].includes(btn) ? 'bg-purple-100 text-purple-800' : ''}
            `}
          />
        ))}
      </div>
    </div>
  )
}