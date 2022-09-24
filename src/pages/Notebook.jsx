import { Button, Card, CardContent, CardMedia } from '@mui/material'
import React from 'react'
import Nav from './Nav'
import './notebook.css'
import { book } from '../data'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Notebook() {
    const Local_Storage = "cartData"
    const [cartData, setCartData] = useState(JSON.parse(localStorage.getItem(Local_Storage)) || [])



    const add = (id) => {
        console.log(id);

        const details = book.filter((reading) => {

            return reading.id === id

        })
        console.log(details);
        const flt = details[0];
        console.log(flt);


        setCartData([...cartData, { ...flt }])


    }

    useEffect(() => {
        const oldStorage = JSON.parse(localStorage.getItem(Local_Storage))
        if (oldStorage) {
            setCartData(oldStorage)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(Local_Storage, JSON.stringify(cartData))
    }, [cartData])









    return (
        <div>
            <Nav></Nav>
            <div className="container">
                <div className="bookContainer">
                    <div className="row" id="notesPage">
                        {book.map((product) => (
                            <Card className='cardP' sx={{ maxWidth: 340 }}>
                                <CardMedia className='cardPic'
                                    component="img"
                                    alt="..."
                                    height="230"
                                    image={product.productImage} />
                                <CardContent>
                                    {product.name}

                                </CardContent>
                                <CardContent>
                                    {product.desc}

                                </CardContent>



                                <span className='price'>Price: {product.price}</span>  <br />
                                <Button className='addToCart' onClick={() => add(product.id)} variant="contained" >Add to cart</Button>



                            </Card>
                        ))}
                    </div>
                </div>
            </div>


        </div>
    )
}
