const store1 = createStore({
    D: [],
    L: false,
    E: false,
    name: "",
    title: "",
    descript: "",
    setD: action((state, payload) => state.D = payload),
    setE: action((state, payload) => state.E = payload),
    setL: action((state, payload) => state.L = payload),
    setName: action((state, payload) => state.name = payload),
    setTitle: action((state, payload) => state.title = payload),
    setDescript: action((state, payload) => state.descript = payload),
    fetchd: thunk(async(actions) => {
        actions.setL(true)
            try{
                const res = await fetch('url')

                if(!res.ok){
                    throw new Error('response failed')
                }

                const data = await res.json()

                actions.setD(data)
            }
            catch(error){
                actions.setE(true)
                console.error(error.message)
            }
            finally{
                actions.setL(false)
            }
    }),
    makePost: thunk(async(actions, helper) => {
        try{

            const data = helper.getState().D
            const name = helper.getState().name
            const dep = helper.getState().descript
            const title = helper.getState().title

            const res = await fetch('url', {method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify({name, dep, title})})

            if(!res.ok){
                throw new Error('response failed')
            }

            actions.setD([...data, {name, dep, title}])
            actions.setE(false)
        }
        catch(error){
            actions.setE(true)
            console.error(error.message)
        }
    }),
    upDateP: thunk((actions, payload, helper) => {
        try{
            const data = helper.getState().D
        }
        catch(error){
            console.e