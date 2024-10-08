import { Button } from "@/components/ui/button"
import { provincesTops } from "@/lib/constants"
import useAppStore from "@/zustand/useAppStore"
import { X } from "lucide-react"

interface SelectProvinceProps {
  onClose: () => void
}

const SelectProvince: React.FC<SelectProvinceProps> = ({
  onClose
}) => {

  const {provinces} = useAppStore()

  return (
    <div className="absolute top-full left-0 right-0 max-h-[500px] overflow-y-auto rounded-md rounded-t-none bg-slate-50 text-slate-900">
      <div className="flex items-center py-4 px-6 border-y border-input justify-between">
        <p className="font-bold text-sm text-slate-900">Bạn muốn tìm bất động sản ở tỉnh thành nào?</p>
        <Button
          onClick={(e) => {
            e.stopPropagation()
            onClose()
          }}
          variant="transparent"
        >
          <X size={16} />
        </Button>
      </div>
      <div className="text-sm space-y-6 px-6 py-4 text-slate-900">
        <div className="space-y-4">
          <p className="font-bold text-slate-400">Các tỉnh thành nổi bật</p>
          <div className="flex items-center rounded-md justify-around gap-4">
            {
              provincesTops.map(el => (
                <div key={el.id} className="aspect-[3/2] group relative rounded-md overflow-hidden flex-1">
                  <img 
                    src={el.imageUrl}
                    alt="Province"
                    className="h-full w-full rounded-md transition-transform duration-300 group-hover:animate-scale-up-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <p className="absolute left-0 right-0 bottom-1 font-medium text-slate-50 text-center">
                    {el.label}
                  </p>
                </div>
              ))
            }
          </div>
        </div>
        <div className="space-y-4">
          <p className="font-bold text-slate-400">Tất cả tỉnh thành</p>
          <div className="flex items-center rounded-md justify-around gap-4">
            <div className="grid grid-cols-6 gap-4">
            {
              provinces.map(el => (
                <p className="cursor-pointer hover:underline hover:text-primary" key={el.idProvince}>{el.name}</p>
              ))
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectProvince