import { useParams } from "react-router-dom";
import ArticleServie from "../service/article";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticleDetailFailure, getArticleDetailStart, getArticleDetailSuccess } from "../slice/article";
import moment from "moment";
import { Loader } from "../ui";

const ArticleDetail = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { articleDetail ,isLoading} = useSelector(state => state.article);

  useEffect(() => {
    const getArticleDetail = async () => {
      dispatch(getArticleDetailStart());
      try {
        const response = await ArticleServie.getArticleDetail(slug);
        dispatch(getArticleDetailSuccess(response.article));
      } catch (error) {
        dispatch(getArticleDetailFailure());
      }
    };
    getArticleDetail();
  }, [slug]);

  return isLoading ? (
    <Loader />
   ) : (
    articleDetail !== null && (
      <div className="container my-5">
        <div className="py-2 mb-4  rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">{articleDetail.title}</h1>
            <p className="col-md-8 fs-4">{articleDetail.description}</p>
            <div className="d-flex gap-3">
              <p>
                <span className="fw-bold">Created at: </span>
                {moment(articleDetail.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
              </p>
            </div>
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-primary text-uppercase">
                    {articleDetail.author.username}
                  </strong>
                  <p className="card-text mb-auto">{articleDetail.author.bio}</p>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <svg
                    className="bd-placeholder-img"
                    width="200"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#fff" dy=".3em" textAnchor="middle">
                      {articleDetail.author.username[0]}
                    </text>
                  </svg>
                </div>
              </div>
            </div>
            <div>
              {articleDetail.body}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ArticleDetail;
