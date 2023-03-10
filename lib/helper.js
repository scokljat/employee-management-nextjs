export const getUsers = async () => {
  const response = await fetch("/api/users");

  return response.json();
};

export const getUser = async (userId) => {
  const response = await fetch(`/api/users/${userId}`);

  return response.json();
};

export async function addUser(formData) {
  try {
    const Options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    const response = await fetch("/api/users", Options);

    return response.json();
  } catch (error) {
    return error;
  }
}

export async function updateUser(userId, formData) {
  try {
    const Options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    const response = await fetch(`/api/users/${userId}`, Options);

    return response.json();
  } catch (error) {
    return error;
  }
}

export async function deleteUser(userId) {
  try {
    const Options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(`/api/users/${userId}`, Options);

    return response.json();
  } catch (error) {
    return error;
  }
}
