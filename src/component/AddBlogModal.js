import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { FaImage, FaPlus, FaPlusCircle, FaTimes, FaTrash } from 'react-icons/fa'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import uploadImageToCloudinary from '../utils/uploadImageToCloudinary'

const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' }
      ],
      ['link', 'image'],
      ['clean']
    ],
    handlers: {
      image: function () {
        const input = document.createElement('input')
        input.setAttribute('type', 'file')
        input.setAttribute('accept', 'image/*')
        input.click()

        input.onchange = async () => {
          const file = input?.files?.[0]
          if (file) {
            if (file.size > 10485760) {
              return toast.error(
                'File size exceeds 10 MB limit. Please select a smaller file.'
              )
            }
            const toastId = toast.loading('Uploading image...')
            const url = await uploadImageToCloudinary(file)
            if (url) {
              toast.success('Image uploaded successfully', { id: toastId })
              const quill = this.quill
              const range = quill.getSelection()
              if (range) {
                quill.insertEmbed(range.index, 'image', url)
              }
            } else {
              toast.error('Failed to upload image', { id: toastId })
            }
          }
        }
      }
    }
  }
}

const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image'
]

const AddBlogModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [imageFile, setImageFile] = useState(null)
  const [imagePreview, setImagePreview] = useState('')
  const [tags, setTags] = useState([])
  const [currentTag, setCurrentTag] = useState('')
  const [content, setContent] = useState('')
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
    setImageFile(null)
    setImagePreview('')
    setTags([])
    setCurrentTag('')
    setContent('')
  }

  const handleImageChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      setImageFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = () => {
    setImageFile(null)
    setImagePreview('')
  }

  const addTag = () => {
    if (currentTag.trim() && !tags.includes(currentTag.trim())) {
      setTags([...tags, currentTag.trim()])
      setCurrentTag('')
    }
  }

  const removeTag = (tag) => {
    setTags(tags.filter((t) => t !== tag))
  }

  const onSubmit = (data) => {
    const formData = { ...data, tags, content }
    console.log(formData, imageFile)
    closeModal()
  }

  return (
    <>
      <button
        className='btn btn-primary flex items-center gap-2'
        onClick={openModal}>
        <FaPlusCircle className='text-xl' />
        <span>Add Blog</span>
      </button>

      {isModalOpen && (
        <div className='fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4'>
          <div className='bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto'>
            <div className='p-6'>
              <h3 className='text-2xl font-bold mb-6'>Add New Blog</h3>
              <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                <div>
                  <label
                    className='block text-sm font-medium text-gray-700 mb-1'
                    htmlFor='title'>
                    Blog Title
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
                  <label
                    className='block text-sm font-medium text-gray-700 mb-1'
                    htmlFor='description'>
                    Description
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
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Tags
                  </label>
                  <div className='flex flex-wrap gap-2 mb-2'>
                    {tags.map((tag, index) => (
                      <div key={index} className='badge badge-primary gap-2'>
                        {tag}
                        <button type='button' onClick={() => removeTag(tag)}>
                          <FaTimes size={12} />
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className='flex gap-2 items-center'>
                    <input
                      type='text'
                      value={currentTag}
                      onChange={(e) => setCurrentTag(e.target.value)}
                      className='input input-bordered flex-grow'
                      placeholder='e.g. React'
                    />
                    <button
                      type='button'
                      onClick={addTag}
                      className='btn btn-circle btn-primary flex items-center justify-center'>
                      <FaPlus className='text-lg' />
                    </button>
                  </div>
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Cover Image
                  </label>
                  <div className='flex items-center justify-center w-full'>
                    <label
                      className='flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-300'
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
                      alt='Cover Preview'
                      className='w-full h-48 object-cover rounded-lg shadow-md'
                    />
                    <button
                      type='button'
                      onClick={removeImage}
                      className='absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors duration-300'>
                      <FaTrash size={16} />
                    </button>
                  </div>
                )}

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Content
                  </label>
                  <ReactQuill
                    theme='snow'
                    value={content}
                    onChange={setContent}
                    modules={modules}
                    formats={formats}
                    className='h-64 mb-12'
                  />
                </div>

                <div className='flex justify-end gap-4 mt-10'>
                  <button type='submit' className='btn btn-primary'>
                    Submit
                  </button>
                  <button
                    type='button'
                    onClick={closeModal}
                    className='btn btn-outline'>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default AddBlogModal