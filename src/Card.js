import './Card.css';
import simage4 from './simage4.png';
function Card()
{
    return(
        <div className="container">
            <div className='b'>
                <h2 className='c'>New</h2>
            </div>
         <img src={simage4} className="pic"></img>
         <p className='a'>
             Great item name goes here 
         </p>
         <h2 className='paisa'>Rs.1280</h2>
         <h2 className='paisa2'>Rs.1980</h2>
         <div className='second'>
             <p className='text'>Add to cart</p>
         </div>
        </div>
    )
}
export default Card;