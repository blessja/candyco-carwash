import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import StaffLogin from '../pages/StaffLogin'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header className='header'>
      <div className='logo'>
        <img src={require('../images/android-chrome-192x192.png')} alt="" />
        <Link to='/' style={{fontSize: '1.8rem', fontWeight: 'bold', color: 'black', textDecoration: 'none'}}>CandyCo Car Wash</Link>
      </div>
      <div>
        {/* <StaffLogin/> */}
      </div>
      <ul>
        {user ? (
          <li>
            <button className='btn' onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (
          <>
            {/* <li>
              <Link to='/staff/login'>
              <FaSignInAlt />
                Staff Login
              </Link>
            </li> */}
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login Customer
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Register Customer
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Header
