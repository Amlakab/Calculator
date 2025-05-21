import { FC } from 'react'

interface ButtonProps {
  value: string
  onClick: (value: string) => void
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