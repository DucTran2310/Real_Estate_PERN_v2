import menus from "@/components/header/menu";
import { ConditionRender } from "@/components/layouts";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Fragment, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavMenu = () => {
  const [userMenu, setUserMenu] = useState(menus);
  const [activeTabs, setActiveTabs] = useState<(string | number)[]>([]);
  const location = useLocation()

  useEffect(() => {
    const activedSub = userMenu.find(el => el.subs?.some(item => item.path === location.pathname))

    if (activedSub) {
      setActiveTabs(prev => [...prev.filter(el => el !== activedSub?.id), activedSub.id])
    }
  }, [location.hash, userMenu])

  const handleTabsActive = (idTab: string | number) => {
    const hasTab = activeTabs.some((id) => id === idTab);
    if (hasTab) {
      setActiveTabs((prev) => prev.filter((el) => el !== idTab));
    } else {
      setActiveTabs((prev) => [...prev, idTab]);
    }
  };

  return (
    <div>
      {userMenu.map((el) => (
        <Fragment key={el.id}>
          <ConditionRender show={el.hasSubs}>
            <Collapsible open={activeTabs.some(item => item === el.id)}>
              <CollapsibleTrigger 
                onClick={() => handleTabsActive(el.id)}
                className={cn("flex items-center justify-between px-4 py-2 w-full", activeTabs.some(item => item === el.id) && 'text-blue-500 ')}
              >
                <p className="flex items-center gap-2">
                  {el.icon} {el.label}
                </p>
                {activeTabs.findIndex((id) => id === el.id) > -1 ? (
                  <ChevronDown size={14} />
                ) : (
                  <ChevronRight size={14} />
                )}
              </CollapsibleTrigger>
              <CollapsibleContent>
                {el?.subs &&
                  el?.subs.map((item) => (
                    <NavLink
                      className={({ isActive }) =>
                        cn(
                          "px-4 py-2 pl-8 flex items-center hover:bg-slate-200 gap-2",
                          isActive && "bg-slate-200"
                        )
                      }
                      to={item.path}
                      key={item.id}
                    >
                      {item.label}
                    </NavLink>
                  ))}
              </CollapsibleContent>
            </Collapsible>
          </ConditionRender>
          <ConditionRender show={!el.hasSubs}>
            <NavLink
              className={({ isActive }) =>
                cn(
                  "px-4 py-2 flex items-center hover:bg-slate-200 gap-2",
                  isActive && "bg-slate-200"
                )
              }
              to={el.path}
            >
              {el.icon} {el.label}
            </NavLink>
          </ConditionRender>
        </Fragment>
      ))}
    </div>
  );
};

export default NavMenu;
