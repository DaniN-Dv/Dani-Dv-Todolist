import { useState } from "react"

let theTask = {
    task: "",
    do: false,
}

export const Todolist = () => {

    const [myTask, setmyTask] = useState(theTask)
    const [listTasks, setlistTasks] = useState([])

    const handleKeyDown = (event) => {
        setmyTask({
            ...myTask,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        setlistTasks([
            ...listTasks,
            myTask
        ])

        setmyTask(theTask)
    }

    const deleteTask = (id) => {

        const newList = listTasks.filter((item, index) => index !== id)

        setlistTasks(newList)
    }



    return (
        <div>

            <h1 className="title">todos</h1>

            <div className="list">
                <form onSubmit={handleSubmit} className="info">

                    <input className="border border-0 form-control shadow-none " 
                    placeholder={`${listTasks.length == 0 ? 'No hay tareas, añadir tareas' : 'Añadir mas tareas'}`} 
                    type="text" name="task" value={myTask.task} onChange={handleKeyDown} />

                    <ul className="p-0 m-0">

                        {listTasks.map((item, index) => (
                            <li key={index}>
                                <p className="m-0 py-2">{item.task}</p>
                                <span onClick={() => deleteTask(index)} className="text-danger">x</span>
                            </li>
                        ))}
                        
                    </ul>

                    <p className="items">{`${listTasks.length} item left`}</p>

                </form>
            </div>

            <div className="d-flex  flex-column align-items-center">
                <div className="fondo1"></div>
                <div className="fondo2"></div>
            </div>

        </div>
    )
}