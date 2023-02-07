import { useDispatch, useSelector } from "react-redux";

export const Home = () => {

  const username = useSelector((state: any) => state.user.value.useername);
  return <h1>This is the Home page{username}</h1>;
};

export default Home;
