import { Link, Outlet } from "react-router";

export default function App(){
    return(
        <div>
            <ul>
                <li><Link to="/homepage">homepage</Link></li>
                <li><Link to="/products">products</Link></li>
            </ul>
            <div>
                <h3>Welcome back to this application</h3>
            </div>
            <Outlet/>
        </div>
    )
}