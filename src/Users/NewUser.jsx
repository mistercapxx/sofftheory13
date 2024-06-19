import { useOutletContext } from "react-router-dom";

const NewUser = () => {
    const [abobaUser] = useOutletContext()
    return (
        <div>
            <h1>Welcome {abobaUser} !</h1>
            <form/>
        </div>
    )
}