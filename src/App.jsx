
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faLock,faEye} from '@fortawesome/free-solid-svg-icons'
function App() {
  return (
    <>
      <div className='login'>
        <img src='./image.jpg' alt='login image'/>
        <h1>Login</h1>
        <span className='span'>
          <FontAwesomeIcon className='icon' icon={faEnvelope} style={{color: "#009eff",}} />
          <input type="text" placeholder='Email ID'/>
        </span>
        <span className='span'>
          <FontAwesomeIcon className='icon' icon={faLock} style={{color: "#009eff",}} />
          <input type="text" placeholder='Password' />
          <FontAwesomeIcon className='icon' icon={faEye} style={{color: "#009eff",}} />
        </span>
        <button className='borderLessbtn'>Forgot Password ?</button>
        <button className='loginbtn'>Login</button>
        <h5>
        <span>OR</span></h5>
        <button className='googleloginbtn' endI><i style={{color: "#009eff",marginRight:"0.25rem"}} className="fa-brands fa-google icon "></i> Login with Google</button>
        <span className='registerbtn'>New to Logistics ? <button className='borderLessbtn'>Register</button></span>
      </div>
    </>
  );
}

export default App;
