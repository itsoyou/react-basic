import { useParams, Link } from 'react-router-dom'

export default function WelcomeComponent() {
    // This hook allows to access to the params of a certain url
    const { username } = useParams()
    // const params = useParams()
    // console.log(params.username)

    return (
        <div className="WelcomeComponent">
            <h1>Welcome, {username}!</h1>
            <div >
                Manage your todos. <Link to='/todos'>Go here</Link>
            </div>
        </div>
    )
}