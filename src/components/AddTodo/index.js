import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, getPlayerList, updateTodo } from '../../actions/playerAction'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Form from 'react-bootstrap/Form';



function AddTodo() {
    const [todo, setTodo] = useState("");
    const [id, setId] = useState("");
    const [isDone, setIsDone] = useState(false)

    const createdAt = Date.now()
    const { addTodoResult, detailTodoResult, updateTodoResult } = useSelector((state)=>state.PlayerReducer)
    const dispatch = useDispatch()
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(id){
          dispatch(updateTodo({todo: todo, createdAt, id: id}))
        }else{
          dispatch(addTodo({todo: todo, createdAt, isDone: isDone}))
        }
        
    }

    useEffect(()=>{
        if(addTodoResult){
            dispatch(getPlayerList());
            setTodo("")
        }
    },[addTodoResult, dispatch])

    useEffect(()=>{
      if(detailTodoResult){
         setTodo(detailTodoResult.todo);
         setId(detailTodoResult.id)
      }
  },[detailTodoResult, dispatch])

  useEffect(()=>{
    if(detailTodoResult){
       setTodo(detailTodoResult.todo);
       setId(detailTodoResult.id)
    }
},[detailTodoResult, dispatch])

  useEffect(()=>{
    if(updateTodoResult){
      dispatch(getPlayerList());
      setTodo("")
      setId("")
    }
},[updateTodoResult, dispatch])

  return (
    <div className='container w-50'>
        <h4 className='mt-5'>{id ? "Edit Todo" : "Add Todo"}</h4>
        <form action="" onSubmit={(e)=>handleSubmit(e)}>

        <Form>
          <Form.Group className="mb-3 mt-5" controlId="exampleForm.ControlInput1">
            <Form.Control value={todo} onChange={(e)=>setTodo(e.target.value)} type="email" placeholder="Masukan To Do" />
          </Form.Group>
        </Form>

            <Button type="submit" variant="contained" color="secondary" endIcon={<SendIcon />} style={{maxWidth: '100px', maxHeight: '30px'}}>
            Submit
            </Button>
        </form>
    </div>
  )
}

export default AddTodo