import { postSoldTypes } from '@/lib/constants'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '../ui/navigation-menu'
import navigations from './navigations'
import { naviItemcn } from '@/lib/className'
import { cn } from '@/lib/utils'

const Header = () => {

  console.log('VVVpostSoldTypes: ', postSoldTypes)

  return (
    <div className='h-24 p-4 flex items-end'>
      <div>
        <Link to='/' className='text-5xl tracking-widest text-shadow text-blue-600 font-bold' >
          AdStar
        </Link>
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          {
            navigations.map(el => (
              <Fragment key={el.id}>
                {
                  el.hasSub && (
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>{el.name}</NavigationMenuTrigger>
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
                      <NavigationMenuLink className={cn('text-sm font-medium')}>
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
  )
}

export default Header
