import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <h1>Welcome to the Web5 VC Demo</h1>
            <Link to="/employer">Employer Page</Link>
            <br />
            <Link to="/employee">Employee Page</Link>
        </div>
    );
}
