import { useForm } from "../../hooks/useForm";
import Loader from "./../crud-json-server/Loader";
import Message from "./../crud-json-server/Message";

// ================================================
//  valores iniciales
// ================================================
const initialForm = {
   name: "",
   email: "",
   subject: "",
   comments: "",
};

// ================================================
// ANCHOR - validaciones
// ================================================
// esta funcion podria ir en un helper o en un archivo aparte
const validationsForm = (form) => {
   let errors = {};
   let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
   let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
   let regexComments = /^.{1,255}$/;

   if (!form.name.trim()) {
      errors.name = `El campo "Nombre" es Requerido`;
   } else if (!regexName.test(form.name.trim())) {
      errors.name = "El campo 'Nombre' solo acepta letras y espacios en blanco";
   }

   if (!form.email.trim()) {
      errors.email = `El campo "Email" es Requerido`;
   } else if (!regexEmail.test(form.email.trim())) {
      errors.email = `${form.email} no es "Email" valido`;
   }

   if (!form.subject.trim()) {
      errors.subject = `El campo "Subject" es Requerido`;
   }

   if (!form.comments.trim()) {
      errors.comments = `El campo "Comments" es Requerido`;
   } else if (!regexComments.test(form.comments.trim())) {
      errors.comment = 'El campo "Comments" recibe un maximo de 255 caracteres ';
   }

   return errors;
};

let styles = {
   fontWeight: "bold",
   color: "#dc3545",
};

// ================================================
// ANCHOR - componente
// ================================================
const ContactForm = () => {
   const {
      form,
      errors,
      loading,
      response,
      handleChange,
      handleBlur,
      handleSubmit,
   } = useForm(initialForm, validationsForm);

   return (
      <>
         <h2>Formulario de Contacto</h2>
         <form onSubmit={handleSubmit}>
            <input
               type="text"
               name="name"
               placeholder="Escribe tu Nombre"
               onBlur={handleBlur}
               onChange={handleChange}
               value={form.name}
               required
            />
            {errors.name && <p style={styles}>{errors.name}</p>}
            <input
               type="email"
               name="email"
               placeholder="Escribe tu Email"
               onBlur={handleBlur}
               onChange={handleChange}
               value={form.email}
               required
            />
            {errors.email && <p style={styles}>{errors.email}</p>}
            <input
               type="text"
               name="subject"
               placeholder="Asunto a Tratar"
               onBlur={handleBlur}
               onChange={handleChange}
               value={form.subject}
               required
            />
            {errors.subject && <p style={styles}>{errors.subject}</p>}
            <textarea
               name="comments"
               id=""
               cols="50"
               rows="5"
               placeholder="Escribe tus Comentarios"
               onBlur={handleBlur}
               onChange={handleChange}
               value={form.comments}
               required
            ></textarea>
            {errors.comments && <p style={styles}>{errors.comments}</p>}
            <input type="submit" value="Enviar" />
         </form>
         {loading && <Loader />}
         {response && (
            <Message msg="Los datos han sido enviados" bgColor="#198754" />
         )}
      </>
   );
};
export default ContactForm;

//? NOTAS
//* eslint-disable-next-line -> utilizalo cuando una el slint te tome una linea como falla aun sin tener una falla real(a veces falla el slint)
