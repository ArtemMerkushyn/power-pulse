import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthPage } from './pages/Auth/AuthPage.jsx';
import { SignUp } from './pages/SignUp/SignUp.jsx';
import { Diary } from './pages/Diary/Diary.jsx';
import { Products } from './pages/Products/Products.jsx';
import { Exercises } from './pages/Exercises/Exercises.jsx';
import { User } from './pages/User/User.jsx';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <AuthPage/>
            },
            {
                path: 'sign-up',
                element: <SignUp/>
            },
            {
                path: 'user',
                element: <User/>
            },
            {
                path: 'diary',
                element: <Diary/>
            },
            {
                path: 'products',
                element: <Products/>
            },
            {
                path: 'exercises',
                element: <Exercises/>
            },
        ],
    }
]);