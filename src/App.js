import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.less";
import Admin from "./components/features/Admin/Admin";
import Customer from "./components/features/Customer/Customer";
import Login from "./components/features/User/Login/Login";
import Register from "./components/features/User/Register/Register";
import { getAllUser } from "./slices/usersSlice";
import "./styles/style.less";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUser());
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/admin" component={Admin} />
          <Route path="/" component={Customer} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
