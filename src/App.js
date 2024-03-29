import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Headers from './compoents/Headers'
import Main from './compoents/Main'

export default function App() {

  const [members, setMembers] = useState([])
  const [searchValue, setSearchValue] = useState("")
  const [update, setUpdate] = useState(true)
  const [loding, setLoding] = useState(false)


  useEffect(() => {

    setTimeout(async () => {
      const res = await fetch(`https://tara-api-29yt.onrender.com/members`, {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
        credentials: "include"
      })
      const data = await res.json();
      if (data.err) {
        alert(data.err)
      } else {
        setMembers(data)
        setLoding(true)
      }
    }, 100)

  }, [update])

  return (
    <div>
      <Router>
        <Headers members={members} setSearchValue={setSearchValue} searchValue={searchValue} />
        <Main members={members} searchValue={searchValue} loding={loding} setUpdate={setUpdate} />
      </Router>
    </div>
  )
}
