import { baseApi } from '../../api/baseApi'

const postApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // getAllPost: builder.query({
    //   query: ({ searchTerm = '', category = '' }) => {
    //     const params: Record<string, string> = {}

    //     if (searchTerm) {
    //       params.searchTerm = searchTerm
    //     }

    //     if (category) {
    //       params.category = category
    //     }

    //     const queryString =
    //       Object.keys(params).length > 0
    //         ? new URLSearchParams(params).toString()
    //         : ''

    //     return {
    //       url: queryString ? `/post/get-all?${queryString}` : '/post/get-all',
    //       method: 'GET'
    //     }
    //   },
    //   transformResponse: (response: TResponseRedux<IPost[]>) => {
    //     return {
    //       data: response.data
    //     }
    //   },
    //   providesTags: ['posts']
    // }),
    // getSinglePost: builder.query({
    //   query: (params) => {
    //     return {
    //       url: `/post/get-single/${params}`,
    //       method: 'GET'
    //     }
    //   },
    //   transformResponse: (response: TResponseRedux<IPost>) => {
    //     return {
    //       data: response.data
    //     }
    //   },
    //   providesTags: ['posts']
    // }),
    addProject: builder.mutation({
      query: (payload) => {
        return {
          url: `/project/create-project`,
          method: 'POST',
          body: payload
        }
      },
      invalidatesTags: ['project']
    })
    // updatePost: builder.mutation({
    //   query: (payload) => {
    //     return {
    //       url: `/post/${payload.id}`,
    //       method: 'PUT',
    //       body: payload.data
    //     }
    //   },
    //   invalidatesTags: ['posts']
    // }),
    // deletePost: builder.mutation({
    //   query: (payload) => {
    //     return {
    //       url: `/post/${payload.id}`,
    //       method: 'DELETE'
    //     }
    //   },
    //   invalidatesTags: ['posts']
    // })
  })
})

export const { useAddProjectMutation } = postApi
