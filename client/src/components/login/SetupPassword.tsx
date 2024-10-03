import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form } from '../ui/form'
import { FormInput } from '../forms'
import useUserStore from '@/zustand/useUserStore'
import { Button } from '../ui/button'
import { apiSignInWithGoogle } from '@/apis/auth'
import { isEmptyObject } from '@/utils/commonFunction'
import { toast } from 'sonner'

interface SetupPasswordProps {
  onClose: () => void
}

const formSchema = z.object({
  password: z.string().min(6, { message: 'Mật khẩu tối thiểu 6 ký tự' }),
  confirmPassword: z.string()
}).refine(data => {
  const { password, confirmPassword } = data
  return password === confirmPassword
}, { message: 'Mật khẩu không trùng khớp.', path: ['confirmPassword'] })

const SetupPassword: React.FC<SetupPasswordProps> = ({
  onClose
}) => {

  const { googleData, setToken } = useUserStore()

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: '',
      confirmPassword: ''
    },
    mode: 'onChange'
  })

  const onSubmit = async (data: any) => {
    if (isEmptyObject(googleData)) return alert('Phiên đăng nhập thất bại')
    const payload = {
      ...googleData,
      password: data.password
    }
    const response = await apiSignInWithGoogle(payload)

    if (response.data?.success) {
      setToken(response?.data?.userToken)
      toast.success(response?.data?.toastMessage)
      onClose()
    } else {
      toast.error(response?.data?.toastMessage)
    }
  }

  return (
    <div className='col-span-6 p-8'>
      <p className='font-bold text-base'>Bước cuối cùng</p>
      <p className='font-bold text-2xl'>Thiết lập mật khẩu</p>

      <Form {...form}>
        <form className='py-6 space-y-4' onSubmit={form.handleSubmit(onSubmit)}>
          <FormInput
            form={form}
            type='password'
            name='password'
            label='Mật khẩu'
            placeholder='Nhập mật khẩu của bạn'
          />
          <FormInput
            form={form}
            type='password'
            name='confirmPassword'
            label='Nhập lại mật khẩu'
            placeholder='Nhập lại mật khẩu của bạn'
            className='mb-4'
          />
          <Button className='w-full' type='submit'>
            Xác nhận
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default SetupPassword