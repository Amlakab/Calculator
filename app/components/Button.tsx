import { FC } from 'react'
import { ButtonValue } from './types'

interface ButtonProps {
  value: ButtonValue
  onClick: (value: ButtonValue) => void
  className?: string
}

const Button: FC<ButtonProps> = ({ value, onClick, className }) => {
  return (
    <button
      onClick={() => onClick(value)}
      className={`
        h-16 text-xl font-medium rounded-md transition-colors
        hover:bg-opacity-90 focus:outline-none focus:ring-2
        focus:ring-offset-2 focus:ring-blue-500 ${className}
      `}
    >
      {value}
    </button>
  )
}

export default Button