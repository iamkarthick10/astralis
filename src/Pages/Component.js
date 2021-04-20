import React, {useState} from 'react'
import './component.css'




export default function Component({data}) {
    const [qty, setQty] = useState(1);
    const [kg,setKg] = useState(1);

    const quantityHandler = (event) => {
        if(typeof(parseInt(event.target.value)) == "number") {
            setQty(Math.floor(event.target.value));
        }
    }
    const kgHandler = (event) => {
        if(typeof(parseInt(event.target.value)) == "number") {
            setKg(event.target.value)
        }
    }

    return (
        <div className="m-4 col-xs-12 col-sm-6 col-md-4 col-lg-3 board ">
            <div>
                <img className="imgProduct" src={data.url}  />
            </div>
            <i className="mb-1 pl-2 fas fa-circle" style={{color:"green"}}></i>
            <p className="mb-1 text-muted">{data.category}</p>
            <p className="font-weight-bold">{data.title}</p>
            <div className="greyBoard">
                <select name="Quantity" className="mb-1 selection" onChange={kgHandler}>
                    <option value="1">1Kg - {data.pricePerKg}</option>
                    <option value="0.5">500g - {data.pricePerKg/2}</option>
                </select>
                <p className="ml-2 text-muted">MRP  <del>Rs.{data.actualPrice}</del> <strong className="text-dark">Rs.{data.pricePerKg * qty * kg}</strong></p>
                <div className="ml-2 input-group">
                    <span className="input-group-addon"><i className="text-muted">Qty</i></span>
                    <input onChange={quantityHandler} value={qty} className="ml-2 qtyInput" />
                    <button className="ml-3 btn btn-warning cartButton"> ADD <i className="fas fa-shopping-cart"></i></button>
                </div>
            </div>

            
        </div>
    )
}
