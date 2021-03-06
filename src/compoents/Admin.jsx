import React from 'react'
import AdminMember from './AdminMember'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import AdminLogin from './AdminLogin'


export default function Admin({ members, searchValue, setUpdate }) {

  const navigate = useNavigate()

  const logout = async () => {
    const res = await fetch('https://keneset-api.herokuapp.com/user/logout', {
      method: "delete",
      credentials: "include"
    })
    const data = await res.json()
    if (data.err) {
      alert(data.err)
    } else {
      localStorage.removeItem('name')
      navigate('/login')
    }

  }

  const goTo = () => {
    navigate('/tara-admin/addnewmember')
  }

  const goTo1 = () => {
    navigate(`/tara-admin/addnewmembers`)
  }

  return (
    <div>
      {
        !localStorage.name ?
          <>
            <AdminLogin />
          </>
          :
          <>
            <div className='infoforadmin' dir="rtl" >
              <div>
                <h1>馃榾 砖诇讜诐 专讘 </h1>
                <h3>
                  驻讛 讗驻砖专 诇注讚讻谉 讜诇讛讜住讬祝 讞讘专 讻谞住转
                </h3>
                <h4>
                  - 讻讚讬 诇注讚讻谉 讞讘专 讻谞住转 讬砖 诇诇讞讜抓 注诇 讛转诪讜谞讛 讜诇注讚讻谉 讗转 讛砖讚讜转 讛专诇讜讜谞讟讬诐
                </h4>
                <h4>
                  - 讻讚讬 诇讛讜住讬祝 讞讘专 讻谞住转 讞讚砖, 讬砖 诇诇讞讜抓 注诇 讛讻驻转讜专 "讛讜住祝 讞讘专 讻谞住转 讞讚砖"
                </h4>
              </div>
              <div className='btnadmindiv'>
                <Button className='addnewuserbtn' variant="primary" onClick={goTo} >讛讜住祝 讞讘专 讻谞住转 讞讚砖</Button>
                <Button className='addnewuserbtn' variant="primary" onClick={goTo1} >讛讜住祝 专砖讬诪讛 砖诇 讞讘专讬 讻谞住转</Button>
                <Button variant="primary" onClick={logout}>Logout</Button>
              </div>
            </div>
            <AdminMember members={members} searchValue={searchValue} setUpdate={setUpdate} />
          </>
      }
    </div>
  )
}
