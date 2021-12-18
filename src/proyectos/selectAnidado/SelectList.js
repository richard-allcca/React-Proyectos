import { useFetch } from "./../../hooks/useFetctBasico";
import Message from "./../crud-json-server/Message";
import Loader from "./../crud-json-server/Loader";

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

  let id = `select-${title}`;
  let label = title.charAt(0).toUpperCase() + title.slice(1);
  let options = data.response[title];

  return (
    <>
      <label htmlFor={id}>{label}</label>
      {loading && <Loader />}
      <select name={id} id={id} onchange={handleChange}>
        <option value="">Elige un {title}</option>
        {data && options.map((el) => <options value={el}>{el}</options>)}
      </select>
    </>
  );
};

export default SelectList;
