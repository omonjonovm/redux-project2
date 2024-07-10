import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  articles: [],
  articleDetail: null,
  error: null,
}

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    getArticleStart: state => {
      state.isLoading = true
    },
    getArticleSuccess: (state, action) => {
      state.isLoading = false
      state.articles = action.payload
    },
    getArticleFailure: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },
    getArticleDetailStart: state => {
      state.isLoading = true
    },
    getArticleDetailSuccess: (state, action) => {
      state.isLoading = false
      state.articleDetail = action.payload
    },
    getArticleDetailFailure: state => {
      state.isLoading = false
    },
    postArticleStart: state => {
      state.isLoading = true
    },
    postArticleSuccess: state => {
      state.isLoading = false
    },
    postArticleFailure: state => {
      state.isLoading = false 
      state.error = "Error"
    }
  }
})

export const { getArticleStart, getArticleSuccess, getArticleFailure,
  getArticleDetailStart, getArticleDetailSuccess, getArticleDetailFailure,
  postArticleStart, postArticleSuccess, postArticleFailure } = articleSlice.actions
export default articleSlice.reducer  