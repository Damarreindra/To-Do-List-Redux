import React from 'react'
import { AddTodo, ListPlayer } from '../components'
import ActiveTodo from '../components/ListPlayer/ActiveTodo'


function Active() {
  return (
    <div>
    <AddTodo/>
    <hr />
    <br />
    <ActiveTodo/>
    </div>
  )
}

export default Active