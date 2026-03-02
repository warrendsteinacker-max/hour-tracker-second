import {useReducer} from 'react'

const PostPage = () => {

        const Istate = {
        name: "",
        dep: "",
        error: false
    }

    const reducer = (state, action) => {
        switch(action.type){
            case "name":
                return {...state, name: String(action.payload)}
            case "dep":
                return {...state, dep: String(action.payload)}
            case "error":
                return {...state, error: action.payload}
            default:
                return state
            
        }
    }
 
    const [state, dispatch] = useReducer(reducer, Istate)



    const submitB = async(e) => {
        e.preventDefault()
        try{
            const { error, ...data } = state
            const res = await fetch("http://localhost:3001/gtoB", {method: 'POST', headers: {"Content-Type":"application/json"}, body: JSON.stringify(data)})
            console.log("good")
            dispatch({type: "error", payload: false})
        }
        catch(error){
            console.error(error.message)
            console.log("bad")
            dispatch({type: "error", payload: true})
        }
    }

  
    return (

    <>
    <div style={{display: "grid", justifyContent: "center", alignItems: "center"}}>
    {state.error && <h3>Error Happened Try Again</h3>}
    <form onSubmit={submitB}>
        <input placeholder="Enter title" onChange={(e) => dispatch({type: "name", payload: e.target.value})}/>
        <textarea placeholder="Enter description" onChange={(e) => dispatch({type: "dep", payload: e.target.value})}></textarea>
        <button type="submit">Post</button>
    </form>
    </div>
    </>
  )
}

export default PostPage