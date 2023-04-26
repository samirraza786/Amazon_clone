import { useContext, useState } from 'react';
import UserContext from '../../context/UserContext';
import './Navbar.scss';
import logo from '../../assets/amazonLogo.png';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import { Link,useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function Header() {
  const context = useContext(UserContext);
  const { user, setUser } = context;

  // for search filter
  const [text, setText] = useState();
  const [liopen, setLiopen] = useState(false);


  // get all products
  const { products } = context;

  const navigate = useNavigate();


  const getText = (text) => {
    setText(text)
    setLiopen(true);
  }

  const handleClick = () => {
    setLiopen(false);
    setText(""); // clear text value after click
  }



  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    setUser(null);
    navigate('/');
  }
  return (
    <div className='navbar'>
      <div className="left">
        <div className="img-logo">
          <Link className='link' to='/'><img src={logo} alt="logo" /></Link>
        </div>
        <div className="search">
          <input type="text" placeholder='Search Your Products' value={text} onChange={(e) => getText(e.target.value)} />
          <SearchIcon className='search-icon' />


          {/* search filter */}
          {
            text &&
            <List className="extrasearch" hidden={!liopen}>
              {
                products.filter(product => product.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                  <ListItem>
                    <Link className="link" to={`/getproduct/${product._id}`} onClick={handleClick}>
                      {product.longTitle}
                    </Link>
                  </ListItem>
                ))
              }
            </List>
          }
        </div>
      </div>

      <div className="right">

        <Link className='link' to='/buynow'>
          <Button style={{ color: "white", marginLeft: "10px", textTransform: "none" }}>
            {/* if user then number of carts item else 0 */}
            <Badge badgeContent={user ? user.carts.length : 0} color="primary">
              <ShoppingCartOutlinedIcon color="action" style={{ color: "white" }} />
            </Badge>
            <p style={{ marginLeft: "5px", fontSize: "0.8rem" }}>Cart</p>
          </Button>
        </Link>

        {/* Avatar shows first name of logged in user */}
        <Button> <Avatar>{user ? user.name[0].toUpperCase() : <AccountCircleIcon />}</Avatar> </Button>

        {/* if user then show logout else login */}
        {user ?
          (
            <Button endIcon={<LogoutIcon />} style={{ color: "white", textTransform: "none", fontSize: "16px" }} onClick={handleLogout}>Logout</Button>
          ) :
          (
            <Link className='link' to='login'><Button style={{ color: "white", textTransform: "none" }}>Sign In</Button></Link>
          )
        }

      </div>
    </div>
  )
}

export default Header;
