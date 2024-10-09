import NavMenu from "@/components/sidebars/NavMenu"
import UserBox from "@/components/sidebars/UserBox"

const UserSidebar = () => {
  return (
    <div className="w-full h-full bg-white">
      <UserBox />
      <NavMenu />
    </div>
  )
}

export default UserSidebar