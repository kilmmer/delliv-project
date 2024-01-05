import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [fetchTest, setFetchTest] = useState<string>('')

  useEffect(() => {
    fetch('http://localhost:3000/api/timeNow').then((res) => res.text()).then((body) => setFetchTest(body))
  })

  return (
    <>
      <div>result: {fetchTest}</div>
      
    </>
  )
}

export default App
