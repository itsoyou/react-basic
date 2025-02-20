import { useCallback, useEffect, useState } from "react"
import { deleteTodoByIdApi, retrieveAllTodosForUsernameApi } from "./api/TodoApiService"
import { useAuth } from "./security/AuthContext"
import { useNavigate } from "react-router-dom"

export default function ListTodosComponent() {

    const [todos, setTodos] = useState([])
    const [message, setMessage] = useState(null)
    const authContext = useAuth()
    const username = authContext.username
    const navigate = useNavigate()


    const refreshTodos = useCallback(() => {
        retrieveAllTodosForUsernameApi(username)
            .then(response => {
                console.log(response);
                setTodos(response.data);
            })
            .catch(error => console.log(error));
    }, [username]);

    useEffect(() => refreshTodos(), [refreshTodos])


    /** This generates Warning:
     * React Hook useEffect has a missing dependency: 'refreshTodos'. Either include it or remove the dependency array
     */

    // useEffect(() => refreshTodos(), [])
    // function refreshTodos() {
    //     retrieveAllTodosForUsernameApi(username)
    //         .then(response => {
    //             console.log(response)
    //             setTodos(response.data)
    //         })
    //         .catch(error => console.log(error))
    // }

    function deleteTodo(id) {
        // console.log("deleteTodo clicked" + id)
        deleteTodoByIdApi(username, id)
            .then(
                // 1. display message
                // 2. update todo list
                () => {
                    setMessage(`Todo id ${id} is deleted`)
                    refreshTodos()
                }
            )
            .catch(error => console.log(error))
    }

    function updateTodo(id) {
        console.log("updateTodo clicked" + id)
        navigate(`/todo/${id}`)
    }

    function addNewTodo() {
        navigate(`/todo/-1`)
    }

    return (
        <div className="container">
            <h1>Things You Want To Do!</h1>
            {message && <div className="alert alert-warning">{message}</div>
            }
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Is Done?</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(todo => (
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    {/* <td>{todo.targetDate.toDateString()}</td> */}
                                    <td>{todo.targetDate.toString()}</td>
                                    <td><button className="btn btn-warning" onClick={() => deleteTodo(todo.id)}>Delete</button></td>
                                    <td><button className="btn btn-success" onClick={() => updateTodo(todo.id)}>Update</button></td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="btn btn-success m-5" onClick={addNewTodo} >
                Add New Todo
            </div>
        </div>
    )
}