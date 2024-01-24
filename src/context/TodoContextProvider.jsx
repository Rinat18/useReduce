import axios from "axios";
import React, { createContext, useReducer } from "react";
import { API } from "../consts/Consts";

export const todoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const INIT_STATE = {
    user: [],
    img: [],
    oneUser: {},
    oneImg: [],
  };
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "USER_READ":
        return { ...state, user: action.payload };
      case "GET_IMAGES":
        return { ...state, img: action.payload };
      case "GET_ONE_USER":
        return { ...state, oneUser: action.payload };
      case "GET_ONE_IMG":
        return { ...state, oneImg: action.payload };
    }
  };
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // ! read
  async function get() {
    const { data } = await axios(`${API}/users`);
    dispatch({ type: "USER_READ", payload: data });
  }
  // ! get one user

  const getOneUser = async (id) => {
    const { data } = await axios(`${API}/users/${id}`);
    dispatch({ type: "GET_ONE_USER", payload: data });
  };
  //   ! get img

  async function getImages() {
    const { data } = await axios(`${API}/photos`);
    dispatch({ type: "GET_IMAGES", payload: data });
  }

  //   ! get id img

  const getOneImg = async (albumId) => {
    const { data } = await axios(`${API}/photos/${albumId}`);
    dispatch({ type: "GET_ONE_IMG", payload: data });
  };

  const values = {
    user: state.user,
    oneUser: state.oneUser,
    getOneUser,
    get,
    oneImg: state.oneImg,
    img: state.img,
    getOneImg,
    getImages
  };

  return <todoContext.Provider value={values}>{children}</todoContext.Provider>;
};

export default TodoContextProvider;
