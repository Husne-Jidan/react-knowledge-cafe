

const Blog = ({blog}) => {
   
    const {title} = blog;
    return (
        <div>
            <h2 className="text-3xl">Title:{title}</h2>
        </div>
    );
};

export default Blog;