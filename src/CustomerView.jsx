import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";

function CustomerView() {
  const params = useParams();

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(...searchParams);
  const [customerData, setCustomerData] = useState({});

  useEffect(() => {
    loadUser();
  }, []);
  let loadUser = async () => {
    try {
      let customer = await axios.get(
        `https://63fdfa3d19f41bb9f6587a85.mockapi.io/mockapi/Customers/${params.id}`
      );
      setCustomerData(customer.data);
    } catch (error) {}
  };

  return (
    <div>
      <h1>{customerData.name}</h1>
      <h1>{customerData.position}</h1>
      <h1>{customerData.office}</h1>
      <h1>{customerData.age}</h1>
      <h1>{customerData.startdate}</h1>
      <h1>{customerData.salary}</h1>
    </div>
  );
}

export default CustomerView;
