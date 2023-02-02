import { useQuery, useMutation, useQueryClient } from "react-query";
import { BiBrush } from "react-icons/bi";
import { getUser, updateUser, getUsers } from "@/lib/helper";
import { toggleChangeAction } from "@/redux/reducer";
import { useDispatch } from "react-redux";

function UpdateUserForm({ formId, formData, setFormData }) {
  const dispatch = useDispatch();

  const { isLoading, isError, data, error } = useQuery(["users", formId], () =>
    getUser(formId)
  );
  const queryClient = useQueryClient();
  const updatedMutation = useMutation(
    (newData) => updateUser(formId, newData),
    {
      onSuccess: async () => {
        queryClient.prefetchQuery("users", getUsers);
      },
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  const { name, avatar, salary, date, email, status } = data;
  const [firstname, lastname] = name ? name.split(" ") : formData;

  const handleSUbmit = async (e) => {
    e.preventDefault();
    let username = `${formData.firstname ?? firstname} ${
      formData.lastname ?? lastname
    }`;
    let updated = Object.assign({}, data, formData, { name: username });
    await updatedMutation.mutate(updated);
    dispatch(toggleChangeAction());
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
