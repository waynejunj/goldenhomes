import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
const Signup=()=>{
     // Initialize the states
     const [username, setUsername]=useState("")
     const [email, setEmail]=useState("")
     const [phone, setPhone]=useState("")
     const [address, setAddress]=useState("")
    //  const [customer_photo, setCustomer_photo]=useState("")
     const [password, setPassword]=useState("")

    // //   Define 3 states for posting data
    const[loading, setLoading]=useState("")
    const[error, setError]=useState("")
    const[success, setSuccess]=useState("")
   
    // Define function to post data
    const submit=(e)=>{
        e.preventDefault()  
        setLoading("Please Wait....")
        try {
            const data = new FormData()
            data.append("name",username)
            data.append("email",email)
            data.append("phone",phone)
            data.append("address",address)
            // data.append("customer_photo",customer_photo)
            data.append("password",password)
           


             // Use axios package to post data
             const response= axios.post("https://racquel123.pythonanywhere.com/api/signup",data)
             setSuccess(response.data.message)
            setLoading("")
            } catch (error) {
            setLoading("")
            setError(error.message)
          
            }
        }
    return(
        <div className="row justify-content-center mt-5">
            <div className="col-md-6 card shadow p-4 bg-secondary">
                {/* <div> <img src={image_path+customer_photo.customer_photo} alt="" className="productimage" style={{height:"200px",width:"200px"}}/>    */}
                    <h1 className="text-center" id="A10">SIGN UP</h1>
                    {loading}
                    {success}
                    {error}
                    <form action="" onSubmit={submit}>
                        <label htmlFor="" className="text-info">Username</label><br />
                        <input type="text" className="form-control" placeholder="Enter Username" onChange={(event)=>setUsername(event.target.value)}/><br />
                        {/* bind username  */}
                        {username} <br />
                        <label htmlFor="" className="text-info">Email Address</label><br />
                        <input type="email" className="form-control required " placeholder="Enter Email Address" onChange={(event)=>setEmail(event.target.value)}/><br />
                        {/* bind email  */}
                        {email} <br />
                        <label htmlFor="" className="text-info">Phone</label><br />
                        <input type="number" className="form-control" placeholder="Enter Phone Number" onChange={(event)=>setPhone(event.target.value)}/><br />
                        {/* bind phone  */}
                        {phone} <br />
                        <label htmlFor="" className="text-info">Address</label><br />
                        <input type="text" className="form-control" placeholder="Enter Your Address" onChange={(event)=>setAddress(event.target.value)}/><br />
                        {/* bind address  */}
                        {address} <br />
                        {/* <label htmlFor="" className="text-info">Customer Photo</label><br />                      
                        <input type="file" name="" id="" placeholder="No file chosen" className="form-control" onChange={(event)=>setCustomer_photo(event.target.files[0])} accept="image/*"/> <br />
                        {customer_photo} <br /> <br />                         */}
                        <label htmlFor="" className="text-info">Password</label><br />
                        <input type="password" className="form-control" placeholder="Enter Your Password" onChange={(event)=>setPassword(event.target.value)}/><br />
                        {/* bind password  */}
                        {password} <br />
                        <Link to='/signin'><button type="submit" className="w-100 btn btn-primary">Sign Up</button><br /></Link>
                    </form>
                    <br />
                    <p className="text-center">Already have an account?<Link to='/signin' className="text-info">Sign In</Link></p>
                </div>
            </div>            
        // </div>
    )
}
export default Signup