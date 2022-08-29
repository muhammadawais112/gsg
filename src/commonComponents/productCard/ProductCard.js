
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../store/ProductSlice.js';
import { useState, useEffect } from 'react';
import { AiFillStar } from "react-icons/ai";
import imgAdd from "../../assets/addt.png"
import "../productCard/ProductCard.css"




import axios from 'axios';


function ProductCard() {
    const { data, status } = useSelector((state) => state.product)

    const [findData, setFindData] = useState([]);







    const dispatch = useDispatch()












    useEffect(() => {
        dispatch(fetchProduct())



    }, [])


    // Cart Now


    const createCart = async (id, name, price) => {








        await axios.post(`${process.env.REACT_APP_BASEURL}/carts/createCart`, {
            product: id,
            quantity: "1",
            name: name,
            price: price,




        }).then((result2, err) => {
            console.log(result2);
            alert("Add to Cart")
            if (err) {
                console.log(err);
            }

        }



        ).catch(err => { console.log(err); })
    }




    return (
        <div>
            <div className="container">


                <div className="row ">

                    {
                        data.map((cat, i) => {

                            return <div className='col-lg-3 col-sm-12 col-md-3  mt-3  '  >
                                <div className="card" id='styleCard' >
                                    <img src={cat.image} className="card-img-top" alt="cardImages" />
                                    <div className="card-body">

                                        <div  >
                                            <p><b>Title:</b>  {cat.title}</p>
                                            <p><b>Price:</b>  {cat.price}</p>
                                            <h6><b>Location:</b> {cat.location}</h6>




                                        </div>
                                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} >                                <span><AiFillStar />4.7 50-79 min</span>
                                            <p onClick={() => createCart(cat._id, cat.name, cat.price)}>
                                                <img src={imgAdd} />
                                            </p>
                                        </div>



                                    </div>

                                </div>
                            </div>


                        })
                    }


                </div>


            </div>


        </div>





    )
}


export default ProductCard




