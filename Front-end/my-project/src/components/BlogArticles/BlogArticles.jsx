// import BlogArticlesItems from './BlogArticlesItems';
// import './blogComponent.css'

import BlogArticlesItems from "./BlogArticlesItems"

const BlogArticles = () => {
    return (
        <div className="max-w-screen-lg mx-auto p-4 f">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <BlogArticlesItems />
                <BlogArticlesItems />
                <BlogArticlesItems />

            </div>
        </div>
    )
}

export default BlogArticles