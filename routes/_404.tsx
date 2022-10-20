const NotFound = () => {

    return (
        <div>
            <div style={{textAlign: "center"}}>
                <h1 style={{marginBottom: 10}}>stop right there!</h1>
            </div>

            <div style={{textAlign: "center"}}>
                <img src="/images/shocked.png" />
            </div>

            <div style={{textAlign: "center", marginRight: 10, marginLeft: 10}}>
                Seems like the resource you requested is invalid or you don't have permission to access it.
            </div>
        </div>
    );
}

export default NotFound;