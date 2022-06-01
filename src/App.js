import './App.scss';
import React, { useState, useEffect, useReducer } from 'react';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Form from './components/Form/form';
import Results from './components/Results/results';
import historyReducer, { clearAction, addAction } from './components/Reducer/reducer';

const initialState = {
  methodUrl: [], results: [],
};

function App() {
  const [result, setResult] = useState();
  const [method, setMethod] = useState('get');
  const [headers, setHeader] = useState();
  const [Object, setObject] = useState();
  const [loading, setLoad] = useState(false);
  const [state, dispatch] = useReducer(historyReducer, initialState);
  const [error, setError] = useState('');
  function handleObjectChange(e) {
    setObject(e.target.value);
  }
  function handleClick(e) {
    for (let i = 0; i < state.methodUrl.length; i++) {
      if (state.methodUrl[i] === e.target.innerText) {
        setResult(state.results[i])
        setHeader('')
      }
    }
  }
  function updateMethod(e) {
    setMethod(e.target.value);
  }
  async function onSubmit(url) {
    setLoad(true);
    let headerObject = {};
    let response;
    let data;
    try {
      if (method === 'get') {
        response = await fetch(url, {});
        data = await response.json();
      }
      if (method === 'post') {
        response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          Object: Object,
        });
        data = await response.json();
      }
      if (method === 'put') {
        response = await fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          Object: Object,
        });
      }
      if (method === 'delete') {
        response = await fetch(url, {
          method: 'DELETE',
        });
      }
    } catch (e) {
      setError(e.message);
    }
    const headers = response.headers.entries();
    for (let pairs of headers) {
      headerObject[pairs[0]] = pairs[1];
    }
    if (method) {
      setResult(data);
      setHeader(headerObject);
      dispatch(addAction({ method: method, url: url, results: data || error }));
    } else {
      setResult('Plz select method');
    }
    setLoad(false);
  }
  function handleClear(e) {
    e.preventDefault();
    dispatch(clearAction());
  }
  useEffect(() => {

    setError('')

  }, [result])

  return (
    <>
      <Header />
      <Form onSubmit={onSubmit} updateMethod={updateMethod} handleObjectChange={handleObjectChange} />
      <Results method={method || ''} url={result || ''} headers={headers || ''} loading={loading} history={state}
       handleClear={handleClear} error={error} handleClick={handleClick} />
      <Footer />
    </>
  );
}

export default App;
