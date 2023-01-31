import AddUserForm from "./addUserForm";
import UpdateUserForm from "./updateUserForm";
import { useSelector } from "react-redux";
import { useReducer } from "react";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

function Form() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const formId = useSelector((state) => state.app.client.formId);
  console.log(formId);

  return (
    <div className="container mx-auto py-5">
      {!formId
        ? AddUserForm({ formData, setFormData })
        : UpdateUserForm({ formId, formData, setFormData })}
    </div>
  );
}

export default Form;
