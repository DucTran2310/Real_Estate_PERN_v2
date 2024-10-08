import { Outlet } from 'react-router-dom'
import { Toaster } from './components/ui/sonner'
import useUserStore from '@/zustand/useUserStore'
import { useEffect } from 'react'
import useAppStore from '@/zustand/useAppStore'

const App = () => {

  const { token, getUser } = useUserStore()
  const { getProvinces } = useAppStore()

  useEffect(() => {
    getProvinces()
  }, [])

  useEffect(() => {
    if (token) getUser()
  }, [token])

  return (
    <main className='text-primary'>
      <Outlet />
      <Toaster position='top-center' expand={false} richColors />
    </main>
  )
}

export default App