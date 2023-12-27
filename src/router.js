import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Auth } from './pages/Auth/Auth';
import { SignUp } from './pages/SignUp/SignUp';
import { Diary } from './pages/Diary/Diary';
import { Products } from './pages/Products/Products';
import { Exercises } from './pages/Exercises/Exercises';
import { User } from './pages/User/User';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <Auth/>
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