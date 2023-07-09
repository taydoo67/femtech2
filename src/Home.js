import './App.css'
import Button from 'react-bootstrap/Button';
import { Outlet, Link } from "react-router-dom";

function Home() {
    return (
        <>
        <div className="Home">
            <div className='item1'></div>
            <div className='item2'></div>
            <div className='item3'>
                <h1>Your Library of Reproductive Health</h1>
                <p>All you need to learn about Menstruation, Contraceptives, Fertility and Hormones.</p>
                <Button variant="link">
                    <Link to="/menu">Learn More</Link>
                </Button>
            </div>
            <div className='item4'></div>
            <div className='item5'>
                <h3>Our Proud Partners</h3>
            </div>
            <div className='item6'>
                <img src='rise.jpg' height="60px"  />
                <img src='yourlife.jpg' height="60px"  />
                <img src='empire.jpg' height="60px"  />
                <img src='bayer.png' height="60px" />
            </div>
        </div>
        </>
    )
}

export default Home