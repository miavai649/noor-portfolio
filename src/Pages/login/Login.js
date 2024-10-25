import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useLoginMutation } from '../../redux/features/auth/authApi'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { verifyToken } from '../../utils/verifyToken'
import { setUser } from '../../redux/features/auth/authSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const [loginUser, { isLoading }] = useLoginMutation()

  const navigate = useNavigate()

  const onSubmit = async (data) => {
    const res = await loginUser(data)

    try {
      if (res.error) {
        toast.error(res.error.data.message, {
          duration: 2000
        })
      } else {
        toast.success(res.data.message, {
          duration: 2000
        })

        const token = res.data?.data?.accessToken
        const decoded = await verifyToken(token)
        console.log('🚀 ~ onSubmit ~ decoded:', decoded)

        dispatch(
          setUser({
            token: res.data?.data?.accessToken,
            user: decoded
          })
        )
        navigate('/dashboard')
      }
    } catch (error) {
      toast.error('Something went wrong', { duration: 2000 })
    }
  }

  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
      <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
        <h2 className='text-2xl font-bold text-center text-gray-800 mb-6'>
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
          <div className='relative'>
            <label className='input input-bordered flex items-center gap-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 16 16'
                fill='currentColor'
                className='h-4 w-4 opacity-70'>
                <path d='M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z' />
                <path d='M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z' />
              </svg>
              <input
                type='text'
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Enter a valid email address'
                  }
                })}
                className='grow focus:outline-none focus:ring-0 focus:border-transparent'
                placeholder='Email'
              />
            </label>
            {errors.email && (
              <p className='text-red-500 text-sm'>{errors.email.message}</p>
            )}
          </div>

          <div className='input input-bordered flex items-center gap-2 relative'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fill='currentColor'
              className='h-4 w-4 opacity-70'>
              <path
                fillRule='evenodd'
                d='M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z'
                clipRule='evenodd'
              />
            </svg>
            <input
              type={showPassword ? 'text' : 'password'}
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters long'
                }
              })}
              className='grow focus:outline-none focus:ring-0 focus:border-transparent'
              placeholder='Enter your password'
            />
            <button
              type='button'
              className='absolute right-3 top-1/2 transform -translate-y-1/2'
              onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <FaEyeSlash className='text-gray-400' />
              ) : (
                <FaEye className='text-gray-400' />
              )}
            </button>
          </div>
          {errors.password && (
            <p className='text-red-500 text-sm'>{errors.password.message}</p>
          )}

          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <input
                id='remember-me'
                name='remember-me'
                type='checkbox'
                className='checkbox checkbox-primary'
              />
              <label
                htmlFor='remember-me'
                className='ml-2 block text-sm text-gray-700'>
                Remember me
              </label>
            </div>
            <div className='text-sm'>
              <a href='/login' className='font-medium hover:text-primary-focus'>
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type='submit'
              className={`btn btn-primary w-full ${
                isLoading && 'loading loading-spinner'
              }`}>
              {isLoading ? 'Signing in' : 'Sign in'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
