import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function LoginComponent() {
    const [username, setUsername] = useState("test")
    const [password, setPassword] = useState("1234")
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const navigate = useNavigate();

    function handleUsernameChange(event) {
        //console.log(event.target.value);
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        // console.log(event.target.value);
        setPassword(event.target.value)
    }

    function handleSubmit() {
        if (username === "test" && password === "1234") {
            console.log("Success");
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
            navigate(`/welcome/${username}`)
        } else {
            console.log("Failed");
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }
    }
    // function SuccessMessageComponent() {
    //     if (showSuccessMessage) {
    //         return <div className='successMessage'>Authenticated Successfully</div>
    //     }
    //     return null
    // }

    // function ErrorMessageComponent() {
    //     if (showErrorMessage) {
    //         return <div className='errorMessage'>Authentication Failed. Please check your credentials</div>
    //     }
    //     return null
    // }
    return (
        <div className="Login">
            {/* <SuccessMessageComponent /> */}
            <h1>Log In</h1>
            {showSuccessMessage && <div className='successMessage'>Authenticated Successfully</div>}
            {/* <ErrorMessageComponent /> */}
            {showErrorMessage && <div className='errorMessage'>Authentication Failed. Please check your credentials</div>}
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange} />
                </div>
            </div>
            <div>
                <button type="button" name="login" onClick={handleSubmit}>Login</button>
            </div>
        </div>
    )
}
