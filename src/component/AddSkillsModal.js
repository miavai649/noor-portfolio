import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaImage, FaTrash, FaPlusCircle } from 'react-icons/fa'

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
    setImageFile('') // Clear image on modal close
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

  const onSubmit = (data) => {
    const formData = { ...data, image: imageFile }
    console.log(formData)
    closeModal() // Close modal on submit
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
                <label className='label' htmlFor='type'>
                  <span className='label-text'>Type</span>
                </label>
                <input
                  id='type'
                  {...register('type', { required: 'Type is required' })}
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
                <div className='relative mt-4'>
                  <img
                    src={imagePreview}
                    alt='Logo Preview'
                    className='w-full h-32 object-cover rounded-lg'
                  />
                  <button
                    type='button'
                    onClick={removeImage}
                    className='absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full'>
                    <FaTrash size={12} />
                  </button>
                </div>
              )}

              <div className='modal-action'>
                <button type='submit' className='btn btn-primary'>
                  Add Skill
                </button>
                <button
                  type='button'
                  className='btn text-gray-600'
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
