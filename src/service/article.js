import axios from './api'
const ArticleServie = {
 async getArticles() {
  const {data} = await axios.get('/articles')
  return data 
 },
 async getArticleDetail(slug) {
  const  {data} = await axios.get(`/articles/${slug}`)
  return data 
 },
}
export default ArticleServie