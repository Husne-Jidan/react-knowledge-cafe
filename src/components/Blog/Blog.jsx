import { CiBookmark } from "react-icons/ci";
const Blog = ({blog,handleBookmark}) => {
   
    const {title,cover_photo,author_img,author,reading_time,posted_date,hashtag} = blog;
    return (
        <div className="mx-10">
            <img src={cover_photo} alt={`Cover picture of the title ${title}`}/>
            <div className="flex justify-between my-3 items-center">

                <div className="flex">
                <img className="w-14 h-14 rounded-[60px]" src={author_img} alt="" />
                <div className="ml-5">
                <h3 className="text-2xl">{author}</h3>
                <p>{posted_date}</p>
                </div>
                </div>
                <div className="flex items-center gap-1">
                <p>{reading_time} min read</p>
                <button onClick={() => handleBookmark(blog)}><CiBookmark /></button>
                </div>
            </div>
            <h2 className="text-3xl mb-5"><span className="text-blue-500">Title</span>: {title}</h2>
            <p>
                {
                    hashtag.map((hash, idx) => <span key={idx} className="mr-3"><a href="">{hash}</a></span>)

                }
            </p>

        </div>
    );
};

export default Blog;