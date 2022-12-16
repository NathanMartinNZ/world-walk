import { useEffect } from 'react'
import { useVideoStore } from '../store/store'


function Menu() {
  const { setInitialFilterValues, setFilteredVideos } = useVideoStore()
  const filterValues = useVideoStore((state) => state.filterValues)

  useEffect(() => {
    setInitialFilterValues()
  }, [])

  console.log(filterValues)

  const handleFormChange = (e:any) => {
    const filterName = e.target.name
    const filterValue = e.target.value

    setFilteredVideos(filterName, filterValue)
  }

  return (
    <aside className="flex flex-col absolute w-1/6 ml-6 my-6 inset-0 flex z-10 bg-slate-300">
      <h3>Menu</h3>
      <h3>Filters</h3>
      <form className="w-full max-w-sm" onChange={(e) => handleFormChange(e)}>
        <div className="inline-block relative">
          <label>Country:</label>
          <select name="country" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option key="All" value="All">All</option>
            {filterValues && filterValues.countries && filterValues.countries.map((country:string) => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </form>
    </aside>
  )
}

export default Menu