import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  articles: [],
  error:null,
}

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    getArticleStart: state => {
      state.isLoading = true
    },
    getArticleSuccess: (state, action) =>{
      state.isLoading = false
      state.articles = action.payload
    },
    getArticleFailure:(state,action) => {
      state.error = action.payload
    }
  }
})

export const { getArticleStart,getArticleSuccess,getArticleFailure } = articleSlice.actions
export default articleSlice.reducer  