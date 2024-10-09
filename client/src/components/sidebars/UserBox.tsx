import { Image, TooltipCustom } from "@/components/layouts";
import { generateDefaultAvatar } from "@/lib/utils";
import useUserStore from "@/zustand/useUserStore";
import diamond from "@/assets/svg/badge-stock/dinamond.svg";
import { Info } from "lucide-react";

const UserBox = () => {
  const { user } = useUserStore();

  return (
    <div className="p-4 flex items-center gap-2">
      <div className="relative">
        <Image
          className="w-16 h-16 object-cover rounded-full border-2 border-slate-200"
          alt={user?.fullname}
          src={user?.avatar ?? ""}
          fallbackSrc={generateDefaultAvatar(user?.fullname ?? "NA")}
        />
        <div className="absolute bg-white rounded-full bottom-1 right-1">
          <Image
            src={diamond}
            className="w-6 h-6 object-cover border-2 border-slate-200 p-[2px] rounded-full"
          />
        </div>
      </div>
      <div>
        <p className="font-bold mb-2">{user?.fullname}</p>
        <p className="flex items-center gap-2">
          <span>Điểm: </span>
          <span>{user?.score}</span>
          <TooltipCustom 
            trigger={<Info size={16} />}
            content={
              <>
                <p>
                  <span>Hạng tài khoản </span><span>Kim cương</span>
                </p>
                <p>Bạn cần tích luỹ thêm 1000 điểm để lên level tiếp theo</p>
              </>
            }
          />
        </p>
        <p className="flex items-center gap-2">
          <span>Số dư TK:</span>
          <span>{user?.balance}</span>
        </p>
      </div>
    </div>
  );
};

export default UserBox;
