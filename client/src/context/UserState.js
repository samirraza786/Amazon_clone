import UserContext from "./UserContext";
import { useState } from "react";

const UserState = (props) => {
    const [user, setUser] = useState(null || JSON.parse(localStorage.getItem("user"))|| null); //if user then set user else null, parse because in localStorage it is in string format
    const [products, setProducts] = useState([]);
    // loading bar
    const [progress, setProgress] = useState(0);

    return (
        <UserContext.Provider value={{ user, setUser,products,setProducts,progress,setProgress}}>
            {props.children}
        </UserContext.Provider>
    )
}
export default UserState;