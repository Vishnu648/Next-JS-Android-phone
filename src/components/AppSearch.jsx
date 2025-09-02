function AppSearch({ search }) {

  const handleSearch = (value) => {
    search(value)
  }

  return (
    <input type="text" placeholder='Search Apps' className='w-full ml-2' onChange={(e) => handleSearch(e.target.value)} />
  )
}

export default AppSearch