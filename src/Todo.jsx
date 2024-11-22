import React, { useState } from 'react'


const Todo = () => {

    const [input, setInput] = useState({
        task: "",
        status: ""

    })

    const onChangeHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }


    const [addTodo, setAddTodo] = useState([])

    const addTasks = () => {
        setAddTodo([{ ...addTodo, input }])
    }




    return (
        <div className='container  p-4 '>
            <h1 className='pt-4'> To do List</h1>

            <input type='text' value={input.task} name={"task"} placeholder='add to do' onChange={onChangeHandler} /> <br />

            <button className='mt-4' onClick={addTasks}> Add To DO</button>

            {addTodo.map((ele, i) => {

                return (
                    <div className='p-2 row row-col-4' key={i}>

                        <div className="d-flex align-items-center mt-4">
                            <p className="mb-0 me-3">{ele.input.task}</p>
                            <select>
                                <option>In progress</option>
                                <option>Done</option>
                            </select>
                        </div>


                    </div>

                )
            })}


        </div>
    )
}

export default Todo
