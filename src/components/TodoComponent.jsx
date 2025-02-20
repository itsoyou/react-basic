import { useNavigate, useParams } from "react-router-dom"
import { useAuth } from "./security/AuthContext"
import { useCallback, useEffect, useState } from "react"
import { createTodoApi, retrieveTodoApi, updateTodoApi } from "./api/TodoApiService"
import { ErrorMessage, Field, Form, Formik } from "formik"
import moment from "moment"

export default function TodoComponent() {

    const { id } = useParams() // get Todo id from url
    const authContext = useAuth()
    const username = authContext.username

    const [description, setDescription] = useState("")
    const [targetDate, setTargetDate] = useState("")

    const navigate = useNavigate()

    /** This generates Warning:
     * React Hook useEffect has a missing dependency: 'retrieveTodo'. Either include it or remove the dependency array
     */
    // useEffect(
    //     () => retrieveTodo(),
    //     [id] // refresh only when the id value changes
    // )
    // function retrieveTodo() {
    //     retrieveTodoApi(username, id)
    //         .then(response => {
    //             // allow editing Todo
    //             setDescription(response.data.description)
    //             setTargetDate(response.data.targetDate)

    //         })
    //         .catch(error => console.log(error))
    // }

    const retrieveTodo = useCallback(() => {
        if (id !== "-1") {
            retrieveTodoApi(username, id)
                .then(response => {
                    setDescription(response.data.description)
                    setTargetDate(response.data.targetDate)
                })
                .catch(error => console.log(error))
        }
    }, [username, id]) // Include dependencies of retrieveTodo

    useEffect(
        () => retrieveTodo(),
        [retrieveTodo] // Now retrieveTodo will only change when username or id changes
    )

    function onSubmit(values) {
        const todo = {
            id: id,
            username: username,
            description: values.description,
            targetDate: values.targetDate,
            done: false
        }
        console.log(todo)

        if (id === "-1") {
            createTodoApi(username, todo)
                .then(response => {
                    navigate("/todos")
                })
                .catch(error => console.log(error))
        } else {
            updateTodoApi(username, id, todo)
                .then(response => {
                    navigate("/todos")
                })
                .catch(error => console.log(error))
        }
    }

    function validate(values) {
        // validate function is called first and if it returns no error, than onSubmit is called.
        let errors = {
            // description: "Enter a valid description.",
            // targetDate: "Enter a valid target date."
        }
        if (values.description.length < 5) {
            errors.description = "Enter at least 5 characters for description."
        }
        if (values.targetDate === "" || !moment(values.targetDate).isValid()) {
            errors.targetDate = "Enter the target date."
        }
        return errors
    }

    return (
        <div className="container">
            <h1>Enter Todo Details</h1>
            <div>
                <Formik initialValues={{ description, targetDate }} enableReinitialize={true} onSubmit={onSubmit} validate={validate} validateOnChange={false} validateOnBlur={false}>
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                <ErrorMessage name="targetDate" component="div" className="alert alert-warning" />


                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field type="text" className="form-control" name="description" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Target Date</label>
                                    <Field type="date" className="form-control" name="targetDate" />
                                </fieldset>
                                <div>
                                    <button className="btn btn-success m-5" type="submit">Save</button>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    )
}