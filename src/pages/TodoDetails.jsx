import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { todoContext } from "../context/TodoContextProvider";
const TodoDetails = () => {
    const {id} = useParams()
    const {getOneUser, oneUser,getOneImg,albumId} = useContext(todoContext)

    useEffect(() => {
        getOneUser(id)
        getOneImg(id)
    },[id])
    console.log(oneUser);
    console.log(oneImg);
  return <div>
    <div>{oneUser.name}</div>
<div>{oneImg}</div>
  </div>;
};

export default TodoDetails;
