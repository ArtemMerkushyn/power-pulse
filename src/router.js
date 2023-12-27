import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Auth } from './pages/auth/Auth';
import { SignUp } from './pages/SignUp/SignUp';

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
        ],
    }
]);