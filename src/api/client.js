export async function client(endpoint, { method, body, ...customConfig } = {}) {
  const headers = { "Content-Type": "application/json", mode: "cors" };

  const config = {
    method: method,
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  let data;
  try {
    const url = `https://todo-mn.vercel.app/v1/${endpoint}`;
    const response = await window.fetch(url, config);
    const res = await response.json();
    if (res.success) {
      // Return a result object similar to Axios
      return {
        status: "success",
        data: res.data,
        headers: response.headers,
        url: response.url,
      };
    }
    throw new Error(response.statusText);
  } catch (err) {
    return Promise.reject(err.message ? err.message : data);
  }
}

client.get = function (endpoint, customConfig = {}) {
  return client(endpoint, { ...customConfig, method: "GET" });
};

client.post = function (endpoint, body, customConfig = {}) {
  return client(endpoint, { ...customConfig, method: "POST", body });
};

client.patch = function (endpoint, body, customConfig = {}) {
  return client(endpoint, { ...customConfig, method: "PATCH", body });
};

client.delete = function (endpoint, customConfig = {}) {
  return client(endpoint, { ...customConfig, method: "DELETE" });
};
