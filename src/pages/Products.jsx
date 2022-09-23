import { Card, CardContent, CardMedia } from '@mui/material'
import React from 'react'
import './products.css'
import Nav from './Nav'
import { Link } from 'react-router-dom'

export default function Products() {
    return (
        <div>
            <Nav></Nav>


            <div className="container">

                <span className='productsPage'><h3 className='productsPage'>Our Products</h3></span>


                <div className="cardContainer">
                    <div className="row" id='productsPage'>
                        <Card className='cardFirst' sx={{ maxWidth: 340 }}>
                            <Link to='/notebook'> <CardMedia className='cardPic'
                                component="img"
                                alt="..."
                                height="230"
                                image="assets/images/book.jpg"
                            /> </Link>
                            <CardContent>

                                <span className='proName'>Notebooks</span>
                            </CardContent>

                            <CardContent>
                                <span>Minimum Quantity 2</span>

                            </CardContent>

                        </Card>
                        <Card className='cardFirst' sx={{ maxWidth: 340 }}>
                            <Link to='/sanitizer'> <CardMedia className='cardPic'
                                component="img"
                                alt="..."
                                height="230"
                                image="assets/images/sanitizer.jpg"
                            /> </Link>
                            <CardContent>
                                <span className='proName'>Sanitizer</span>

                            </CardContent>
                            <CardContent>
                                <span>Min Quantity 10</span>

                            </CardContent>

                        </Card>
                        <Card className='cardFirst' sx={{ maxWidth: 340 }}>
                            <Link to='/bag'> <CardMedia className='cardPic'
                                component="img"
                                alt="..."
                                height="230"
                                image="assets/images/bag.jpg"
                            /> </Link>
                            <CardContent>

                                <span className='proName'>Bags</span>
                            </CardContent>

                            <CardContent>
                                <span>Maximum Quantity 2</span>

                            </CardContent>

                        </Card>
                    </div>
                </div>


            </div>

        </div>
    )
}
