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

  return (
    <>
    E ? 
    </>
  )
}

export default Posts