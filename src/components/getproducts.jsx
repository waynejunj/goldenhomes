import { useState, useEffect } from "react"; // for state management
import axios from "axios"; // For API Access
import { useNavigate } from "react-router-dom"; // For link to other component
import Footer from "./footer";
import Carousel from "./Carousel/carousel";

const Getproducts = () => {

    // Initialize Hooks
    const [products, setProducts] = useState([]);  // Default to empty array instead of a string
    const [loading, setLoading] = useState(""); // For loading message
    const [error, setError] = useState(""); // error message hook
    const navigate = useNavigate()

    
    // Specify image location URL
    const img_url = "https://racquel123.pythonanywhere.com/static/images/"
    
    const getproducts = async() => {
        setLoading("Please wait, We are retrieving the products .."); // Set loading message when fetching starts
        try {
            const response = await axios.get("https://racquel123.pythonanywhere.com/api/get_products")
            setProducts(response.data)
            setLoading("")
        }
        catch(error) {
            setLoading("")
            setError("Oops sth went wrong!!!")    
        }
    }

    // Call getproducts on Use Effect
    useEffect(() => {
       getproducts()
    }, []); // empty dependency array ensures this runs only once when the component mounts

    const [search, setSearch] = useState("");

    const filtered_products = products.filter((product) =>
      product.product_name.toLowerCase().includes(search.toLowerCase()) ||
      product.product_description.toLowerCase().includes(search.toLowerCase)
    );

    return (
      <div className="row ">

        <div className="mt-2">
          <Carousel/>
        </div>

        <h1 className="mt-3 text-info fw-bold display-5 ">Available Properties</h1>

        <div className="row justify-content-center mt-3 mb-3">
          <input
            className="form-control w-50"
            type="search"
            placeholder="Search Properties..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          
        </div>

        {/* Bind Error Messages */}
          <div className="mx-2 my-2">
            {loading}
            {error}
          </div>

        {/* Map over products and display them */}
        {filtered_products.map((product) => (
            <div className="col-md-3 d-flex mb-4">  {/* Added d-flex and mb-4 for consistent spacing */}
            <div className="card shadow-sm h-100 w-100">  {/* Added h-100 and w-100 */}
              <div className="product-img-container" style={{height: "200px", overflow: "hidden"}}>
                <img 
                  src={img_url + product.product_photo} 
                  alt={product.product_name} 
                  className="product_img w-100 h-100 object-fit-cover"
                />
              </div>
          
              {/* Product Details */}
              <div className="card-body d-flex flex-column">  {/* Added flex column */}
                <h5 className="text-primary mb-2" style={{minHeight: "3rem"}}>
                  {product.product_name.slice(0,30)}
                </h5>
                <p className="text-muted flex-grow-1" style={{minHeight: "3rem"}}>  {/* Added flex-grow-1 */}
                  {product.product_description.slice(0,30)} ...
                </p>
                <div>
                  <b className="text-warning"> 
                    <span className="text-dark">KES</span> {product.product_cost}
                  </b>
                </div>
                <button 
                  className="btn btn-info mt-2 w-100"
                  onClick={() => navigate("/makepayment", {state: {product}})}
                >
                  Buy Now!
                </button>
              </div>
            </div>
          </div>
        ))}

        <Footer/>
        
    </div>
    );
}

export default Getproducts;