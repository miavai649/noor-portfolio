import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaImage, FaTrash, FaPlusCircle } from 'react-icons/fa'
import { useAddSkillMutation } from '../redux/features/skills/skillsApi'
import toast from 'react-hot-toast'

const AddSkillsModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [imageFile, setImageFile] = useState('')
  const [imagePreview, setImagePreview] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const openModal = () => setIsModalOpen(true)

  const closeModal = () => {
    setIsModalOpen(false)
    reset()
    setImageFile('')
    setImagePreview('')
  }

  // Handle image change for a single image
  const handleImageChange = (e) => {
    const file = e.target.files[0] // Only pick the first file since it's a single image
    if (file) {
      setImageFile(file) // Store the image file

      // Generate the preview
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result) // Set the image preview
      }
      reader.readAsDataURL(file) // Read the image file
    }
  }

  // Remove the image
  const removeImage = () => {
    setImageFile('') // Clear the image file
    setImagePreview('') // Clear the image preview
  }

  const [handleSkill, { isLoading }] = useAddSkillMutation()

  const onSubmit = async (data) => {
    const formData = new FormData()

    const projectData = {
      ...data
    }

    formData.append('payload', JSON.stringify(projectData))

    if (imageFile) {
      formData.append('logo', imageFile)
    }

    try {
      const res = await handleSkill(formData)

      if ('error' in res) {
        toast.error('Failed to create skill', { duration: 2000 })
      } else {
        toast.success('Skill created successfully', { duration: 2000 })
        closeModal()
      }
    } catch (error) {
      toast.error('Something went wrong', { duration: 2000 })
    }
  }

  return (
    <>
      <button
        className='btn btn-primary flex items-center gap-2'
        onClick={openModal}>
        <FaPlusCircle className='text-xl align-middle' />
        <span className='align-middle'>Add Skills</span>
      </button>

      {isModalOpen && (
        <div className='modal modal-open'>
          <div className='modal-box w-11/12 max-w-5xl'>
            <h3 className='font-bold text-lg mb-4'>Add New Skill</h3>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
              <div>
                <label className='label' htmlFor='name'>
                  <span className='label-text'>Name</span>
                </label>
                <input
                  type='text'
                  id='name'
                  {...register('name', { required: 'Name is required' })}
                  className='input input-bordered w-full'
                />
                {errors.name && (
                  <span className='text-error text-sm'>
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div>
                <label className='label' htmlFor='category'>
                  <span className='label-text'>Category</span>
                </label>
                <input
                  id='category'
                  {...register('category', { required: 'Type is required' })}
                  className='input input-bordered w-full'></input>
                {errors.type && (
                  <span className='text-error text-sm'>
                    {errors.type.message}
                  </span>
                )}
              </div>

              <div>
                <label className='label' htmlFor='image'>
                  <span className='label-text'>Upload Logo</span>
                </label>
                <div className='flex items-center justify-center w-full'>
                  <label
                    className='flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100'
                    htmlFor='image'>
                    <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                      <FaImage className='w-8 h-8 mb-3 text-gray-400' />
                      <p className='mb-2 text-sm text-gray-500'>
                        <span className='font-semibold'>Click to upload</span>{' '}
                        or drag and drop
                      </p>
                      <p className='text-xs text-gray-500'>
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                    <input
                      type='file'
                      id='image'
                      accept='image/*'
                      onChange={handleImageChange}
                      className='hidden'
                    />
                  </label>
                </div>
              </div>

              {imagePreview && (
                <div className='relative mt-4 w-24 h-24'>
                  <img
                    src={imagePreview}
                    alt='Logo Preview'
                    className='w-full h-full object-contain rounded-md'
                  />
                  <button
                    type='button'
                    onClick={removeImage}
                    className='absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full'>
                    <FaTrash size={12} />
                  </button>
                </div>
              )}

              <div className='modal-action flex gap-4 justify-end'>
                <button
                  type='submit'
                  className={`btn bg-primary text-white hover:bg-primary-dark focus:ring focus:ring-primary-light transition-all ${
                    isLoading && 'loading loading-spinner'
                  }`}>
                  {isLoading ? 'Submitting...' : 'Submit'}
                </button>
                <button
                  type='button'
                  className='btn bg-white border border-gray-400 text-gray-600 hover:text-white hover:bg-red-500 hover:border-red-500 focus:ring focus:ring-red-300 transition-all'
                  onClick={closeModal}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default AddSkillsModal
