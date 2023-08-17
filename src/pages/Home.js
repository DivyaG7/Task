import React from 'react';
import { FaComment} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';

function Home() {
  return (
    <>
      <div>
        <header>
          <p>DIVE INTO THE UNIVERSE OF</p>
          <h3>GOLDEN ROYCE DESIGN</h3>
        </header>
        <p>Powerhouse of</p>
        <p>Creativity and Expertise</p>
        <Link to="/IT-services">IT SERVICES AND SOLUTIONS<FiArrowUpRight/></Link>
        <Link to="/buzz">BUZZ - Y - BEE<FiArrowUpRight/></Link>
        <div>
          <FaComment className="comment-icon" style={{marginTop: '370px', marginLeft: '1250px',}} />
        </div>
        <h2 style={{
          fontSize: '14px',
          marginLeft: '1200px',
          marginTop: '20px',
        }}>Help?</h2>
      </div>
    </>

  )
}

export default Home

