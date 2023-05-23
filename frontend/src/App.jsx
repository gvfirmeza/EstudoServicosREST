import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const FuncDelete = () => {

  const handleDelete = () => {
    let id = document.getElementById("deleteinput").value;
    axios.delete(`http://localhost:8080/medicos/` + id)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const [responseData, setResponseData] = useState(null);

  const handleGet = () => {
    let id = document.getElementById("getinput").value;
    axios.get(`http://localhost:8080/medicos/` + id)
      .then(response => {
        setResponseData(response.data); 
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
      <body className="App-main">

        <input id="deleteinput" type="number"></input>
        <button onClick={handleDelete}>Delete</button>

        <input id="getinput" type="number"></input>
        <button onClick={handleGet}>Get</button>
        
        {responseData && (
        <div>
          <p>ID: {responseData.id}</p>
          <p>Nome: {responseData.nome}</p>
          <p>Email: {responseData.email}</p>
          <p>CRM: {responseData.crm}</p>
          <p>Especialidade: {responseData.especialidade}</p>
        </div>
        )}

      </body>
  );

}

export default FuncDelete;
