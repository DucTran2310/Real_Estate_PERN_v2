"use client"

import banner from '@/assets/jpg/banner-login.jpg'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { FormInput } from '../forms'
import { Form } from '../ui/form'
import { Button } from '../ui/button'
import React, { useState } from 'react'
import { SIGNIN, SIGNUP } from '@/utils/constants'
import google from '../../assets/svg/google.svg'
import { useGoogleLogin } from '@react-oauth/google'
import { apiGetCredentialsFromAccessToken } from '@/apis/externals'
import { apiCheckNewUser } from '@/apis/auth'
import SetupPassword from './SetupPassword'
import useUserStore from '@/zustand/useUserStore'
import { toast } from 'sonner'

interface LoginProps {
  onClose: () => void
}

const formSchema = z.object({
  emailOrPhone: z.string().min(1, { message: 'Trường này bắt buộc.' }),
  fullName: z.string().min(1, { message: 'Trường này là bắt buộc.' }),
  password: z.string().min(6, { message: 'Mật khẩu tối thiểu 6 kí tự.' })
})

const Login:React.FC <LoginProps> = ({
  onClose
}) => {

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailOrPhone: '',
      password: '',
      fullname: ''
    }
  })

  const [variant, setVariant] = useState<string>(SIGNIN)
  const [isSetupPassword, setIsSetupPassword] = useState<boolean>(false)
  const { setGoogleData, setToken } = useUserStore()

  const handleSignInGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const response = await apiGetCredentialsFromAccessToken(tokenResponse?.access_token)

      if (response.status === 200) {
        setGoogleData({
          email: response.data?.email,
          avatar: response.data?.picture,
          fullname: response.data?.name,
          emailVerified: response.data?.verified_email,
        })
        const user = await apiCheckNewUser(response.data?.email)

        if (user?.data?.hasUser) {
          // redirect home + save accessToken to localStorage
          setToken(user?.data?.userToken)
          toast.success(user?.data?.toastMessage)
          onClose()
        } else {
          setIsSetupPassword(true)
        }
      }
    },
    onError: () => toast.error('Đăng nhập thất bại.')
  });

  const toggleVariant = () => {
    if (variant === SIGNIN) setVariant(SIGNUP)
    else setVariant(SIGNIN)
  }

  return (
    <div className='grid grid-cols-10 text-primary'>
      <div className='col-span-4 grid place-content-center'>
        <img src={banner} alt='Login' className='w-full object-contain' />
      </div>
      {
        !isSetupPassword &&
        <div className='col-span-6 p-8'>
          <p className='font-bold text-base'>Xin chào bạn</p>
          <p className='font-bold text-2xl'>{variant === SIGNIN ? 'Đăng nhập để tiếp tục' : 'Đăng ký tài khoản mới'}</p>

          {/* Form */}
          <Form {...form}>
            <form className='my-6 space-y-6'>
              <FormInput
                placeholder={'VD: 012345678 hoặc abc@gmail.com'}
                form={form}
                name={'emailOrPhone'}
                label={'Email hoặc số điện thoại'}
              />
              <FormInput
                placeholder={'Mật khẩu có tối thiểu 6 ký tự'}
                form={form}
                name={'password'}
                label={'Mật khẩu'}
                type={'password'}
              />
              {
                variant === SIGNUP &&
                <FormInput
                  placeholder={'VD: Nguyễn Văn A'}
                  form={form}
                  name={'fullName'}
                  label={'Tên đầy đủ'}
                />
              }
              {
                variant === SIGNIN ?
                  <Button size="default" type="submit" className="w-full relative top-2">Đăng nhập</Button>
                  : <Button size="default" type="submit" className="w-full relative top-2">Đăng ký</Button>
              }
            </form>
          </Form>
          <div className='w-full h-6 flex items-center relative my-4'>
            <div className='w-full h-[1px] bg-stone-200'></div>
            <div className='absolute inset-0 bg-transparent'>
              <p className='px-2 w-fit mx-auto bg-white text-sm text-primary'>Hoặc</p>
            </div>
          </div>
          <Button size='lg' variant='outline' className='w-full mb-4'
            onClick={() => handleSignInGoogle()}
          >
            <img src={google} alt='Google' className='w-5 h-5 object-cover' />
            <span>Đăng nhập bằng Google</span>
          </Button>
          <p className='text-center text-sm'>
            <span>{variant === SIGNIN ? 'Bạn chưa là thành viên?' : 'Bạn đã có tài khoản'}</span>
            <span
              onClick={toggleVariant}
              className='text-red-600 font-bold cursor-pointer hover:underline'
            >
              {variant === SIGNIN ? 'Đăng ký' : 'Đăng nhập'}
            </span>
            <span> tại đây</span>
          </p>
        </div>
      }
      {
        isSetupPassword && <SetupPassword onClose={onClose}/>
      }
    </div>
  )
}

export default Login