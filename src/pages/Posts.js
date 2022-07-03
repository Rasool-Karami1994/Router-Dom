import React from "react";
const Posts = (props) => {
  const id = props.match.params.id;
  return (
    <>
      <h2>this is post number {id}</h2>
    </>
  );
};

export default Posts;
