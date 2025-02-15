import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import AuthProvider from './security/AuthContext'
import HeaderComponent from './HeaderComponent'
import WelcomeComponent from './WelcomeComponent'
import LoginComponent from './LoginComponent'
import LogOutComponent from './LogoutComponent'
import ListTodosComponent from './ListTodosComponent'
import ErrorComponent from './ErrorComponent'

import './TodoApp.css'

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent />
                    <Routes>
                        <Route path='/' element={<LoginComponent />} />
                        <Route path='/login' element={<LoginComponent />} />
                        <Route path='/welcome/:username' element={<WelcomeComponent />} />
                        <Route path='/todos' element={<ListTodosComponent />} />
                        <Route path='/logout' element={<LogOutComponent />} />

                        <Route path='*' element={<ErrorComponent />} />
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}
