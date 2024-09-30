import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import routes from './routes.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')!).render(
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <RouterProvider router={router}/>
    </GoogleOAuthProvider>
)
