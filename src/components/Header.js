import { Link } from "react-router-dom";
import logo from './assets/logo.svg';
import Search from './Search.js'
import Avatar from '@mui/material/Avatar';
import { BiMenu } from "react-icons/bi";



function Header({play,setPlay}) {
    function setHomepage() {
        setPlay("Lamborghini")

    }
    return(
        <div className='header'>
            {/* <Link to='/'> */}
            <img className="logo" src={logo} alt="logo" onClick={setHomepage}/>
            {/* </Link> */}
            <div className='header-middle'>
            <Search play={play} setPlay={setPlay}/>
            </div>
            <div className='header-end'>
            <a className="wish-link" href="/">Fulfill a wish</a>
            <a className="test-link" href="/carousel">Fulfill a wish</a>
            <div className='menu-wrap'>
            <div className='menu'>
            <BiMenu/>
            </div>
            
            <Avatar alt="Guest" src="/static/images/avatar/1.jpg" sx={{
                height: 35,
                width: 35,
                }}/>
            
            </div>
            </div>
        </div>
    )
}
export default Header