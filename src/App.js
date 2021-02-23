
import AppHeader from './AppHeader'
import Button from './Button'
import { useState } from 'react'

export default function App() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div>
      <AppHeader title={'Hi Hacker!'} subtitle={"How's it going?"} />
      <Button onClick={() => setIsVisible(!isVisible)}>Button</Button>
    </div>
  )
}



