// Hooks usado en contactForm
import { useState } from "react";
import { helperHttp } from "../helpers/helperHttp";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  // ===========================================================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // ============================================================
  // este evento maneja los errores de validacion pero támbien puedes usar el submit para disparar el evento de error
  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  // ============================================================
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if (Object.keys(errors).length === 0) {
      alert("Enviando Formulario");
      setLoading(true);
      helperHttp()
        .post("https://formsubmit.co/ajax/richard_allcca_llano@hotmail.com", {
          body: form,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          setLoading(false);
          setResponse(true);
          setForm(initialForm);
          setTimeout(() => setResponse(false), 3500);
        });
    } else {
      return;
    }
  };

  // un useHook es una funcion que retorna un objeto
  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
