import { useReducer } from "react";
import { useSelector } from "react-redux";
import AddUserForm from "./addUserForm";
import UpdateUserForm from "./updateUserForm";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

function Form() {
  //useReducer first function;second initial state
  const [formData, setFormData] = useReducer(formReducer, {});
  const formId = useSelector((state) => state.app.client.formId);

  return (
    <div className="container mx-auto py-5">
      {!formId
        ? AddUserForm({ formData, setFormData })
        : UpdateUserForm({ formId, formData, setFormData })}
    </div>
  );
}

export default Form;
