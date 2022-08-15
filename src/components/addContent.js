import { useState } from "react";
import { createContent } from "../utils";

export const AddContent = ({ user }) => {
  const [url, setUrl] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    createContent(user, url);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Image URL"
        />
      </form>
    </div>
  );
};
