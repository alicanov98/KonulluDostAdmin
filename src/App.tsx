import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyPersonalAccount from "./pages/MyPersonalAccount";
import Home from "./pages/Home";
import Header from "./components/Header";
import Center from "./pages/Center";
import News from "./pages/News";
import CenterAbout from "./pages/centerAbout";
import VoluntaryDetails from "./pages/VoluntaryDetails";

function App() {
  return (
    <BrowserRouter>
        <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/centers" element={<Center />} />
        <Route path="/settings" element={<MyPersonalAccount />} />
          <Route path='/news' element={<News/>}/>
          <Route path='/myPersonalAcount' element={<MyPersonalAccount/>}/>
          <Route path='/centerAbout' element={<CenterAbout/>}/>
          <Route path="/voluntary-details/:id" element={<VoluntaryDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
