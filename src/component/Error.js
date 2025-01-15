import { useRouteError } from "react-router";

const Error =() =>{

    const err = useRouteError();
    console.log(err) // returns an object
    return(
        <div>
            <h1>OOPS! something went wrong</h1>
             <h3>{err.status} : {err.statusText}</h3>
        </div>
    )
}
export default Error;