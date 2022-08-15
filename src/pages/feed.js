import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AddContent } from "../components/addContent";
import { Content } from "../components/content";
import { fetchPhotos } from "../utils";

export const Feed = ({ user }) => {
  const [photos, setPhotos] = useState([]);
  const [addContent, setAddContent] = useState(false);

  useEffect(() => {
    fetchPhotos(setPhotos);
  }, []);

  return (
    <div>
      {!user && <Navigate to="/" />}
      <h2>Welcome {user}</h2>
      <button onClick={() => setAddContent(!addContent)}>Add Image?</button>
      {addContent && <AddContent user={user} />}
      {photos.map((photo, i) => (
        <Content key={i} author={photo.author} image={photo.download_url} />
      ))}
    </div>
  );
};
