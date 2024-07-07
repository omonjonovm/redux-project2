import axios from './api'
const ArticleServie = {
 async getArticles() {
  const {data} = await axios.get('/articles')
  return data 
 }
}
export default ArticleServie