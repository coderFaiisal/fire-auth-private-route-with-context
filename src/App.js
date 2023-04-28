import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./layout/Main";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Orders from "./components/Orders/Orders";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        {
          path: "/home",
          element: (
            <PrivateRoute>
              <Home></Home>
            </PrivateRoute>
          ),
        },
        {
          path: "/orders",
          element: (
            <PrivateRoute>
              <Orders></Orders>
            </PrivateRoute>
          ),
        },
        { path: "/register", element: <Register></Register> },
        { path: "login", element: <Login></Login> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
