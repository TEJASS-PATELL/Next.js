const DataFetchServer = async ({ searchParams }) => {

    const SearchParams = await searchParams;
    const userName = SearchParams.name;

    const res = await fetch(`https://api.genderize.io/?name=${userName}`);
    const data = await res.json();
    console.log(data);

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.title}>User Details</h2>

                <p><strong>Name:</strong> {data.name}</p>
                <p><strong>Gender:</strong> {data.gender}</p>
                <p><strong>Probability:</strong> {data.probability}</p>
            </div>
        </div>
    )
}

export default DataFetchServer;

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f4f4",
    },
    card: {
        backgroundColor: "#fff",
        padding: "20px 30px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        width: "300px",
        textAlign: "center",
    },
    title: {
        marginBottom: "15px",
    },
};