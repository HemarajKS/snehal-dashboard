import { useDispatch } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { fetchData } from "./redux/api/api";
import Header from "./containers/Header/Header";
import Body from "./containers/Body/Body";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const postData = {
      limit: 10,
      offset: 0,
    };
    dispatch(fetchData(postData));
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;
