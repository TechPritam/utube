import React, { useContext,useState,useEffect } from 'react'
import {useParams} from 'react-router-dom'
import Searchvideocard from '../components/Searchvideocard'
import Sidebar from '../components/Sidebar'
import { Context } from '../context/contextApi'
import { fetchData } from '../utils/api'


export default function Search() {
  const [searchResults, setSearchResults] = useState()
  const {loading,setLoading} = useContext(Context)
  const {searchQuery} = useParams()

  useEffect(() => {
    if(loading) return
    // fetchSearchResults()
    console.log(searchResults);
  }, [searchQuery])
  

  const fetchSearchResults = ()=>{
    setLoading(true)
    fetchData(`search/?q=${searchQuery}`).then((res)=>{
      const { data } = res;
      setSearchResults(data)
      setLoading(false)
    })
  }
  
  return (
    <div className='flex flex-row h-[92%] overflow-hidden'>
      {/* <div className="overflow-y-auto">
      </div> */}
        <Sidebar/>
      <div className="flex flex-1 h-full overflow-y-auto flex-col gap-3">
        {searchResults?.contents?.map((video)=>{
          return(
            <Searchvideocard video={video.video}/>
          )
        })}
      </div>
    </div>
  )
}
