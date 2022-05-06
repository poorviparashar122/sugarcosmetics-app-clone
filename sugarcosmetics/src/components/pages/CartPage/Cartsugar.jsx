import React, { useEffect, useState } from 'react'
import styles from './sugar.module.css';
import {Link} from 'react-router-dom'
import { CartStorage } from './CartStorage';
const Cartsugar = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cartData'));
    if (items) {
     setItems(items);
    }
  }, []);
  console.log(items);

  return (
    <>
     <div className={styles.carTotal}>
          <div className={styles.homeLogo}>
           <span style={{marginLeft:"35px"}}></span> <i className="fa-solid fa-house"></i> / Cart
         </div>
    
        <div className={styles.itemsDiv}>
              <div className={styles.gap1}>
                  <div className={styles.dummy}>
                  <div style={{justifyContent:"start"}}>
                       <img src="https://in.sugarcosmetics.com/desc-images/shopping_cart.svg"width="20px" height="20px" alt="cartLogo" /> 
                   <span style={{marginLeft:"10px"}}>Order Summary</span>
                  </div>
                  <div>
                      Cart Total : Rs. 
                  </div>
                  </div>
                  <div style={{display:"flex"}} className={styles.dummy}>
                    <div> <img style={{margin:"0px"}} src="https://in.sugarcosmetics.com/desc-images/Offers_price_details.svg" width="20px" height="20px"  alt="offer"/>
                     <span style={{marginLeft:"10px",paddingTop:"-5px"}} >Offers and Price Details</span></div>
                  </div>
              </div>

           <div style={{display:"flex"}} >

                <div className={styles.half}>
                     <div>
                         {/* // maping the cartData */}
                         {items.map((item, index) => {
                            return (
                              <CartStorage
                            
                                key={item.id}
                                {...item}
                            
                              />
                            );
                          })}
                     </div>
                     
                </div>
               <div className={styles.half1} style={{backgroundColor:"whitesmoke",justifyContent:"start"}}>
                
                   <div style={{backgroundColor:"#fff",padding:"10px 20px",marginTop:"15px",}}>
                        <div style={{height:"35px",paddingTop:"10px",textAlign:"start"}}>
                        <img src="https://in.sugarcosmetics.com/desc-images/GiftCard.svg" width="20px" height="20px" ></img>
                        <span style={{marginLeft:"10px"}}>Gift Card/Discount Code</span>
                        <input className={styles.promocode} type="text" />
                        <input className={styles.promosub} type="submit" value="submit" />
                    </div>

                    <div style={{height:"35px",paddingTop:"11px",textAlign:"start"}}>
                        <img src="	https://in.sugarcosmetics.com/desc-images/PriceDetails.svg" width="20px" height="20px" ></img>
                        <span style={{marginLeft:"10px"}}>Price Details</span>
                    </div>
                  
                    
                    <div style={{height:"30px",paddingTop:"5px" ,textAlign:"start"}}>
                        <img src="	https://in.sugarcosmetics.com/desc-images/CartSubtotal.svg" width="15px" height="15px" />
                         <span style={{marginLeft:"10px"}}>Cart Sub Total: </span>
                         <span  style={{marginLeft:"80px"}}>₹ 50000</span>
                    </div>
                      <div style={{height:"30px",paddingTop:"5px" ,textAlign:"start"}}>
                        <img src="https://in.sugarcosmetics.com/desc-images/Shipping_Cost.svg" width="15px" height="15px" />
                         <span style={{marginLeft:"10px"}}>Shipping Cost: </span>
                         <span  style={{marginLeft:"80px"}}>₹ 00.0</span>
                    </div>
                      <div style={{height:"30px",paddingTop:"5px" ,textAlign:"start"}}>
                        <img src="https://in.sugarcosmetics.com/desc-images/Discount.svg" width="15px" height="15px" />
                         <span style={{marginLeft:"10px"}}>Discount Applied: </span>
                         <span  style={{marginLeft:"60px"}}>₹ 00.0</span>
                    </div>
                      <div style={{height:"30px",paddingTop:"5px" ,textAlign:"start"}}>
                        <img src="https://in.sugarcosmetics.com/desc-images/AmountPayable.svg" width="15px" height="15px" />
                         <span style={{marginLeft:"10px"}}>Amount Payable: </span>
                         <span  style={{marginLeft:"65px"}}>₹ 50000</span>
                    </div>
                    <div style={{textAlign:"start"}}>
                        <span >Including ₹ 494.69  in taxes</span>
                    </div>

                   </div>
                   <div style={{marginTop:"20px",display:"flex"}}>
                       <Link to="/" style={{height:"37px",border:"1px solid gray",width:"35%",backgroundColor:"#fff",padding:"7px 0px",boxSizing:"border-box",}}> Continue Shopping</Link>
                       <button style={{height:"37px",border:"1px solid gray",width:"70%",backgroundColor:"darkslategray",color:"#fff"}}><Link to="/payment" >Delivery Information</Link> </button>
                   </div>
               </div>

           </div>

        </div>
     </div>
    </>
  )
}

export default Cartsugar