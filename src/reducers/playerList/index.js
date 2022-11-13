import { useSelector } from "react-redux"
import { GET_LIST_PLAYER, ADD_TODO, DELETE_TODO, DETAIL_TODO, UPDATE_TODO, DONE_TODO } from "../../actions/playerAction"
const initialState = {
    getListPlayerResult:false,
    getListPlayerLoading:false,
    getListPlayerError:false,

    addTodoResult:false,
    addTodoLoading:false,
    addTodoError:false,

    deleteTodoResult:false,
    deleteTodoLoading:false,
    deleteTodoError:false,

    detailTodoResult: false,

    updateTodoResult:false,
    updateTodoLoading:false,
    updateTodoError:false,

    doneTodoResult:false,
    doneTodoLoading:false,
    doneTodoError:false,
}

const PlayerList = (state = initialState, action) =>{
    
    switch(action.type){
        case GET_LIST_PLAYER :
        return{
            ...state,
            getListPlayerResult : action.payload.data,
            getListPlayerLoading : action.payload.loading,
            getListPlayerError : action.payload.errorMessage
        }

        case ADD_TODO :
        return{
            ...state,
            addTodoResult : action.payload.data,
            addTodoLoading : action.payload.loading,
            addTodoError : action.payload.errorMessage
        }

        case DELETE_TODO :
        return{
            ...state,
            deleteTodoResult : action.payload.data,
            deleteTodoLoading : action.payload.loading,
            deleteTodoError : action.payload.errorMessage
        }
        
        case DETAIL_TODO:
            return{
                ...state,
                detailTodoResult: action.payload.data
            }

        case UPDATE_TODO :
        return{
            ...state,
            updateTodoResult : action.payload.data,
            updateTodoLoading : action.payload.loading,
            updateTodoError : action.payload.errorMessage
        }

        case DONE_TODO :
        return{
            ...state,
            doneTodoResult : action.payload.data,
            doneTodoLoading : action.payload.loading,
            doneTodoError : action.payload.errorMessage
        }

        default:
            return state
    }

        

}

export default PlayerList