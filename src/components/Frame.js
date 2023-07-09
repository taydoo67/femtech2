import Card from 'react-bootstrap/Card';
import './Menu.css';
import { Link } from "react-router-dom";

function Frame () {
    return (
        <>
            <div className='item7'>
            <h1>Topics</h1>
            </div>

            <div className='Frame'>
                <div className='item9'>
                    <Card style={{ width: '10.5rem' }}>
                        <Card.Img variant="top" 
                        src="fertility.jpg" 
                        style={{ width: "120px", display: 'block' }} />
                        <Card.Body>
                            <Card.Title>Fertility</Card.Title>
                        </Card.Body>
                    </Card>    
                </div>   

                <div className='item8'>
                    <Link to="/mens">
                    <Card style={{ width: '10.5rem' }}>
                        <Card.Img variant="top" src="Mens.png" style={{ width: "120px" }} />
                        <Card.Body>
                        <Card.Title>Menstruation</Card.Title>
                        </Card.Body>
                    </Card>
                    </Link>
                </div> 
            </div> 

            <div className='Frame2'>
                <div className='item10'>
                    <Card style={{ width: '10.5rem' }}>
                        <Card.Img variant="top" src="contra.png" style={{ width: "120px" }} />
                        <Card.Body>
                            <Card.Title>Contraception</Card.Title>
                        </Card.Body>
                    </Card>   
                </div>

                <div className='item11'>
                    <Card style={{ width: '10.5rem' }}>
                        <Card.Img variant="top" src="hormones.jpg" style={{ width: "120px" }} />
                        <Card.Body>
                            <Card.Title>Hormones</Card.Title>
                        </Card.Body>
                    </Card>       
                </div>    
            </div>       
        </>
    )
}

export default Frame;