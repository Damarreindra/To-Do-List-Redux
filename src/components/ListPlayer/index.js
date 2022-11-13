
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPlayerList, deleteTodo, detailTodo, updateDone, unDone } from '../../actions/playerAction';
import { formatDistance, subDays } from 'date-fns'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, NavLink } from "react-router-dom"
import './list.css'
import { useState } from 'react'


function ListPlayer() {

  const {getListPlayerResult, getListPlayerLoading, getListPlayerError, deleteTodoResult, doneTodoResult} = useSelector((state)=>state.PlayerReducer)
    const dispatch = useDispatch();
 
    useEffect(()=>{
       dispatch(getPlayerList())
    },[dispatch])

    useEffect(()=>{
      if(deleteTodoResult){
          dispatch(getPlayerList());
      }
  },[deleteTodoResult, dispatch])

  useEffect(()=>{
    if(updateDone){
        dispatch(getPlayerList());
    }
},[doneTodoResult, dispatch])

useEffect(()=>{
  if(unDone){
      dispatch(getPlayerList());
  }
},[doneTodoResult, dispatch])

  return (
    
    <div>
      <h3>Todo List</h3>
      <div className="pages-btn">
      <NavLink to={'/active'}>
      <Button variant="dark">ACTIVE</Button> 
      </NavLink>
      <Link to={'/'}>
      <Button variant="dark">ALL</Button> 
      </Link>
      <Link to={'/done'}>
      <Button variant="dark">DONE</Button> 
      </Link>
      </div>
      {getListPlayerResult ? (
        getListPlayerResult.map((todo)=>{
          return(
            <div className='container-list' key={todo.id}>
              <Form.Check 
                className='check'
                type="switch"
                id="custom-switch"
                checked={todo.isDone}
                onChange={()=>
                {if(todo.isDone===false){
                  dispatch(updateDone(todo.id))
                }else{
                  dispatch(unDone(todo.id))
                } } 
                }
              /> 
              
              <div className='list'>
                {todo.isDone ? <h3><s>{todo.todo}</s></h3> : <h3>{todo.todo}</h3> } - {""}
                
              {formatDistance(subDays(todo.createdAt, 0), new Date(), { addSuffix: true })}  - {""}
                <div className="btns">
              <IconButton aria-label="delete" size="small" color="secondary">
                <DeleteIcon fontSize="small" 
                onClick={() => dispatch(deleteTodo(todo.id))}
                />
              </IconButton> 
              <IconButton aria-label="edit" size="small" color="secondary">
                <EditIcon fontSize="small" 
                onClick={() => dispatch(detailTodo(todo))}
                />
              </IconButton>
              </div>
              </div>
            </div>
           
          )
        })
      ): getListPlayerLoading ? (
       <p>Loading...</p>
      ): (
        <p>{getListPlayerError ? getListPlayerError : "data kosong"}</p>
      )}
    </div>
    
  )
}

export default ListPlayer