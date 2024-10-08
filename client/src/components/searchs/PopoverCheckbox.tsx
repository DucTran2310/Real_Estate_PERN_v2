import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { X } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { Checkbox } from "@/components/ui/checkbox"

interface PopoverCheckboxProps {
  name: string,
  label: string,
  options: any[]
}

const PopoverCheckbox:React.FC<PopoverCheckboxProps> = ({name, label, options = []}) => {

  const triggerRef = useRef(null)
  const [widthContent, setWidthContent] = useState(0)

  const form = useForm({
    defaultValues: {
      [name]: ['']
    }
  })

  useEffect(() => {
    if(triggerRef.current) {
      const width = triggerRef.current.getBoundingClientRect()?.width
      setWidthContent(width)
    }
  }, [])

  console.log('VVVOPTIONS: ', options)
  
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
          <Form {...form }>
            <FormField 
              name={name}
              control={form.control}
              render={() => (
                <FormItem>
                  {
                    options.map(el => (
                      <FormField 
                        key={el?.pathname}
                        name={name}
                        control={form.control}
                        render={
                          ({field}) => (  
                            <FormItem className="flex items-center justify-between">
                              <FormLabel>{el.label}</FormLabel>
                              <FormControl>
                                <Checkbox 
                                  checked={field.value?.includes(el.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, el.id])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== el.id
                                          )
                                        )
                                  }}
                                /> 
                              </FormControl>
                            </FormItem>
                          )
                        }
                      />
                    ))
                  }
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

export default PopoverCheckbox