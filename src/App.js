import { Route, Routes } from "react-router-dom";
import Home from "./route/home/home.component";
import Navigation from "./route/navigation/navigation.component";
import SignIn from "./route/sign-in/sign-in.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="signIn" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
