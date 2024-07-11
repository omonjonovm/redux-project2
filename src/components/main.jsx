import { useDispatch, useSelector } from "react-redux"
import { Loader } from '../ui'
import { useEffect } from "react"
import ArticleServie from "../service/article"
import { getArticleStart, getArticleSuccess } from "../slice/article"
import ArticleCard from "./article-card"


const Main = () => {
	const dispatch = useDispatch()
	const { articles, isLoading } = useSelector(state => state.article)
	

	const getArticles = async () => {
		dispatch(getArticleStart())
		try {
			const response = await ArticleServie.getArticles()
			dispatch(getArticleSuccess(response.articles))
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getArticles()
	}, [])
	return <div>
		<div className="album py-5 bg-body-tertiary">
			<div>
				{isLoading && <Loader />}
				<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
					{articles.map(item => (
						<ArticleCard item={item} getArticles={getArticles} />
					))}
				</div>
			</div>
		</div></div>
}

export default Main
