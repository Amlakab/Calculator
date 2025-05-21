import { FC } from 'react'

interface DisplayProps {
  value: string
  onBackspace: () => void
}

const Display: FC<DisplayProps> = ({ value, onBackspace }) => {
  return (
    <div className="relative p-4 bg-gray-800 text-right">
      <div className="text-white text-3xl font-mono overflow-x-auto">
        {value}
      </div>
      {/* Backspace button in display */}
      <button
        onClick={onBackspace}
        className="absolute right-2 top-1/2 transform -translate-y-1/2
                  text-gray-300 hover:text-white transition-colors
                  focus:outline-none"
        aria-label="Backspace"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m3-6a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>
  )
}

export default Display