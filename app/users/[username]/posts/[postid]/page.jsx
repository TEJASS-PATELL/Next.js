// nested Dynamic Route Segment 

const PostPage = async ({ params }) => {
    const user = await params;

    return (
        <div>
            <h1>UserName: {user.username}</h1>
            <h2>Post ID: {user.postid}</h2>
        </div>
    );
};

export default PostPage;