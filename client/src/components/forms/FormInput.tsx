import { placeHolderCn, resetOutline } from "@/lib/className"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import PropTypes from 'prop-types'
import { cn } from "@/lib/utils"

interface FormInputProps {
  form: any,
  label?: string,
  name: string,
  type?: 'text' | 'password',
  placeholder?: string,
  className?: string
}

const FormInput: React.FC<FormInputProps> = ({
  form,
  label,
  name,
  type = "text",
  placeholder,
  className
}) => {

  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input
              type={type}
              className={cn(resetOutline, placeHolderCn, className)}
              {...field}
              placeholder={placeholder}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default FormInput

FormInput.propTypes = {
  form: PropTypes.shape({
    control: PropTypes.any.isRequired
  }),
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'password'])
}
