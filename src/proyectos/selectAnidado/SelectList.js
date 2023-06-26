import { useFetch } from "./../../hooks/useFetchAbort";

import Message from "./../crud-json-server/Message";
import Loader from "./../crud-json-server/Loader";

// NOTE - El Hook que utilizamos aqui es el de useFecthAbort

const SelectList = ({ title, url, handleChange }) => {
  const { data, error, loading } = useFetch(url);

  if (!data) return null;

  if (error) {
    return (
      <Message
        msg={`Error ${error.status}: ${error.statusText}`}
        bgColor="#dc3545"
      />
    );
  }

  const id = `select-${title}`;
  const label = title.charAt(0).toUpperCase() + title.slice(1);
  const options = data.response[title] || [];
  // const options = ["Richard","Ruth","Freddy"]

  return (
    <>
      <label htmlFor={id}>{label}</label>

      {loading && <Loader />}

      <select name={id} id={id} onChange={handleChange}>
        <option value="">Elige un {title}</option>
        {options.map((el) => (
          <option className="option" key={el} value={el}>{el}</option>
        ))}
      </select>
    </>
  );
};


export default SelectList;
