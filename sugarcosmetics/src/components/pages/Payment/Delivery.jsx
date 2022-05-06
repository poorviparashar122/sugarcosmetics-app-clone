import React from 'react'
import styles from './Delivery.module.css'

function Delivery() {
  return (
    <>
    <img className={styles.img1} src="https://in.sugarcosmetics.com/guestCheckout/topleftcircles75.png" alt="" />
    <div className={styles.container}>
        <button className={styles.button1}>Log In/Sign Up</button>
        <p style={{marginTop : "10px"}}>OR</p>
        <div className={styles.innerdiv1}>
            <img src="https://in.sugarcosmetics.com/guestCheckout/reception.svg" alt="" />
            <p>Continue as a guest</p>
        </div>
        <form>
            <div className={styles.formdiv1}>
                <div>
                    <input type="text" name="name" placeholder='Full Name' />
                    <input type="number" name="number" placeholder='phone number' />
                </div>
                <div>
                    <input type="number" name="flatNumber" placeholder='Flat Number' />
                    <input type="text" name="email" placeholder='Email Id' />
                </div>
                <div>
                    <input type="text" name="address" placeholder='Apartment Address' />
                    <div><input className={styles.special} type="number" name="pincode" placeholder='Zipcode/ Pincode' /><button className={styles.details}>Get Details</button></div>
                </div>
            </div>
            <div className={styles.formdiv2}>
                <div><input type="text" name='state' placeholder='State/ Province' /></div>
                <div><input type="text" name='city' placeholder='City' /></div>
                <div><input type="text" name='country' placeholder='Country' /> </div>
            </div>
            <div className={styles.formdiv3}>
                <div><button className={styles.cancel}>Cancel</button></div>
                <div><button className={styles.save}>Save and use this address</button></div>
            </div>
        </form>
    </div>
    <img className={styles.img2} src="https://in.sugarcosmetics.com/guestCheckout/bottomrightcircles75.png" alt="" />
    </>
  )
}

export default Delivery