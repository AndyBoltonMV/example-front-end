export const Content = ({ author, image }) => {
  return (
    <div>
      <h5>{author}</h5>
      <img src={image} alt={`Taken by ${author}`} />
    </div>
  );
};
