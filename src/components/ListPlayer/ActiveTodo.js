
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPlayerList, deleteTodo, detailTodo, updateDone, unDone } from '../../actions/playerAction';
import { formatDistance, subDays } from 'date-fns'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import './list.css'
import { useState } from 'react'


function ActiveTodo() {

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
      <h3>Active Todo List</h3>
      <div className="pages-btn">
      <Link to={'/active'}>
      <Button variant="dark">ACTIVE</Button> 
      </Link>
      <Link to={'/'}>
      <Button variant="dark">ALL</Button> 
      </Link>
      <Link to={'/done'}>
      <Button variant="dark">DONE</Button> 
      </Link>
      </div>
      {getListPlayerResult ? (
        getListPlayerResult.map((todo)=>{
          if(todo.isDone === false){
          return(
            <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className='container-list' key={todo.id}>
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
            </motion.div>
           
          )
      }})
        
      ): getListPlayerLoading ? (
       <p>Loading...</p>
      ): (
        <p>{getListPlayerError ? getListPlayerError : "data kosong"}</p>
      )}
    </div>
    
  )
}

export default ActiveTodo