import Calculator from './components/Calculator'

export default function CalculatorPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-100">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Scientific Calculator
        </h1>
        <Calculator />
      </div>
    </main>
  )
}