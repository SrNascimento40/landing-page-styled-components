import { useState } from 'react'
import { Title } from './styles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Title backgroundColor={"gray"}>
        Vai Corinthians!!! <span>Esta noite, teremos que ganhar!!</span>
      </Title>
    </div>
  )
}

export default App
