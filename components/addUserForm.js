import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { BiPlus } from "react-icons/bi";
import Success from "./success";
import Error from "./error";
import { addUser, getUsers } from "@/lib/helper";

function AddUserForm({ formData, setFormData }) {
  //useReducer first function;second initial state
  const [visible, setVisible] = useState(false);
  const queryClient = useQueryClient();
  const addMutation = useMutation(addUser, {
    onSuccess: () => {
      queryClient.prefetchQuery("users", getUsers);
    },
  });

  const handleSUbmit = (e) => {
    e.preventDefault();
    if (Object.keys(formData).length == 0) return setVisible(true);

    let { firstname, lastname, email, salary, date, status } = formData;

    const model = {
      name: `${firstname} ${lastname}`,
      avatar: `https://randomuser.me/api/portraits/men/${Math.floor(
        Math.random() * 10
      )}.jpg`,
      email,
      salary,
      date,
      status: status ?? "Active",
    };

    addMutation.mutate(model);
  };

  if (addMutation.isLoading) return <div>Loading</div>;
  if (addMutation.isError) return <Error message={addMutation.error.message} />;
  if (addMutation.isSuccess) return <Success message={"Added successfull"} />;

  return (
    <>
      <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSUbmit}>
        <div className="input-type">
          <input
            type="text"
            onChange={setFormData}
            name="firstname"
            placeholder="First Name"
            className="border w-full px-5 py-3 focus:outline-none rounded-md"
          />
        </div>
        <div>
          <input
            type="text"
            onChange={setFormData}
            name="lastname"
            placeholder="Last Name"
            className="border w-full px-5 py-3 focus:outline-none rounded-md"
          />
        </div>
        <div>
          <input
            type="text"
            name="email"
            onChange={setFormData}
            placeholder="Email"
            className="border w-full px-5 py-3 focus:outline-none rounded-md"
          />
        </div>
        <div>
          <input
            type="text"
            onChange={setFormData}
            name="salary"
            placeholder="Salary"
            className="border w-full px-5 py-3 focus:outline-none rounded-md"
          />
        </div>
        <div>
          <input
            type="date"
            onChange={setFormData}
            name="date"
            placeholder="Date"
            className="border px-5 py-3 focus:outline-none rounded-md"
          />
        </div>
        <div className="flex gap-1 items-center">
          <div className="form-check">
            <input
              type="radio"
              name="status"
              value="Active"
              onChange={setFormData}
              id="radioDefault1"
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            />
            <label htmlFor="radioDefault1">Active</label>
          </div>
          <div>
            <input
              type="radio"
              name="status"
              onChange={setFormData}
              value="Inactive"
              id="radioDefault2"
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            />
            <label htmlFor="radioDefault2">Inactive</label>
          </div>
        </div>
        <div className="flex items-center gap-x-1">
          <button className="flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">
            Add{" "}
            <span className="px-1">
              <BiPlus size={24} />
            </span>
          </button>
          {visible && (
            <div className="text-red-500">Fill the text fields...</div>
          )}
        </div>
      </form>
    </>
  );
}

export default AddUserForm;
