import React from 'react'
import { Link , useNavigate} from 'react-router-dom'










const Loginpage = () => {

  const  Nav = useNavigate();
  const submitdone = () =>{

    
    Nav('/home')
  }
 





  return (

    
    <div className='logcontainer'>
      
     <div class="wrapper_log">
      
        <div class="card-switch_log">
            <label class="switch_log">
               <input type="checkbox" class="toggle_log"/>
               <span class="slider_log"></span>
               <span class="card-side_log"></span>
               <div class="flip-card__inner_log">
                  <div class="flip-card__front_log">
                     <div class="title_log">Log in</div>
                     <form class="flip-card__form_log" action="">
                        <input class="flip-card__input_log" name="email" placeholder="Email" type="email"/>
                        <input class="flip-card__input_log" name="password" placeholder="Password" type="password"/>
                        <button class="flip-card__btn_log" onClick={submitdone} >Let`s go!</button>
                     </form>
                  </div>
                  <div class="flip-card__back_log">
                     <div class="title_log">Sign up</div>
                     <form class="flip-card__form_log" action="">
                        <input class="flip-card__input_log" placeholder="Name" type="name"/>
                        <input class="flip-card__input_log" name="email" placeholder="Email" type="email"/>
                        <input class="flip-card__input_log" name="password" placeholder="Password" type="password"/>
                        <button class="flip-card__btn_log">Confirm!</button>
                     </form>
                  </div>
               </div>
            </label>
        </div>   
   </div>
    </div>
  )
}

export default Loginpage
