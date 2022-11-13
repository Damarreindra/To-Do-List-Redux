import axios from "axios"

export const GET_LIST_PLAYER = "GET_LIST_PLAYER"
export const ADD_TODO = "ADD_TODO"
export const DELETE_TODO = "DELETE_TODO"
export const DETAIL_TODO = "DETAIL_TODO"
export const UPDATE_TODO = "UPDATE_TODO"
export const DONE_TODO = "DONE_TODO"

export const getPlayerList = ()=>{
    return(dispatch)=>{
        //loading dispatch
        dispatch({
            type:GET_LIST_PLAYER,
            payload:{
                loading:true,
                data:false,
                errorMessage:false
            }
        })

        axios({
            method:"GET",
            url:"https://63686402edc85dbc84e5d542.mockapi.io/todos",
            timeout:120000
        })
        .then((res)=>{
            dispatch({
                type:GET_LIST_PLAYER,
                payload:{
                    loading:false,
                    data:res.data,
                    errorMessage:false
                }
            })
        })
        .catch((err)=>{
            dispatch({
                type:GET_LIST_PLAYER,
                payload:{
                    loading:false,
                    data:false,
                    errorMessage:err.message
                }
            })
        })
    }
}

export const addTodo = (data)=>{
    return(dispatch)=>{
        //loading dispatch
        dispatch({
            type:ADD_TODO,
            payload:{
                loading:true,
                data:false,
                errorMessage:false
            }
        })

        axios({
            method:"POST",
            url:"https://63686402edc85dbc84e5d542.mockapi.io/todos",
            timeout:120000,
            data: data
        })
        .then((res)=>{
            dispatch({
                type:ADD_TODO,
                payload:{
                    loading:false,
                    data:res.data,
                    errorMessage:false
                }
            })
        })
        .catch((err)=>{
            dispatch({
                type:ADD_TODO,
                payload:{
                    loading:false,
                    data:false,
                    errorMessage:err.message
                }
            })
        })
    }
}

export const deleteTodo = (id)=>{
    return(dispatch)=>{
        //loading dispatch
        dispatch({
            type:DELETE_TODO,
            payload:{
                loading:true,
                data:false,
                errorMessage:false
            }
        })

        axios({
            method:"DELETE",
            url:"https://63686402edc85dbc84e5d542.mockapi.io/todos/"+id,
            timeout:120000,
        })
        .then((res)=>{
            dispatch({
                type:DELETE_TODO,
                payload:{
                    loading:false,
                    data:res.data,
                    errorMessage:false
                }
            })
        })
        .catch((err)=>{
            dispatch({
                type:DELETE_TODO,
                payload:{
                    loading:false,
                    data:false,
                    errorMessage:err.message
                }
            })
        })
    }
}

export const detailTodo = (data) =>{
    return(dispatch) => {
        dispatch({
            type: DETAIL_TODO,
            payload:{
                data: data
            }
        })
    }
}


export const updateTodo = (data)=>{
    return(dispatch)=>{
        //loading dispatch
        dispatch({
            type:UPDATE_TODO,
            payload:{
                loading:true,
                data:false,
                errorMessage:false
            }
        })

        axios({
            method:"PUT",
            url:"https://63686402edc85dbc84e5d542.mockapi.io/todos/"+data.id,
            timeout:120000,
            data: data
        })
        .then((res)=>{
            dispatch({
                type:UPDATE_TODO,
                payload:{
                    loading:false,
                    data:res.data,
                    errorMessage:false
                }
            })
        })
        .catch((err)=>{
            dispatch({
                type:UPDATE_TODO,
                payload:{
                    loading:false,
                    data:false,
                    errorMessage:err.message
                }
            })
        })
    }
}

export const updateDone = (id) =>{
    return(dispatch)=>{
        //loading dispatch
        dispatch({
            type:DONE_TODO,
            payload:{
                loading:true,
                data:false,
                errorMessage:false
            }
        })

        fetch(`https://63686402edc85dbc84e5d542.mockapi.io/todos/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                isDone: true
            }),
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            },
        })
    .then((res) => res.json())
        .then((res)=>{
            dispatch({
                type:DONE_TODO,
                payload:{
                    loading:false,
                    data:res.data,
                    errorMessage:false
                }
            })
        })
        .catch((err)=>{
            dispatch({
                type:DONE_TODO,
                payload:{
                    loading:false,
                    data:false,
                    errorMessage:err.message
                }
            })
        })
    }
}

export const unDone = (id) =>{
    return(dispatch)=>{
        //loading dispatch
        dispatch({
            type:DONE_TODO,
            payload:{
                loading:true,
                data:false,
                errorMessage:false
            }
        })

        fetch(`https://63686402edc85dbc84e5d542.mockapi.io/todos/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                isDone: false
            }),
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            },
        })
    .then((res) => res.json())
        .then((res)=>{
            dispatch({
                type:DONE_TODO,
                payload:{
                    loading:false,
                    data:res.data,
                    errorMessage:false
                }
            })
        })
        .catch((err)=>{
            dispatch({
                type:DONE_TODO,
                payload:{
                    loading:false,
                    data:false,
                    errorMessage:err.message
                }
            })
        })
    }
}