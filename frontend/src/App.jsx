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

  const handleGet = () => {
    let id = document.getElementById("getinput").value;
    axios.get(`http://localhost:8080/medicos?page=` + id)
      .then(response => {
        console.log(response);
        console.log(response.data);
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
        
      </body>
  );

}

export default FuncDelete;
