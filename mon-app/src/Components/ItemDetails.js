import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";

const ItemDetails = ({ match }) => {
  // match is an object (props) of the Parent Link Component
  const [UserDetails, setUserDetails] = useState({}); // where to store the returned data
  const [error, setError] = useState(null); // where to store the coming errors
  const history = useHistory();

  useEffect(() => {
    fetchUser();
    console.log(match);
  }, []);

  const fetchUser = async () => {
    await axios  // await: allows us to wait the resolution of the promise of the axios api. It can only be used within an asynchronous function!
      .get(`https://jsonplaceholder.typicode.com/users/?id=${match.params.id}`) // the url path of the API change the query param value id? by the id of the user anchor
      .then((res) => {
        setUserDetails(...res.data);
      }) // destruction the res we can access to the key value
      .catch((err) => setError(err));
  };

  return (
    <div className="list-wrapper">
      {console.log(UserDetails)}
      {console.log(error)}
      <ul className="list">
        <li className="list-item">
          <div>
            <img
              src="https://www.w3schools.com/w3css/img_avatar2.png"
              className="list-item-image"
            />
          </div>
          <div className="list-item-content">
            <h4>{UserDetails.name}</h4>
            <h4>☛ {UserDetails.username}</h4>
            <h4>✉ {UserDetails.email}</h4>
            <p>☏ {UserDetails.phone}</p>
            <p>🔗 {UserDetails.website}</p>
          </div>
        </li>
        <button onClick={() => history.goBack()}>◄◄</button>
      </ul>
    </div>
  );
};

export default ItemDetails;
