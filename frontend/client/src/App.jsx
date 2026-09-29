import { useState } from 'react'

function App() {
  const [email, setEmail] = useState('')

  // API URL
  const apiUrl = import.meta.env.VITE_API_URL;
  console.log(apiUrl)

  return (
    <>
      <h1>hello world</h1>
    </>
  )
}

export default App
