import React, {useEffect, useState} from 'react'
import UserTable from '../components/UserTable'
import SearchBar from '../components/SearchBar'
import './Dashboard.css'

function Dashboard() {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  const filteredUsers = users.filter(
    user =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <div className="dashboard">
      <h1 className="heading">User Directory</h1>
      <SearchBar setSearch={setSearch} />
      <UserTable users={filteredUsers} />
    </div>
  )
}

export default Dashboard
