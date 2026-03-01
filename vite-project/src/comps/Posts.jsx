
import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const Posts = () => {

    const nav = useNavigate()
    const [data, setD] = useState([])
    const [E, setE] = useState(false)
    const [L, setL] = useState(false)

    useEffect(() => {
        
        const fetchd = async() => {
            try{
                setL(true)
                const res = await fetch('http://localhost:3001/gtoB')
                if(!res.ok){
                        setE(true)
                        setL(false)
                        return
                }
                const data = await res.json()
                console.log(data)
                console.log(res)
                setD(data)
            }
            catch(error){
                console.error(error.message)
            }
            finally{
                setL(false)
            }
        }
        fetchd()
    }, [])

    const deletep = async(id) => {

        try{
            await fetch(`http://localhost:3001/gtoB/${id}`, {method: 'DELETE', headers: {"Content-Type": "application/json"}})
            const newdata = data.filter((item) => item._id !== id)
            setD(newdata) 
        }
        catch(error){
            setE(true)
        }
    }

    if(L){
        return<h3>...Loading</h3>
    }

    if(E){
        return <h3>There Has Been an Error Refresh The Screen</h3>
    }

  return (
    <>
        {data.length > 0 ? data.map((item) => <div key={item._id} style={{display: 'flex', flexDirection: 'column'}}><h3 style={{textDecoration: "underline"}}>{item.name}</h3><p>{item.dep}</p><button onClick={() => nav(`/edit/${item._id}`)}>Edit Post</button><button onClick={() => deletep(item._id)}>Delete Post</button></div>) : <h3>No Posts</h3>}
    </>
  )
}

export default Posts