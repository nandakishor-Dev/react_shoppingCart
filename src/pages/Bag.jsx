import React from 'react'
import { Button, Card, CardContent, CardMedia } from '@mui/material'
import Nav from './Nav'
import './notebook.css'
import {bag} from '../data'
import { useState } from 'react'
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Bag() {
    const Local_Storage = "cartData"
    const [cartData,setCartData]= useState(JSON.parse(localStorage.getItem (Local_Storage))||[])


   
    
const add=(id)=>{

    const bagFData = cartData.filter((readings) =>
    readings.name.includes('Bag')
   
    )
    console.log(bagFData.length);
    

    
    // console.log(id);
    if (bagFData.length > 1) {
        console.log("Bag Purchase Limit Reached");
        toast("Bag Purchase Limit Reached!")

        
    }else{
        const details = bag.filter((reading)=>{

            return reading.id===id
            
        })
        const flt =details[0];
        console.log(flt);
       
       setCartData([...cartData,{...flt}])
    }

  

   



}

useEffect (()=>{
    const oldStorage=JSON.parse(localStorage.getItem(Local_Storage ))
    if (oldStorage){
        setCartData(oldStorage)
    }
},[])



useEffect (()=>{

    localStorage.setItem(Local_Storage, JSON.stringify(cartData) )
},[cartData])
    

  

        
    


  return (
    <div>
 <Nav></Nav>
            <div className="container">
                <div className="bookContainer">
                    <div className="row" id='bagPage'>
                {bag.map((product) => (
                    <Card className='cardP' sx={{ maxWidth: 345 }}>
                        <CardMedia className='cardPic'
                            component="img"
                            alt="..."
                            height="230"
                            image= {product.productImage} />
                        <CardContent>
                            {product.name}

                        </CardContent>
                        <CardContent>
                            {product.desc}

                        </CardContent>



                        <span className='price'>Price: {product.price}</span>  <br />
                        <Button className='addToCart' onClick={()=>add(product.id)} variant="contained" >Add to cart</Button>
                      


                    </Card>
                    ))}
                    </div>
                </div>
            </div>


            <ToastContainer>position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
               </ToastContainer>
    </div>
  )
}
