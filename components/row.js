import { useSelector, useDispatch } from "react-redux";
import { BiEdit, BiTrashAlt } from "react-icons/bi";
import {
  deleteAction,
  toggleChangeAction,
  updateAction,
} from "@/redux/reducer";

function TableRow({ _id, name, avatar, email, salary, status, date }) {
  const visible = useSelector((state) => state.app.client.toggleForm);
  const dispatch = useDispatch();

  const onUpdate = () => {
    dispatch(toggleChangeAction(_id));
    if (visible) {
      dispatch(updateAction(_id));
    }
  };

  const onDelete = () => {
    if (!visible) dispatch(deleteAction(_id));
  };

  return (
    <tr className="bg-gray-50 text-center">
      <td className="px-17 py-2 flex flex-row items-center">
        <img
          src={avatar || "#"}
          alt=""
          className="h-8 w-8 rounded-full object-cover"
        />
        <span className="text-center ml-2 font-semibold">
          {name || "Unknown"}
        </span>
      </td>
      <td className="px-16 py-2">
        <span>{email || "Unknown"}</span>
      </td>
      <td className="px-16 py-2">
        <span>{salary || "Unknown"}</span>
      </td>
      <td className="px-16 py-2">
        <span>{date || "Unknown"}</span>
      </td>
      <td className="px-16 py-2">
        <span>
          <button>
            <span
              className={`${
                status == "Active" ? "bg-green-500" : "bg-rose-500"
              } text-white px-5 py-1 rounded-full`}
            >
              {status || "Unknown"}
            </span>
          </button>
        </span>
      </td>
      <td className="px-16 py-2 flex justify-around gap-5">
        <button onClick={onUpdate}>
          <BiEdit size={25} color={"rgb(34,197,94)"} />
        </button>
        <button onClick={onDelete}>
          <BiTrashAlt size={25} color={"rgb(244,63,94)"} />
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
