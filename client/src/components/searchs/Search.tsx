import PopoverCheckbox from "@/components/searchs/PopoverCheckbox"
import PopoverRange from "@/components/searchs/PopoverRange"
import SelectProvince from "@/components/searchs/SelectProvince"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { postRentTypes, postSoldTypes, prices, sizes } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { SearchIcon } from "lucide-react"
import { useState } from "react"


const postTypes = ['Cho thuê', 'Bán'].map((el, index) => ({ id: index, label: el, value: el }))

const Search = () => {

  const [activedTab, setActiveTab] = useState('Cho thuê')
  const [isShowSelectProvince, setIsShowSelectProvince] = useState<boolean>(false)

  return (
    <div className="absolute w-full top-0 bottom-0 left-10 text-slate-50 flex items-center justify-center right-10">
      <div className="w-[945px] max-w-full">
        <Tabs className="space-y-0" onValueChange={(value) => setActiveTab(value)} value={activedTab}>
          <TabsList className="rounded-b-none bg-transparent p-0">
            {
              postTypes.map(el => (
                <TabsTrigger
                  className="data-[state=active]:bg-black/60 first:rounded-tl-md last:rounded-tr-md min-w-[81px] data-[state=active]:text-slate-50 h-full bg-slate-50  text-slate-950"
                  value={el.value}
                  key={el.id}
                >
                  {el.label}
                </TabsTrigger>
              ))
            }
          </TabsList>
          {
            postTypes.map((el) => (
              <TabsContent
                className="bg-black/60 h-40 rounded-md rounded-tl-none p-4 space-y-4 text-sm"
                value={el.value}
                key={el.id}
              >
                <div
                  onClick={() => setIsShowSelectProvince(true)}
                  className={cn(
                    "flex relative items-center justify-between bg-slate-50 rounded-md px-[6px] py-2",
                    isShowSelectProvince && 'rounded-b-none'
                  )}
                >
                  <p className="text-sm flex items-center gap-2 font-semibold text-slate-900">
                    <SearchIcon size={20} color="#222" />
                    <span>Trên toàn quốc</span>
                  </p>
                  <Button>Tìm kiếm</Button>
                  {
                    isShowSelectProvince && <SelectProvince  onClose={() => setIsShowSelectProvince(false)}/>
                  }
                </div> 
                <div className="grid grid-cols-3 gap-4">
                  <PopoverRange name="price" _name="_price" options={prices} label="Mức giá"/>
                  <PopoverRange name="size" _name="_size" options={sizes} label="Diện tích"/>
                  <PopoverCheckbox 
                  name="postSoldTypes" 
                  label="Loại tin đăng" 
                  options={ activedTab === 'Bán' ? 
                    postSoldTypes.map(el => ({id: el.pathname, label: el.name}))
                    : postRentTypes.map(el => ({id: el.pathname, label: el.name}))
                  } 
                  />
                </div>
              </TabsContent>
            ))
          }
        </Tabs>
      </div>
    </div>
  )
}

export default Search