import React from 'react'

const Login = () => {
  return (
    <div>
      <form class="form">
    <div class="flex">
      <div class="login color">Login</div>
      <label class="color">Username :</label>
      <input type="text" class="input">
      <label class="color">Password :</label>
      <input type="password" class="input"> 
      <button class="">Log-in</button>
      <br>
      <div class="color align">Don't have account? <span class="span">Sign-Up</span></div>
    </div>
</form>
    </div>
  )
}

export default Login
