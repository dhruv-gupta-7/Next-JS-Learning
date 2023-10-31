async function getUsersList() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`, { cache: 'no-store' })  // "{ cache: 'no-store' }" allows to rener this page on server side instead of static rendering 
  const usersList = await res.json()
 
  return usersList
}
 
export default async function Users() {
  const usersList = await getUsersList()
 
  return (
    <ul>
      {usersList.map((usersList) => (
        <h2 key={usersList.id}>Name: {usersList.name}</h2>
      ))}
    </ul>
  )
}



