import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from '../Redux/todoSlice';


const Home = () => {

  const [inputValue, setInputValue] = useState('');
  const todo = useSelector(state => state.todo)
  const dispatch = useDispatch()


  const handleAdd = ()=>{
    if (inputValue.trim()) {
      dispatch(addTodo(inputValue))
      setInputValue('')
    }
  }

  const completedTask = ()=>{
    todo.filter(todo=>todo.completed).length
  }

  return (
    <>
      <div className='justify-content-center align-items-center bg-warning' style={{minHeight:'100vh'}}>
        <h1 className='text-center text-success fw-bolder p-3'>ToDoZzz..</h1>
        <div className="d-flex justify-content-center align-items-center mt-5 w-50 m-5">
          <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)}  type="text" class="form-control" placeholder="Enter your ToDo !!" />
          <button onClick={handleAdd} class="btn btn-outline-success fw-bold ms-5">Add..</button>
        </div>
        {/* table */}
        <div className="d-flex justify-content-center align-items-center p-5 ">
          <table className='table shadow p-5 '>
            <thead>
              <th>#</th>
              <th>Activities</th>
              <th>Done</th>
              <th>Action</th>
            </thead>
            <tbody>
              {
                todo.map((todo) => (
                  <tr key={todo.id}>
                    <td>  </td>
                    <td> {todo.text} </td>
                    <td>
                     <input type="checkbox" name="checkmark" checked={todo.completed} onClick={() => dispatch(toggleTodo(todo.id))} />
                     {todo.completed ? 'Undo' : 'Complete'}
                    </td>
                    <td> <button onClick={() => dispatch(deleteTodo(todo.id))} className='btn btn-outline-danger fw-bolder'>DELETE</button>    </td>
                 </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Home