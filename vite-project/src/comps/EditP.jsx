import { useParams } from "react-router-dom"
import {useReducer} from "react"



const EditP = ({data}) => {


    const {id} = useParams()

    const item = data?.find((i) => i._id == id)

    if(!item){
        return <h3>Loading...</h3>
    }

    const Istate = {
        name: item?.name || "",
        dep: item?.dep || "",
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

    const submiteB = async(e) => {
        e.preventDefault()
        try{
            const { error, ...updatedData } = state
            await fetch(`http://localhost:3001/gtoB/${id}`, {method: "PUT", headers: {"Content-Type":"application/json"}, body: JSON.stringify(updatedData)})
            dispatch({type: "error", payload: false})
        }
        catch(error){
            console.error(error.message)
            console.log("bad")
            dispatch({type: "error", payload: true})
        }
    }

  return (
    <form onSubmit={submiteB}>
        <div style={{display: "flex", flexDirection: "column"}}>
        {state.error && <h3>Error Happened Try Again</h3>}
        <input value={state.name} onChange={(e) => dispatch({type: "name", payload: e.target.value})}/>
        <textarea value={state.dep} onChange={(e) => dispatch({type: "dep", payload: e.target.value})}/>
        <button type="submit">Edit Post</button>
        </div>
    </form>
  )
}

export default EditP