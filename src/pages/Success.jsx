import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import { Link } from "react-router-dom";

const Success = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <PropagateLoader color="#36d7b7" />
      ) : (
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Order Successful!
          </h2>
          <p className="mb-4">Your order has been successfully placed.</p>
          <Link
            to="/"
            className="text-blue-500 hover:underline"
          >
            Go to Home Page
          </Link>
        </div>
      )}
    </div>
  );
};

export default Success;
