import React from 'react'
import style from "./design.module.css"
import Dice from "../Images/Dice.png"
import girl from "../Images/girl.jpeg"

const Design = () => {
  return (
    <section>
        <article>
            <div id={style.img}>
                <img src={Dice} />
            </div>
            <div id={style.txt}>
                <h3>Equillibrium #3429</h3>
                <p>Our Equillibrium collection promotes <br /> balance and calm.</p>
                <div id={style.two}>
                    <span><i class="fa-solid fa-gem"></i>0.041ETH</span>
                    <span><i class="fa-solid fa-clock"></i>3 days left</span>
                </div>
                <div id={style.line}></div>
                <footer>
                    <img src={girl} id={style.girl_img} />
                    <span>Creation of  <b>Jules Wyvern</b></span>
                </footer>
            </div>
        </article>
    </section>
  )
}

export default Design