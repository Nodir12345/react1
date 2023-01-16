import React from "react";
import "./block.css"
import stand from '../img/stand.png';
import book1 from '../img/book1.png';
import book2 from '../img/book2.png';
import book3 from '../img/book3.png';
import book4 from '../img/book4.png';

 export const Block = ()=>{
  return<>
      <section class="home" id="home">
    
    <div class="row">

        <div class="content">
            <h3>upto 75% off</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deserunt nostrum accusamus. Nam alias sit necessitatibus, aliquid ex minima at!</p>
            <a href="#" class="btn">shop now</a>
        </div>

        <div class="swiper books-slider">
        <div class="swiper books-slider">
                <div class="swiper-wrapper">
                    <a href="#" class="swiper-slide"><img src={book1} alt="w"/></a>
                    <a href="#" class="swiper-slide"><img src={book2} alt="w"/></a>
                    <a href="#" class="swiper-slide"><img src={book3} alt="w"/></a>
                    <a href="#" class="swiper-slide"><img src={book4} alt="w"/></a>
                </div>
                <img src={stand} class="stand" alt=""/>
            </div>
          
        </div>

    </div>

</section>

  </>
 }