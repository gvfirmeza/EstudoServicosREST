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

        setUpdateData({
          id: response.data.id,
          nome: response.data.nome,
          email: response.data.email
        });

      })
      .catch(error => {
        console.error(error);
      });
  };

  const [updateData, setUpdateData] = useState({
    id: '',
    nome: '',
    email: ''
  });

  const handleUpdate = () => {
    axios.put(`http://localhost:8080/medicos`, updateData)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setUpdateData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const [createData, setCreateData] = useState({
    nome: '',
    email: '',
    crm: '',
    especialidade: ''
  });

  const handleCreate = () => {
    axios.post('http://localhost:8080/medicos', createData)
      .then(response => {
        console.log(response);
        // Limpar os campos do formulário após a criação bem-sucedida
        setCreateData({
          nome: '',
          email: '',
          crm: '',
          especialidade: ''
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleCreateChange = event => {
    const { name, value } = event.target;
    setCreateData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <body className="App-main">

      <h2>Listar Médico</h2>
      <input id="getinput" type="number"></input>
      <button onClick={handleGet}>Get</button>

      <br />

      {responseData && (
        <div>
          <p>ID: {responseData.id}</p>
          <p>Nome: {responseData.nome}</p>
          <p>Email: {responseData.email}</p>
          <p>CRM: {responseData.crm}</p>
          <p>Especialidade: {responseData.especialidade}</p>
        </div>
      )}

      <br />

      <h2>Atualizar Médico</h2>
      <label>ID: </label>
      <input id="updateId" type="number" name="id" value={updateData.id} onChange={handleChange} readOnly></input><br />
      <label>Nome: </label>
      <input type="text" name="nome" value={updateData.nome} onChange={handleChange}></input><br />
      <label>Email: </label>
      <input type="text" name="email" value={updateData.email} onChange={handleChange}></input>
      <button onClick={handleUpdate}>Update</button>

      <br />

      <h2>Deletar Médico</h2>
      <input id="deleteinput" type="number"></input>
      <button onClick={handleDelete}>Delete</button>

      <br />

      <h2>Criar Médico</h2>
      <label>Nome: </label>
      <input type="text" name="nome" value={createData.nome} onChange={handleCreateChange}></input><br />
      <label>Email: </label>
      <input type="text" name="email" value={createData.email} onChange={handleCreateChange}></input><br />
      <label>CRM: </label>
      <input type="text" name="crm" value={createData.crm} onChange={handleCreateChange}></input><br />
      <label>Especialidade: </label>
      <input type="text" name="especialidade" value={createData.especialidade} onChange={handleCreateChange}></input>
      <button onClick={handleCreate}>Criar</button>

    </body>
  );

}

export default FuncDelete;
