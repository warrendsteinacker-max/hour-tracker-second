import React, {useState, useEffect} from 'react'

const Posts = () => {

    const [data, setD] = useState('')
    const [E, setE] = useState(false)

    useEffect(() => {
        
        const fetchd = async() => {
            try{
                const res = await fetch('http://localhost:3001/gtoB')
                if(!res.ok){
                        setE(true)
                }
                const data = await res.json()
                setD(data)
            }
            catch(error){
                console.error(error.message)
            }
            fetchd()
        }
    }, [])

    if(E){
        return <h3>There Has Been an Error</h3>
    }

  return (
    <>
        {data ? data.map((item) => <div key={item._id} style={{display: 'flex', fleDirection: 'column'}}><h3>{item.name}</h3><textarea>{item.dep}</textarea></div>) : <h3>No Posts</h3>}
    </>
  )
}

export default Posts