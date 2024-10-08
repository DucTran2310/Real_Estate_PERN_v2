import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent } from '@/components/ui/dropdown-menu'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu'
import { naviItemcn, resetOutline } from '@/lib/className'
import { cn } from '@/lib/utils'
import useUserStore from '@/zustand/useUserStore'
import { LogOut } from 'lucide-react'
import { Fragment, useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { Login } from '../login'
import menus from './menu'
import navigations from './navigations'

const Header = () => {

  const { user, logout } = useUserStore()

  const [isShowDialog, setIsShowDialog] = useState<boolean>(false)

  const onClose = useCallback(() => {
    setIsShowDialog(false)
  }, [])

  return (
    <div className='h-24 p-4 shadow flex items-center justify-between'>
      <div className='flex items-center gap-6'>
        <Link to='/' className='text-5xl tracking-widest text-shadow text-main font-bold' >
          AdStar
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            {
              navigations.map(el => (
                <Fragment key={el.id}>
                  {
                    el.hasSub && (
                      <NavigationMenuItem>
                        <NavigationMenuTrigger className='text-sm font-bold'>{el.name}</NavigationMenuTrigger>
                        <NavigationMenuContent className='p-4 grid grid-cols-2 min-w-96'>
                          {el.subs?.map(sub => (
                            <NavigationMenuLink className={cn(naviItemcn)} key={sub.pathname}>
                              {sub.name}
                            </NavigationMenuLink>
                          ))}
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    )
                  }
                  {
                    !el.hasSub && (
                      <NavigationMenuItem>
                        <NavigationMenuLink className={cn('text-sm font-bold')}>
                          {el.name}
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    )
                  }
                </Fragment>
              ))
            }
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className='flex items-center gap-3'>
        {
          !user ?
            <Dialog
              onOpenChange={(isOpen: boolean) => setIsShowDialog(isOpen)}
              open={isShowDialog}
            >
              <DialogTrigger asChild>
                <Button
                  onClick={() => setIsShowDialog(true)}
                  className='bg-transparent text-stone-900 hover:bg-transparent hover:underline'
                >
                  Đăng nhập/ Đăng ký
                </Button>
              </DialogTrigger>
              <DialogContent
                isHideClose={true}
                className='min-w-[700px] p-0'
              >
                <DialogHeader>
                  <DialogTitle></DialogTitle>
                  <Login onClose={onClose} />
                </DialogHeader>
              </DialogContent>
            </Dialog>
            : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className={resetOutline} variant='transparent'>
                    <img src={user.avatar} className='rounded-full w-[30px] h-[30px]'/>
                    {user.fullname}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {menus.map(el => <DropdownMenuItem>
                    <Link className='flex items-center gap-2' to={el.path} key={el.id}>
                      {el.icon}
                      {el.label}
                    </Link>
                  </DropdownMenuItem>)}
                  <DropdownMenuItem
                    onClick={() => {
                      logout()
                    }}
                    className='flex items-center gap-2'
                  >
                    <LogOut size={14} />
                    <span className='cursor-pointer'>Đăng xuất</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )
        }
        <Button size='lg' variant='outline'>
          Đăng tin
        </Button>
      </div>
    </div>
  )
}

export default Header
