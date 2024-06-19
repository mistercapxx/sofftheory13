import { useNavigate, useParams } from "react-router-dom"

const User = () => {
    let navigate = useNavigate()

    return (
        <div>
            <button onClick={() => navigate("./")}>Go Back One</button>
            <button onClick={() => navigate("../")}>Go Back Two</button>
        </div>
    )
    // let params = useParams()
    // return (
    //     <h1>{params.userId}</h1>
    // )
}