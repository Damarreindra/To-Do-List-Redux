import React from 'react'
import { AddTodo, ListPlayer } from '../components'
import DoneTodo from '../components/ListPlayer/DoneTodo'


function Active() {
  return (
    <div>
    <AddTodo/>
    <hr />
    <br />
    <DoneTodo/>
    </div>
  )
}

export default Active