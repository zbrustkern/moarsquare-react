import { Link } from 'react-router-dom'
import postImg from '../../assets/moarsquare-post.png'

const Landing = () => {
  return (
    <main>
      <h1>Welcome to MoarSquare! Because why stop at four?</h1>
      <h3>
      <Link to='signup' >Sign up</Link> for an account to share your check-ins with friends and comment on theirs.
        It's a whole lot more fun inside so go ahead and <Link to='signin' >sign in.</Link>
      </h3>
      < hr/>
      What you're missing:<br />
      <div className='landing-image'>
        <img src={postImg} alt='A moarSquare post with comments'/>
      </div>
      </main>
  );
};

export default Landing;
