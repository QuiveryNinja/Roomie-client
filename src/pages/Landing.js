import '../Landing.css';
import React from 'react'
import Logo from '../imgs/favicon.png'
import SearchBar from '../components/SearchBar';
import logo from '../imgs/landing.BKGRD.jpg'
import img1 from '../imgs/tower-bristol-student-accommodation-1.jpeg'
import img2 from '../imgs/london.jpeg'
import img3 from '../imgs/fr.jpeg'
import DATA from '../data/countries.json'



function Landing() {
    const data = DATA;

    return (
        <main>
            <div className="home-landing">
                <img src={logo} alt="" />
                <div className="logo">Roomie</div>
                <div class="landing-text">
                    <h1>Find the home for you</h1>
                </div>
                <div class="home-search">
                    <form class="search-wrapper">
                        <SearchBar placeholder="Search your country" data={DATA} />
                    </form>
                </div>
            </div>
            <div className="section-testimony">
                <div className="testimony-text">
                    <div class="info-text-title">
                        Finding a roof just got
                        <span className='ut'> easier</span>
                    </div>
                    <div class="info-text-content">
                        People from all over the world can share their experience on Roomie so you can find the room that best suits your lifestyle. 
                        And it isn't only about finding the best room, it's also about finding the ones to avoid.
                    </div>
                </div>
                <div className="testimony-images">
                    <div className="test"> <img className="tstImg" src={img1} alt="" /> </div>
                    <div className="test"> <img className="tstImg1" src={img2} alt="" /> </div>
                    <div className="test"> <img className="tstImg2" src={img3} alt="" /> </div>
                </div>
            </div>
            <footer className="footer">
                <div className="f-title">
                    <h1>Browse homes by country</h1>
                </div>
                <hr/>
                <div className="f-countries">
                    {data.map((value, key) => {
                        return(
                            <a className="data" href={value.link} rel="noreferrer">
                                <p> {value.name} </p> 
                            </a>
                            
                        )
                    })}
                </div>
                <div className="contact">
                    <div className='sec-1'>
                        <div className='dwh'>
                            <img className='footer-logo' src={Logo}></img>
                            <div>Roomie</div>
                        </div>
                        <a href='/createpost'>Write a review</a> 
                    </div>
                    
                    
                </div>
            </footer>
            
        </main>
        
    )
}



export default Landing
