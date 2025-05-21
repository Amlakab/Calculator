import { ButtonValue, CalculatorState } from './types'

const factorial = (n: number): number => {
  if (n < 0) return NaN
  if (n === 0 || n === 1) return 1
  let result = 1
  for (let i = 2; i <= n; i++) {
    result *= i
  }
  return result
}

export const calculate = (
  state: CalculatorState,
  buttonValue: ButtonValue
): CalculatorState => {
  if (!isNaN(Number(buttonValue))) {
    return handleNumberInput(state, buttonValue)
  }

  switch (buttonValue) {
    case '⌫':
      if (state.overwrite) return state
      if (state.currentValue.length === 1) {
        return {
          ...state,
          currentValue: '0',
          overwrite: true
        }
      }
      return {
        ...state,
        currentValue: state.currentValue.slice(0, -1)
      }
    case 'C':
      return { currentValue: '0', previousValue: '', operation: '', overwrite: true }
    case '±':
      return {
        ...state,
        currentValue: String(-parseFloat(state.currentValue)),
      }
    case '%':
      return {
        ...state,
        currentValue: String(parseFloat(state.currentValue) / 100),
      }
    case '.':
      return handleDecimalInput(state)
    case '=':
      return handleEquals(state)
    case '÷':
    case '×':
    case '-':
    case '+':
    case '^':
      return handleOperation(state, buttonValue)
    case 'sin':
      return {
        ...state,
        currentValue: String(Math.sin(parseFloat(state.currentValue))),
        overwrite: true,
      }
    case 'cos':
      return {
        ...state,
        currentValue: String(Math.cos(parseFloat(state.currentValue))),
        overwrite: true,
      }
    case 'tan':
      return {
        ...state,
        currentValue: String(Math.tan(parseFloat(state.currentValue))),
        overwrite: true,
      }
    case '√':
      return {
        ...state,
        currentValue: String(Math.sqrt(parseFloat(state.currentValue))),
        overwrite: true,
      }
    case 'log':
      return {
        ...state,
        currentValue: String(Math.log10(parseFloat(state.currentValue))),
        overwrite: true,
      }
    case 'ln':
      return {
        ...state,
        currentValue: String(Math.log(parseFloat(state.currentValue))),
        overwrite: true,
      }
    case 'π':
      return {
        ...state,
        currentValue: state.overwrite ? String(Math.PI) : state.currentValue + Math.PI,
        overwrite: false,
      }
    case 'e':
      return {
        ...state,
        currentValue: state.overwrite ? String(Math.E) : state.currentValue + Math.E,
        overwrite: false,
      }
    case '!':
      return {
        ...state,
        currentValue: String(factorial(parseInt(state.currentValue))),
        overwrite: true,
      }
    case '(':
    case ')':
      return {
        ...state,
        currentValue: state.overwrite ? buttonValue : state.currentValue + buttonValue,
        overwrite: false,
      }
    default:
      return state
  }
}

const handleNumberInput = (state: CalculatorState, buttonValue: ButtonValue): CalculatorState => {
  if (state.overwrite) {
    return {
      ...state,
      currentValue: buttonValue,
      overwrite: false,
    }
  }
  return {
    ...state,
    currentValue: state.currentValue === '0' ? buttonValue : state.currentValue + buttonValue,
  }
}

const handleDecimalInput = (state: CalculatorState): CalculatorState => {
  if (state.overwrite) {
    return {
      ...state,
      currentValue: '0.',
      overwrite: false,
    }
  }
  if (state.currentValue.includes('.')) {
    return state
  }
  return {
    ...state,
    currentValue: state.currentValue + '.',
  }
}

const handleOperation = (state: CalculatorState, operation: string): CalculatorState => {
  if (state.previousValue && state.operation && !state.overwrite) {
    const result = performCalculation(
      parseFloat(state.previousValue),
      parseFloat(state.currentValue),
      state.operation
    )
    return {
      currentValue: String(result),
      previousValue: String(result),
      operation,
      overwrite: true,
    }
  }
  return {
    ...state,
    previousValue: state.currentValue,
    operation,
    overwrite: true,
  }
}

const handleEquals = (state: CalculatorState): CalculatorState => {
  if (!state.operation || !state.previousValue) return state

  const result = performCalculation(
    parseFloat(state.previousValue),
    parseFloat(state.currentValue),
    state.operation
  )
  return {
    currentValue: String(result),
    previousValue: '',
    operation: '',
    overwrite: true,
  }
}

const performCalculation = (firstOperand: number, secondOperand: number, operation: string): number => {
  switch (operation) {
    case '+':
      return firstOperand + secondOperand
    case '-':
      return firstOperand - secondOperand
    case '×':
      return firstOperand * secondOperand
    case '÷':
      return firstOperand / secondOperand
    case '^':
      return Math.pow(firstOperand, secondOperand)
    default:
      return secondOperand
  }
}