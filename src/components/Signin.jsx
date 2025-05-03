import{Link} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Signin=()=>{
    const[email, setEmail]=useState('')
    const[password, setPassword]=useState('')

    // Posting data
    const[loading,setLoading]=useState('')
    const[error, setError]=useState('')
    const[success, setSuccess]=useState('')

    // Defining a Function 'Sign in '
    const submit=async(e)=>{
        e.preventDefault()
        setLoading("Please Wait....")
        try{
            const data= new FormData()
            data.append("email", email)
            data.append("password", password)
            // Use Axios to post Data
            const response=await axios.post("https://racquel123.pythonanywhere.com/api/signin",data)
            setSuccess(response.data.message)
            setLoading("")
        } catch(error) {
            setLoading("")
            setError(error.message)
           
        }
    }
    return(
        <div className='signin-container'>
        <div className="row justify-content-center mt-4">
            <div className="col-md-6 card shadow p-4 col-lg-6">
                <h1 className="text-center" id="signin-heading">SIGN IN</h1>
                 {/* Bind Loading  */}
                 {loading}
                {/* Bind Error  */}
                {error}
                {/* Bind success  */}
                {success}
                <form onSubmit={submit}>
                    <input type="email" placeholder="Enter Your Email Address" required className="form-control" onChange={(e)=>setEmail(e.target.value)}/><br />  
                     {/* bind Email  */}
                     {email}              
                    <input type="password" placeholder="Enter Your Password" className="form-control" onChange={(e)=>setPassword(e.target.value)}/><br />  
                    {/* bind password  */}
                    {password}  
                    <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="rememberMe"/>
                    <label class="form-check-label" for="rememberMe">Remember me</label>  
                    </div>                              
                    <Link to='/'><button type='submit' className='btn btn-primary w-100 btn btn-custom btn-block'>Sign In</button></Link><br /> <br />
                    <p className="text-center">Don't have an account?<Link to='/signup'>Create One</Link></p>
                </form>                    
            </div>            
        </div>
        </div>
    )
}
 


export default Signin