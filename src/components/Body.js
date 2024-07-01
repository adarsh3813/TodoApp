import { useEffect, useState } from "react";

const Body = () => {
  const [message, setMessage] = useState(null);

  const getMessage = async () => {
    const token = localStorage.getItem("token");
    const data = await fetch("http://localhost:8080/home", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const json = await data.json();
    console.log(json);
    setMessage(json);
  };

  useEffect(() => {
    getMessage();
  }, []);
  return (
    <div>
      <div>
        <h1 className="text-4xl">The messsage received: {message}</h1>
      </div>
    </div>
  );
};

export default Body;
