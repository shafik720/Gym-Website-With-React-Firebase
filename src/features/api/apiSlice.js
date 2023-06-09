import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
    reducerPath : 'api',
    baseQuery : fetchBaseQuery({
        baseUrl : '',
    }),
    tagTypes : [] ,
    endpoints : (builder) => ({})
})


export default apiSlice ; 