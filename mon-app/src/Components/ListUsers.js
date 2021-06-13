import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Axios API is very familair with all browser <> Fetch API

const ListUsers = () => {
  useEffect(() => {
    // you can think of useEffect as Component Did Mount with hooks
    fetchData();
  }, []);

  const [listOfUser, setlistOfUser] = useState([]); // where to store the returned data
  const [error, setError] = useState(null); // where to store the coming errors
  const [loading, setLoading] = useState(false); // set a state to fetch the data after 1 seconde !
  // true:let's paint Loading... :false let's paint the list of users

  const fetchData = async () => {
    // use async to complete the execution of the fonction and get the data!
    setLoading(true);
    setTimeout(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/users") // get the data from the API URL
        .then((res) => {
          setlistOfUser(res.data);
          setLoading(false);
        }) // set our state with the data (data is an array of 10 objects inside the body of the api)
        .catch((err) => setError(err)); // set our state with the error if it comes
    }, 1000);
  };

  return (
    <div className="list-wrapper">
      {console.log(listOfUser)}
      {console.log(error)}
      {loading && <h1>Loading...</h1>}
      {!loading && (
        <div>
          {listOfUser.map((el) => (
            <ul key={el.id} className="list">
              <li style={{ listStyle: "none" }}>
                <Link to={`/listUsers/${el.id}`}>{el.name}</Link>
              </li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListUsers;
