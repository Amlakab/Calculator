import { FC } from 'react'

interface DisplayProps {
  value: string
}

const Display: FC<DisplayProps> = ({ value }) => {
  return (
    <div className="p-6 bg-gradient-to-r from-gray-800 to-gray-900 text-right">
      <div className="text-white text-4xl font-mono overflow-x-auto whitespace-nowrap scrollbar-thin">
        {value}
      </div>
    </div>
  )
}

export default Display