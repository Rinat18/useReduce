import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { todoContext } from "../context/TodoContextProvider";
const TodoDetails = () => {
  const { id } = useParams();
  const { getOneUser, oneUser, getOneImg, oneImg } = useContext(todoContext);

  useEffect(() => {
    getOneUser(id);
    getOneImg(id);
  }, [id]);
  console.log(oneUser);
  console.log(oneImg);

  return (
    <div>
      <div>{oneUser.name}</div>
      {oneImg.map((elem) => (
        <img src={elem.thumbnailUrl} alt="" />
      ))}
    </div>
  );
};

export default TodoDetails;
