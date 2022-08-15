export const fetchUser = async (userObj, setUser) => {
  try {
    let path = "user";
    let method = "POST";
    if (userObj.email) {
      path += "/signup";
    }
    if (!userObj) {
      method = "GET";
    }
    const res = await fetch(`${process.env.REACT_APP_REST_API}${path}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("myToken")}`,
      },
      body: JSON.stringify(userObj),
    });
    const data = await res.json();
    if (data.msg === "Success") {
      setUser(data.user);
      localStorage.setItem("myToken", data.token);
    } else {
      throw new Error({ msg: "Could not log in" });
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (userObj, setUser) => {
  try {
    for (let key in userObj) {
      if (!userObj[key]) {
        delete userObj[key];
      }
    }
    const res = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("myToken")}`,
      },
      body: JSON.stringify(userObj),
    });
    const data = await res.json();
    if (data.msg === "Success") {
      setUser(data.user);
    } else {
      throw new Error({ msg: "Did not update" });
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (setUser) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${localStorage.getItem("myToken")}` },
    });
    const data = await res.json();
    if (data.msg === "Success") {
      setUser();
    } else {
      throw new Error({ msg: "Did not delete" });
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchPhotos = async (setPhotos) => {
  try {
    const res = await fetch("https://picsum.photos/v2/list");
    const data = await res.json();
    setPhotos(data);
  } catch (error) {
    console.log(error);
  }
};

export const createContent = async (user, url) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_REST_API}content`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user, url }),
    });
    const data = await res.json();
    if (data.msg === "Success") {
      return;
    } else {
      throw new Error({ msg: "Unable to add" });
    }
  } catch (error) {
    console.log(error);
  }
};
