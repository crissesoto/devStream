import { React } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui secondary pointing menu ">
            <Link to="/" className="item">DevStream</Link>
            <div className="right menu">
                <Link to="/" className="item">All streams</Link>
                <div class="item">
                    <div class="ui button">Login with Google</div>
                </div>
            </div>
        </div>
    )
}

export default Header;