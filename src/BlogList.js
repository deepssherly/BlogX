import { Link } from 'react-router-dom';
const BlogList = ({blogs,title,handleDelete}) => {
    return (<div className="blog-list">
    <h2>{title}</h2>
          {blogs.map((blog)=>(
            <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <h4>Category : {blog.category}</h4>
            <p>{blog.body}</p>
            <p>Author is {blog.author}</p>
            </Link>
          
            </div>
            ))}
    </div>);
}

export default BlogList;