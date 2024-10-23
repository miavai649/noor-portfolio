import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaImage, FaTrash, FaTimes, FaPlus, FaPlusCircle } from 'react-icons/fa'

const AddProjectModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [imageFiles, setImageFiles] = useState([])
  const [imagePreviews, setImagePreviews] = useState([])
  const [technologies, setTechnologies] = useState([])
  const [currentTech, setCurrentTech] = useState('')
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
    setImageFiles([])
    setImagePreviews([])
    setTechnologies([])
    setCurrentTech('')
  }

  const handleImageChange = (e) => {
    const files = e.target.files
    if (files) {
      const newFiles = Array.from(files)
      setImageFiles((prev) => [...prev, ...newFiles])

      newFiles.forEach((file) => {
        const reader = new FileReader()
        reader.onloadend = () => {
          setImagePreviews((prev) => [...prev, reader.result])
        }
        reader.readAsDataURL(file)
      })
    }
  }

  const removeImage = (index) => {
    setImageFiles((prev) => prev.filter((_, i) => i !== index))
    setImagePreviews((prev) => prev.filter((_, i) => i !== index))
  }

  const addTechnology = () => {
    if (currentTech.trim() && !technologies.includes(currentTech.trim())) {
      setTechnologies([...technologies, currentTech.trim()])
      setCurrentTech('')
    }
  }

  const removeTechnology = (tech) => {
    setTechnologies(technologies.filter((t) => t !== tech))
  }

  const onSubmit = (data) => {
    const formData = { ...data, technologies }
    console.log(formData, imageFiles)
    closeModal()
  }

  return (
    <>
      <button
        className='btn btn-primary flex items-center gap-2'
        onClick={openModal}>
        <FaPlusCircle className='text-xl align-middle' />
        <span className='align-middle'>Add Project</span>
      </button>

      {isModalOpen && (
        <div className='modal modal-open'>
          <div className='modal-box w-11/12 max-w-5xl'>
            <h3 className='font-bold text-lg mb-4'>Add New Project</h3>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
              <div>
                <label className='label' htmlFor='title'>
                  <span className='label-text'>Project Title</span>
                </label>
                <input
                  type='text'
                  id='title'
                  {...register('title', { required: 'Title is required' })}
                  className='input input-bordered w-full'
                />
                {errors.title && (
                  <span className='text-error text-sm'>
                    {errors.title.message}
                  </span>
                )}
              </div>

              <div>
                <label className='label' htmlFor='description'>
                  <span className='label-text'>Description</span>
                </label>
                <textarea
                  id='description'
                  {...register('description', {
                    required: 'Description is required'
                  })}
                  className='textarea textarea-bordered w-full h-24'></textarea>
                {errors.description && (
                  <span className='text-error text-sm'>
                    {errors.description.message}
                  </span>
                )}
              </div>

              <div>
                <label className='label' htmlFor='technologies'>
                  <span className='label-text'>Technologies Used</span>
                </label>
                <div className='flex flex-wrap gap-2 mb-2'>
                  {technologies.map((tech, index) => (
                    <div key={index} className='badge badge-primary gap-2'>
                      {tech}
                      <button
                        type='button'
                        onClick={() => removeTechnology(tech)}>
                        <FaTimes size={12} />
                      </button>
                    </div>
                  ))}
                </div>
                <div className='flex gap-2 items-center'>
                  <input
                    type='text'
                    id='technologies'
                    value={currentTech}
                    onChange={(e) => setCurrentTech(e.target.value)}
                    className='input input-bordered flex-grow'
                    placeholder='e.g. React'
                  />
                  <button
                    type='button'
                    onClick={addTechnology}
                    className='btn btn-sm btn-circle btn-primary flex items-center justify-center'>
                    <FaPlus className='text-lg' />
                  </button>
                </div>
              </div>

              <div>
                <label className='label' htmlFor='image'>
                  <span className='label-text'>Upload Images</span>
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
                      multiple
                      accept='image/*'
                      onChange={handleImageChange}
                      className='hidden'
                    />
                  </label>
                </div>
              </div>

              {imagePreviews.length > 0 && (
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4'>
                  {imagePreviews.map((preview, index) => (
                    <div key={index} className='relative group'>
                      <img
                        src={preview}
                        alt={`Preview ${index + 1}`}
                        className='w-full h-32 object-cover rounded-lg'
                      />
                      <button
                        type='button'
                        onClick={() => removeImage(index)}
                        className='absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <FaTrash size={12} />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <div className='modal-action'>
                <button type='submit' className='btn btn-primary'>
                  Add Project
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

export default AddProjectModal
