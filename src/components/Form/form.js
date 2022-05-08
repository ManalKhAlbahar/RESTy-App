import './form.scss';
import { useRef } from 'react';
const Form = function (props) {
  const urlRef = useRef();
  function updateURL(e) {
    e.preventDefault();
    const url = urlRef.current.value;
    props.onSubmit(url);
  }
  return (
    <>
      <form id='form' onSubmit={updateURL}>
      <label >
          <input ref={urlRef} type='tex' id='url-input' placeholder='http://url.example' />
          <input id='submit' type='submit' value='Go ' onSubmit={updateURL} />
          </label>
          <label className="methods">
        <button value="get" onClick={props.updateMethod} >GET</button>
          <button value="post"  onClick={props.updateMethod} >POST</button>
          <button value="put"  onClick={props.updateMethod} >PUT</button>
          <button value="delete"  onClick={props.updateMethod} >DELETE</button>
          </label>
      </form>
    </>
  );
};

export default Form;