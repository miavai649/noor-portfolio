import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { FaImage, FaTrash, FaTimes, FaPlus, FaPlusCircle } from 'react-icons/fa'
import { useAddProjectMutation } from '../redux/features/project/projectApi'
import toast from 'react-hot-toast'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const AddProjectModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [thumbnail, setThumbnail] = useState(null)
  const [thumbnailPreview, setThumbnailPreview] = useState('')
  const [technologies, setTechnologies] = useState([])
  const [currentTech, setCurrentTech] = useState('')
  const [features, setFeatures] = useState([])
  const [currentFeature, setCurrentFeature] = useState('')
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm()

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => {
    setIsModalOpen(false)
    reset()
    setThumbnail(null)
    setThumbnailPreview('')
    setTechnologies([])
    setFeatures([])
    setCurrentTech('')
    setCurrentFeature('')
  }

  const handleThumbnailChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      setThumbnail(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setThumbnailPreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
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

  const addFeature = () => {
    if (currentFeature.trim() && !features.includes(currentFeature.trim())) {
      setFeatures([...features, currentFeature.trim()])
      setCurrentFeature('')
    }
  }

  const removeFeature = (feature) => {
    setFeatures(features.filter((f) => f !== feature))
  }

  const [handleAddProject, { isLoading }] = useAddProjectMutation()

  const onSubmit = async (data) => {
    const formData = new FormData()

    const projectData = {
      ...data,
      technologies,
      features
    }

    formData.append('payload', JSON.stringify(projectData))

    if (thumbnail) {
      formData.append('thumbnail', thumbnail)
    }

    try {
      const res = await handleAddProject(formData)

      if ('error' in res) {
        toast.error('Failed to create project', { duration: 2000 })
      } else {
        toast.success('Project created successfully', { duration: 2000 })
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
        <span className='align-middle'>Add Project</span>
      </button>

      {isModalOpen && (
        <div className='modal modal-open'>
          <div className='modal-box w-11/12 max-w-5xl'>
            <h3 className='font-bold text-2xl mb-6'>Add New Project</h3>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
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
                <label className='label' htmlFor='shortDescription'>
                  <span className='label-text'>Short Description</span>
                </label>
                <input
                  type='text'
                  id='shortDescription'
                  {...register('shortDescription', {
                    required: 'Short description is required'
                  })}
                  className='input input-bordered w-full'
                />
                {errors.shortDescription && (
                  <span className='text-error text-sm'>
                    {errors.shortDescription.message}
                  </span>
                )}
              </div>

              <div>
                <label className='label' htmlFor='longDescription'>
                  <span className='label-text'>Long Description</span>
                </label>
                <textarea
                  id='longDescription'
                  {...register('longDescription', {
                    required: 'Long description is required'
                  })}
                  className='textarea textarea-bordered w-full h-32'></textarea>
                {errors.longDescription && (
                  <span className='text-error text-sm'>
                    {errors.longDescription.message}
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
                <label className='label' htmlFor='features'>
                  <span className='label-text'>Features</span>
                </label>
                <div className='flex flex-wrap gap-2 mb-2'>
                  {features.map((feature, index) => (
                    <div key={index} className='badge badge-secondary gap-2'>
                      {feature}
                      <button
                        type='button'
                        onClick={() => removeFeature(feature)}>
                        <FaTimes size={12} />
                      </button>
                    </div>
                  ))}
                </div>
                <div className='flex gap-2 items-center'>
                  <input
                    type='text'
                    id='features'
                    value={currentFeature}
                    onChange={(e) => setCurrentFeature(e.target.value)}
                    className='input input-bordered flex-grow'
                    placeholder='e.g. Real-time updates'
                  />
                  <button
                    type='button'
                    onClick={addFeature}
                    className='btn btn-sm btn-circle btn-secondary flex items-center justify-center'>
                    <FaPlus className='text-lg' />
                  </button>
                </div>
              </div>

              <div>
                <label className='label' htmlFor='thumbnail'>
                  <span className='label-text'>Thumbnail Image</span>
                </label>
                <div className='flex items-center justify-center w-full'>
                  <label
                    className='flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100'
                    htmlFor='thumbnail'>
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
                      id='thumbnail'
                      accept='image/*'
                      onChange={handleThumbnailChange}
                      className='hidden'
                    />
                  </label>
                </div>
              </div>

              {thumbnailPreview && (
                <div className='relative w-full h-48'>
                  <img
                    src={thumbnailPreview}
                    alt='Thumbnail Preview'
                    className='w-full h-full object-cover rounded-lg'
                  />
                  <button
                    type='button'
                    onClick={() => {
                      setThumbnail(null)
                      setThumbnailPreview('')
                    }}
                    className='absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full'>
                    <FaTrash size={12} />
                  </button>
                </div>
              )}

              <div>
                <label className='label' htmlFor='githubLink'>
                  <span className='label-text'>GitHub Link</span>
                </label>
                <input
                  type='url'
                  id='githubLink'
                  {...register('githubLink', {
                    required: 'GitHub link is required'
                  })}
                  className='input input-bordered w-full'
                />
                {errors.githubLink && (
                  <span className='text-error text-sm'>
                    {errors.githubLink.message}
                  </span>
                )}
              </div>

              <div>
                <label className='label' htmlFor='liveLink'>
                  <span className='label-text'>Live Link</span>
                </label>
                <input
                  type='url'
                  id='liveLink'
                  {...register('liveLink', {
                    required: 'Live link is required'
                  })}
                  className='input input-bordered w-full'
                />
                {errors.liveLink && (
                  <span className='text-error text-sm'>
                    {errors.liveLink.message}
                  </span>
                )}
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <label className='label' htmlFor='startDate'>
                    <span className='label-text'>Start Date</span>
                  </label>
                  <Controller
                    name='startDate'
                    control={control}
                    rules={{ required: 'Start date is required' }}
                    render={({ field }) => (
                      <DatePicker
                        selected={field.value}
                        onChange={(date) => field.onChange(date)}
                        className='input input-bordered w-full'
                        dateFormat='yyyy-MM-dd'
                      />
                    )}
                  />
                  {errors.startDate && (
                    <span className='text-error text-sm'>
                      {errors.startDate.message}
                    </span>
                  )}
                </div>
                <div>
                  <label className='label' htmlFor='endDate'>
                    <span className='label-text'>End Date</span>
                  </label>
                  <Controller
                    name='endDate'
                    control={control}
                    rules={{ required: 'End date is required' }}
                    render={({ field }) => (
                      <DatePicker
                        selected={field.value}
                        onChange={(date) => field.onChange(date)}
                        className='input input-bordered w-full'
                        dateFormat='yyyy-MM-dd'
                      />
                    )}
                  />
                  {errors.endDate && (
                    <span className='text-error text-sm'>
                      {errors.endDate.message}
                    </span>
                  )}
                </div>
              </div>

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

export default AddProjectModal
