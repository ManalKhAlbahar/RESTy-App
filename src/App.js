import './App.scss';
import React, { useState } from 'react';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Form from './components/Form/form';
import Results from './components/Results/results';


function App() {
  const [result, setResult] = useState();
  const [method, setMethod] = useState();
  const [headers, setHeader] = useState();
  const [Object, setObject] = useState();
  const [loading, setLoading] = useState(false);

  function handleObjectChange(e) {
    setObject(e.target.value);
  }

  function updateMethod(e) {
    setMethod(e.target.value);
  }
  async function onSubmit(url) {
    setLoading(true);
    let headerObject = {};
    let response;
    let data;
    if (method === 'get') {
      try {
        response = await fetch(url, {});
        data = await response.json();
      } catch (err) {
        throw err;
      }
    }
    if (method === 'post') {
      try {
        response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          Object: Object,
        });
        data = await response.json();
      } catch (e) {
        console.log(e);
      }
    }
    if (method === 'put') {
      response = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', },
        Object: Object,
      });
    }
    if (method === 'delete') {
      response = await fetch(url, {
        method: 'DELETE',
      });
    }
    const headers = await response.headers.entries();
    for (let pairs of headers) {
      headerObject[pairs[0]] = pairs[1];
    }
    if (method) {
      setResult(data);
      setHeader(headerObject);
    } else {
      setResult('please select method');
    }
    setLoading(false);
  }

  return (
    <>
      <Header />
      <Form onSubmit={onSubmit} updateMethod={updateMethod} handleObjectChange={handleObjectChange} />
      <Results method={method || ''} url={result || ''} headers={headers || ''} loading={loading} />
      <Footer />
    </>
  );
}

export default App;