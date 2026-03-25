import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import './UserDetail.css'

function UserTable({users}) {
  const [sortField, setSortField] = useState('')
  const [asc, setAsc] = useState(true)
  const history = useHistory()

  const handleSort = field => {
    setAsc(!asc)
    setSortField(field)
  }

  const getValue = (user, field) => {
    return field === 'company' ? user.company.name : user[field]
  }

  const sortedUsers = [...users].sort((a, b) => {
    if (!sortField) return 0

    const valA = getValue(a, sortField).toLowerCase()
    const valB = getValue(b, sortField).toLowerCase()

    return asc ? valA.localeCompare(valB) : valB.localeCompare(valA)
  })

  return (
    <table className="user-table">
      <thead>
        <tr>
          <th onClick={() => handleSort('name')}>Name ⬍</th>
          <th>Email</th>
          <th>Phone</th>
          <th onClick={() => handleSort('company')}>Company ⬍</th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map(user => (
          <tr key={user.id} onClick={() => history.push(`/user/${user.id}`)}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.company.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default UserTable
