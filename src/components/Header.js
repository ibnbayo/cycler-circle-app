import logo from './assets/logo.svg';
import Search from './Search.js'
import Avatar from '@mui/material/Avatar';
import { BiMenu } from "react-icons/bi";



function Header() {
    return(
        <div className='header'>
            <img className="logo" src={logo} alt="logo" />
            <div className='header-middle'>
            <Search/>
            </div>
            <div className='header-end'>
            <a className="wish-link" href="/">Fulfill a wish</a>
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