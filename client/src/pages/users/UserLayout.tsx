import { Header } from "@/components/header";
import { UserSidebar } from "@/components/sidebars";
import useUserStore from "@/zustand/useUserStore";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "sonner";

const UserLayout = () => {
  const { user } = useUserStore();

  if (!user) {
    toast.info("Vui lòng đăng nhập để truy cập trang này!")

    return <Navigate to="/" />;
  }

  return (
    <div>
      <Header />
      <div className="flex h-[calc(100vh-96px)] bg-slate-100">
        <div className="w-[256px] h-full flex-none">
          <UserSidebar />
        </div>
        <div className="flex-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserLayout
