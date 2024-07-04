import { useRouteError } from "react-router-dom";
import "./App.css"

export default function ErrorPage() {
    const error: any = useRouteError();
    console.error(error)

    return (
        <div className="errorPage">
            <h1>404 {error.statusText || error.message}</h1>
            <p>Sorry, something went wrong.</p>
        </div>
    )
}