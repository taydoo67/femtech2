import './menstruation.css'
import Button from 'react-bootstrap/Button';

function Menstruation() {
    return (
        <div className='Mens'>
            <Button variant="primary" style={{ marginTop: '10px' }}>Back</Button>
            <h2>Menstrual Cycle</h2>
            <iframe 
                width="320" 
                height="320" 
                src="https://www.youtube.com/embed/zcvo9VLVHWc" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
            </iframe>
            <h2>Period Hygiene</h2>
            <iframe 
                width="320" 
                height="320" 
                src="https://www.youtube.com/embed/kmWbOC8Fbb0" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe>
        </div>
    )
}

export default Menstruation;