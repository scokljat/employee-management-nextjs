import { useReducer } from "react";
import { BiBrush } from "react-icons/bi";
import Success from "./success";
import Error from "./error";
import { useQuery } from "react-query";
import { getUser } from "@/lib/helper";

function UpdateUserForm({ formId, formData, setFormData }) {
  //useReducer first function;second initial state

  const { isLoading, isError, data, error } = useQuery(["users", formId], () =>
    getUser(formId)
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  console.log(data);
  const { name, avatar, salary, date, email, status } = data;
  const [firstname, lastname] = name ? name.split(" ") : formData;

  const handleSUbmit = (e) => {
    e.preventDefault();
    if (Object.keys(formData).length == 0)
      return console.log("You haven't data");
    console.log(formData);
  };

  // if (Object.keys(formData).length > 0)
  //   //return <Success message={"Data added"} />;
  //   return <Error message={"Data added"} />;

  return (
    <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSUbmit}>
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          defaultValue={firstname}
          name="firstname"
          placeholder="First Name"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
        />
      </div>
      <div>
        <input
          type="text"
          onChange={setFormData}
          defaultValue={lastname}
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
          defaultValue={email}
          placeholder="Email"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
        />
      </div>
      <div>
        <input
          type="text"
          onChange={setFormData}
          defaultValue={salary}
          name="salary"
          placeholder="Salary"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
        />
      </div>
      <div>
        <input
          type="date"
          onChange={setFormData}
          defaultValue={date}
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
            defaultChecked={status == "Active"}
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
            defaultChecked={status !== "Active"}
            value="Inactive"
            id="radioDefault2"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label htmlFor="radioDefault2">Inactive</label>
        </div>
      </div>
      <button className="flex justify-center text-md w-2/6 bg-yellow-400 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">
        Update
        <span className="px-1">
          <BiBrush size={23} />
        </span>
      </button>
    </form>
  );
}

export default UpdateUserForm;
