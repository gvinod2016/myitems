
// css
import './small-cart.css'
import Additem from '../add-compound/add-item'

export default function SmallCart(props) {
    const { row } = props


    return (
        <>
            <div className='small-card'>
                <div className='card-img'>
                    <img src={row.image} className="card-img-top" alt="..." />
                    <div className='rewive'></div>
                </div>
                <div className="row justify-content-between m-0 p-2">
                    <div className='col-8 p-0'>
                        <h6 className="card-title m-0">{row.name}</h6>
                        <p>Price : <span>{row.price}</span></p>
                    </div>
                    <div className='col-4 p-0'>
                        <Additem quantity={row.quantity}></Additem>
                    </div>
                </div>
            </div >
        </>
    )
}