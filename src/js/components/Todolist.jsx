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

    function deleteTask (index) {
        console.log(`index = ${index}`)

        const newList = listTasks.filter((item) => item.index !== index)

        setlistTasks(newList)
    }



    return (
        <div>
            <h1 className="title">todos</h1>
            <div className="list">
                <form onSubmit={handleSubmit} className="info">

                    <input className="border border-0 form-control shadow-none " placeholder="What needs to be done" type="text" name="task" value={myTask.task} onChange={handleKeyDown} />

                    <ul className="p-0 m-0">
                        {listTasks.map((item, index) => (
                            <li key={index}>
                                {/* <input type="checkbox" name="do" className="btn-check" value={myTask.do} onClick={(event) => setmyTask({...myTask, [event.target.name]: true})}/> */}
                                <p className="m-0 py-2">{item.task}</p>
                                <span onClick={() => deleteTask(listTasks.index)} className="text-danger">x</span>
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