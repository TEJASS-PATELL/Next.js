// Dynamic Route Segment it is only used in server component

const SinglePage = async ({ params }) => {
    const user = await params;
    console.log(user);

    return <h1>UserName: {user.username}</h1>;
};

export default SinglePage;