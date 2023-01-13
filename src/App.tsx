import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { QuotePage } from './pages/QuotePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <QuotePage></QuotePage>
    </div>
  )
}

export default App
