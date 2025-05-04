import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div className="container py-5 text-center">
      <div className="card shadow-sm border-0 rounded-lg p-5">
        <div className="card-body">
          <h1 className="text-success mb-4">Payment Successful!</h1>
          <p className="lead mb-4">
            Thank you for your purchase. Your transaction was completed successfully.
          </p>
          <Link to="/properties" className="btn btn-primary">
            Browse More Properties
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;