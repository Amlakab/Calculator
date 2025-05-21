import { FC } from 'react'

interface DisplayProps {
  value: string
}

const Display: FC<DisplayProps> = ({ value }) => {
  return (
    <div className="p-4 bg-gray-800 text-right">
      <div className="text-white text-3xl font-mono overflow-x-auto">
        {value}
      </div>
    </div>
  )
}

export default Display