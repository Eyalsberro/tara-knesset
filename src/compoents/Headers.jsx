import { LogoDev } from '@mui/icons-material'
import React from 'react'
import { Form, FormControl } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


export default function Headers({ searchValue,setSearchValue }) {

  const navigate = useNavigate()
  



  const goTo = (des) => {
    navigate('/' + des)
  }

  return (
    <div className='header'>
      <div className="d-flex">
        <Form >
          <FormControl
            onChange={(e) => setSearchValue(e.target.value)}
            type="search"
            placeholder="חיפוש מפלגה, חבר כנסת"
            value={searchValue}
            className="me-2"
            aria-label="Search"
          />
        </Form>
      </div>
      <div className='logo'>
        <h5 onClick={() => goTo("contactus")}>צור קשר</h5>
        <h5 onClick={() => goTo("tara-admin")}>מנהל טרה</h5>
        <img src="https://i.ibb.co/HPpJqPp/logo.png" alt="" onClick={() => goTo("")} />
      </div>
    </div>
  )
}
