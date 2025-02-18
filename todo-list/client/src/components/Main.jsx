import { useEffect, useState } from "react"
import TodoItem from "./TodoItem";

const url = 'http://localhost:3030/jsonstore/todos'
export default function Main() {
    const [todo, setTodo] = useState({ result: [], isLoading: false });
    useEffect(() => {
        (async function () {
            try {
                setTodo((state) => ({ ...state, isLoading: true }))
                const data = await fetch(url);
                const result = Object.values(await data.json());
                setTodo(() => ({ result, isLoading: false }))

            } catch (error) {
                console.log(error.message);
            }
        })()
    }, [])
    return (
        <main className="main">
            {/* <!-- Section container --> */}
            <section className="todo-list-container">
                <h1>Todo List</h1>

                <div className="add-btn-container">
                    <button className="btn">+ Add new Todo</button>
                </div>

                <div className="table-wrapper">
                    {/* <!-- Loading spinner - show the load spinner when fetching the data from the server--> */}
                    {todo.isLoading ? <div className="loading-container">
                        <div className="loading-spinner">
                            <span className="loading-spinner-text">Loading</span>
                        </div>
                    </div> : null}
                    {/* <!-- Todo list table --> */}
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="table-header-task">Task</th>
                                <th className="table-header-status">Status</th>
                                <th className="table-header-action">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- Todo item --> */}

                            {todo.result.map((el) => <TodoItem key={el._id} data={el} />)}



                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    )
}