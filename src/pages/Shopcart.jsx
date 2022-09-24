import React from 'react'
import './shopcart.css'
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import Nav from './Nav';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Shopcart() {
    const Local_Storage = "cartData"
    const [cartData, setCartData] = useState(JSON.parse(localStorage.getItem(Local_Storage)) || [])
    const [Add, Setadd] = useState(JSON.parse(localStorage.getItem(Local_Storage)) || [])
    const [books, Setbooks] = useState([])
    const [sanitize, Setsanitize] = useState([])
    const [sanitizeoffer, Setsanitizeoffer] = useState(0)
    const [booksdiscount, Setbooksdiscount] = useState(0)
    const [promos, Setpromos] = useState([])
    const [promoOffer, setpromooffer] = useState(0)
    const [total, SetTotal] = useState("")
    const [grandtotal, SetGtotal] = useState(0)

    const checkout = () => {

        if ((sanitize.length > 0 && sanitize.length >= 10) && (books.length > 0 && books.length >= 2)) {
            toast("Products Will Reach You Soon")

        } else if ((sanitize.length > 0 && sanitize.length < 10) || (books.length > 0 && books.length < 2)) {

            toast("Purchase Minimum Quantity")
            // toast("Products Will Reach You Soon")

        }
        else {
            // toast("Purchase Minimum Quantity")
            toast("Products Will Reach You Soon")





        }
    }



    const promo = (event) => {

        const name = event.target.name
        const value = event.target.value
        Setpromos({ ...promos, [name]: value })
        console.log(promos);

    }
    const addpromo = (event) => {
        console.log(promos);
        if (promos.code === 'PRIME123') {
            if (promoOffer != 0) {
                console.log("Coupon applied");
                toast("Coupon already applied")

            } else {
                console.log(total);

                setpromooffer(123)
            }



        } else
            console.log("wrong code");


    }


    useEffect(() => {
        const noteData = Add.filter((readings) =>
            readings.name.includes('Notebook')
        );
        Setbooks(noteData)
    }, [])

    useEffect(() => {
        let total = 0;
        cartData.forEach(item => {
            total += item.price;
            SetTotal(total)

        });
    }, [])

    useEffect(() => {
        const sanitizeData = Add.filter((reading) =>
            reading.name.includes('Sanitizer')
        );

        Setsanitize(sanitizeData)

    }, [])

    useEffect(() => {
        let notetotal = 0
        books.forEach(item => {
            notetotal += item.price
            console.log(notetotal);
            if (notetotal > 500) {
                console.log("jj");
                const latestPrice = notetotal * 10 / 100;
                console.log(latestPrice);
                if (latestPrice <= 60) {
                    Setbooksdiscount(latestPrice)

                } else {
                    Setbooksdiscount(60)

                }
                console.log(booksdiscount);
            } else {
                console.log("not greater");
            }
        }
        )
        console.log(booksdiscount);
    }, [books])

    useEffect(() => {

        let sanitotal = 0
        sanitize.forEach(item => {
            sanitotal += item.price
            console.log(sanitotal);
            if (sanitotal > 3000) {
                const latestsanitotal = sanitotal - 100;
                console.log(latestsanitotal);
                Setsanitizeoffer(100)

            }
        })



    }, [sanitize])
    useEffect(() => {
        const g = total - sanitizeoffer - booksdiscount - promoOffer
        SetGtotal(g)

    }, [booksdiscount, sanitizeoffer, promoOffer])



    console.log(booksdiscount);
    console.log("promo", promoOffer);
    console.log("s", sanitizeoffer);
    console.log("total==>", total);
    console.log("gtotal==>", grandtotal);


    return (
        <div className='cart'>
            <Nav></Nav>
            <div className="container">

                <div className="headingTitle"><h3>Your Cart</h3></div>


                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Item</th>
                            <th scope="col">Price</th>



                        </tr>
                    </thead>
                    <tbody>
                        {Add.map((value) => (



                            <tr>
                                {/* <th scope="row">1</th> */}
                                <td> {value.name}</td>
                                <td>
                                    {value.price}

                                </td>

                            </tr>
                        ))}

                    </tbody>
                </table>


                <div className="row">

                    {cartData.length > 0 ? <th className='finalt'>  Total:{total} <span className='totalSpan'></span></th> : ""}<br />



                    {total > 10000 ? <th className='applyPromo'> <TextField size='small' type="text" name='code' label='Apply promo Code' onChange={promo} /><Button type='Submit' onClick={addpromo}> Submit</Button></th> : ""}

                </div>

                <div className="row">
                    {booksdiscount != 0 ? <th className='discount'>  Book Discount:{booksdiscount} <span className='totalSpan'></span></th> : ""}
                </div>
                <div className="row">


                    {sanitizeoffer != 0 ? <th className='discount'>  Sanitizer Discount:{sanitizeoffer} <span className='totalSpan'></span></th> : ""}
                </div>

                <div className="row">





                    {sanitizeoffer != 0 || booksdiscount != 0 ? <div className="gTotal">Grand Total: {grandtotal}</div> : ""}


                </div>
                {cartData.length > 0 ?
                    <div className="row">



                        <th className='finalButton'>  <Button variant='contained' onClick={checkout}>Check Out</Button></th>
                    </div>
                    : <span className='empty'> Your Cart Is Empty!!!</span>}

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
