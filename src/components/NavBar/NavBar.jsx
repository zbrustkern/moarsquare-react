import { Link } from 'react-router-dom';
import { AuthedUserContext } from '../../App';
import { useContext } from 'react';
import MSlogo from '../../assets/MS-logo.jpeg';

const NavBar = ({ handleSignout }) => {
  const user = useContext(AuthedUserContext);
  return (
    <>
      {user ? (
        <nav>
            <ul>
              <li>
                <Link to="/">
                  <div className='nav-pic'>
                    <img src={MSlogo} alt='MoarSquare-Logo' height={30}/>
                  </div>
                  <div className='nav-text'>
                    Home
                  </div>
                </Link>
              </li>
              <li>
                <Link to='' onClick={handleSignout}>
                  <div className='nav-pic'>
                      <img src={MSlogo} alt='MoarSqaure-Logo' height={30}/>
                  </div>
                  <div className='nav-text'>
                    Sign Out
                  </div>
                </Link>
              </li>
            </ul>
        </nav>
      ) : (
        <nav>
          <ul>
            <li>
              <Link to="/signin">
                <div className='nav-pic'>
                  <img src={MSlogo} alt='MoarSquare-Logo' height={30}/>
                </div>
                <div className='nav-text'>
                  Sign In
                </div>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <div className='nav-pic'>
                  <img src={MSlogo} alt='MoarSquare-Logo' height={30}/>
                </div>
                <div className='nav-text'>
                  Sign Up
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};
export default NavBar;
