const API_URL = "https://contact-api.dicoding.dev/v1";

// get token method
function getAccessToken() {
  return localStorage.getItem("accessToken");
}

// put access token method
function putAccessToken(accessToken) {
  return localStorage.setItem("accessToken", accessToken);
}

// fetch token method
async function fetchWithToken(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
}

// login method
async function login({ email, password }) {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    alert(responseJson.message);

    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

// register method

async function register({ name, email, password }) {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ name, email, password }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    alert(responseJson.message);

    return { error: true };
  }

  return { error: false };
}

// get user login method
async function getUserLogged() {
  const response = await fetchWithToken(`${API_URL}/users/me`);
  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

// add contact method
async function addContact({ name, tag }) {
  const response = await fetchWithToken(`${API_URL}/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, tag }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false };
}

// get contacts method
async function getContacts() {
  const response = await fetchWithToken(`${API_URL}/contacts`);

  const responseJson = await response.json();

  // handle error
  if (responseJson.status !== "success") {
    return { error: true, data: [] };
  }

  return { error: false, data: responseJson.data };
}

// delete contact method
async function deleteContact(id) {
  const response = await fetchWithToken(`${API_URL}/contacts/${id}`, {
    method: "DELETE",
  });

  const responseJson = await response.json();

  // handle error
  if (responseJson.status !== "success") {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false };
}

export {
  getAccessToken,
  putAccessToken,
  login,
  register,
  getUserLogged,
  addContact,
  getContacts,
  deleteContact,
};
