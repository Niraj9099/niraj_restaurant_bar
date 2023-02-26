import React from 'react'
import { Gujjubiteimg } from './Gujjubiteimg';
import "./Home.css";
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className='home'>
        <Gujjubiteimg />


        <div className='row'>
          <div className='col-md-10 col-12 mx-auto' >
            <div className='row'>
              <div className='col-12 col-md-6 mx-auto'>
                <div className='row'>

                  <div className='col-12 col-md-12 mt-5 text-center' style={{padding: '0'}}>
                    <h1 className='hading'>"Hungry for the Best? <br/> Get Our Amazing Food Offers at Restaurant Bar"</h1>
                  </div>

                  <div className='col-12 mt-3 text-center 'style={{padding: '0'}}>
                    <button className='orderbtn' onClick={() => navigate('/items')}>ORDER  NOW</button>
                  </div>

                </div>
              </div>

              <div className='col-12 col-md-6 text-center' style={{padding: '0'}}>
                <img src='imges/burger.png' className='img-fluid burger' alt='...'/>

              </div>

            </div>

            <div className="vincent_advantages vincent_advantages1 vincent_corners_bottom mt-5">
					<div  className="vincent_parallax_background"></div>
						<div className="vincent_container">
							<div className="row gutters">
								<div className="col col-12 col-md-4">
									<div className="vincent_advantages_item vincent_icon_box text-center">
										<img src="imges/home_img/icon_1.png" alt="..."/>
										<h4 className='mt-3'>Quality Foods</h4>
										<p>Niraj Restaurant prides itself on serving only the highest quality foods, carefully selected and expertly prepared to delight your taste buds.</p>
									</div>
								</div>
								<div className="col col-12 col-md-4">
									<div className="vincent_advantages_item vincent_icon_box text-center">
										<img src="imges/home_img/icon_3.png" alt="..."/>
										<h4 className='mt-3'>Fastest Delivery</h4>
										<p>At Niraj Restaurant, we understand that time is valuable. That's why we strive to provide the fastest delivery service possible for your convenience.</p>
									</div>
								</div>
								<div className="col col-12 col-md-4">
									<div className="vincent_advantages_item vincent_icon_box text-center">
										<img src="imges/home_img/icon_2.png" alt="..."/>
										<h4 className='mt-3'>Original Recipes</h4>
										<p>Our chefs at Niraj Restaurant create authentic and original recipes using fresh ingredients, delivering a truly unique dining experience for our customers.</p>
									</div>
								</div>
							</div>
						</div>
				</div>
          
          </div>
        </div>



        <Footer />
      </div>
    </>
  )
}

export default Home;