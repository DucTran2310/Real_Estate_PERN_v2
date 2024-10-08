import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { MoveRight, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"

interface PopoverRangeProps {
  label: string,
  name: string,
  _name: string,
  options: {
    id: number,
    label: string,
    value: string
  }[]
}

const PopoverRange: React.FC<PopoverRangeProps> = ({
  name,
  _name,
  label,
  options = []
}) => {

  const form = useForm({
    defaultValues: {
      [name]: [0, 100]  // Fixed 'price' field for the Slider
    }
  })

  const triggerRef = useRef(null)
  const [widthContent, setWidthContent] = useState(0)

  useEffect(() => {
    if(triggerRef.current) {
      const width = triggerRef.current.getBoundingClientRect()?.width
      setWidthContent(width)
    }
  }, [])

  return (
    <Popover>
      <PopoverTrigger ref={triggerRef} className="border rounded-md py-2">{label}</PopoverTrigger>
      <PopoverContent style={{width: `${widthContent}px`}} className="p-0 relative h-[364 px]">
        <div className="p-4 flex items-center justify-center border-b">
          <p className="font-bold">{label}</p>
          <Button className="absolute right-1 top-0 bottom-0" variant='transparent'>
            <X size={14} />
          </Button>
        </div>
        <div className="p-4 space-y-4 max-h-[250px] overflow-y-auto">
          <div className="flex items-center justify-center gap-4">
            <div className="flex flex-col items-center">
              <p className="text-xs font-bold mb-2">{`${label} thấp nhất`}</p>
              <Input placeholder="Từ" className="w-[90px]" />
            </div>
            <MoveRight size={16} className="mt-6" />
            <div className="flex flex-col items-center">
              <p className="text-xs font-bold mb-2">{`${label} cao nhất`}</p>
              <Input placeholder="Đến" className="w-[90px]" />
            </div>
          </div>

          {/* Slider Field */}
          <Form {...form}>
            <FormField
              name={name}  // Fixed field name for price
              control={form.control}
              render={({ field }) =>
                <FormItem className="py-8">
                  <FormControl>
                    <Slider
                      value={field.value}
                      onValueChange={(value) => form.setValue('price', value)}
                      max={100}
                      min={0}
                      step={1}
                    />
                  </FormControl> 
                </FormItem>
              } 
            />
          </Form>

          {/* Radio Group Field */}
          <Form {...form}>
            <FormField
              name={_name}  // Fixed field name for price
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <RadioGroup value={field.value} onValueChange={field.onChange}>
                      {options.map((el) => (
                        <FormItem key={el.id} className="flex items-center justify-between">
                          <FormLabel>{el.label}</FormLabel>
                          <FormControl>
                            <RadioGroupItem value={el.value} />
                          </FormControl>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            />
          </Form>
        </div>
        <div className="flex items-center px-4 border-t h-[57px] justify-end">
            <Button>Áp dụng</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default PopoverRange