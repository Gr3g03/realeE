import { useDispatch } from "react-redux";
import IUser from "../interfaces/IUser";

export  const useReducer = (data: IUser) => {
    const dispatch = useDispatch()

    dispatch(data)
    return [dispatch];
  }