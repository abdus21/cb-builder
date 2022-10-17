import React from 'react'
import { Link } from 'react-router-dom';
import TemplateImg from '../../assets/images/one.png'
import TopNav from '../../components/TopNav/TopNav';



const Home = () => {
  return (
    <>
       <TopNav/>
      <div className="container">
        <div className="row">
          <div className="col-md-5"></div>
          <div className="col-md-7">
            <Link to='/template-one'><img className='w-25' src={TemplateImg} alt="" /></Link>
          </div>
        </div>
      </div>
     
    </>
  )
}

export default Home