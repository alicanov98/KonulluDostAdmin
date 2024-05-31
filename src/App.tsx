import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyPersonalAccount from "./pages/MyPersonalAccount";
import Home from "./pages/Home";
import Header from "./components/Header";
import Center from "./pages/Center";
import News from "./pages/News";
import CenterAbout from "./pages/CenterAbout";
import VoluntaryDetails from "./pages/VoluntaryDetails";
import CenterVoluntaryDetails from "./pages/CenterVoluntaryDetails";
import NewsDetails from "./pages/NewsDetails";
import SearchResults from "./pages/SearchResults";
import Login from "./components/Login";
import PrivateRoutes from "./utils/PrivateRoutes";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <BrowserRouter>
        <Header/>
      <Routes>
        <Route element={<PrivateRoutes/>}>
          <Route path="/" element={<Home />} />
          <Route path="/centers" element={<Center />} />
          <Route path="/settings" element={<MyPersonalAccount />} />
          <Route path='/news' element={<News/>}/>
          <Route path='News/NewsDetails/:id' element={<NewsDetails/>}/>
          <Route path='/myPersonalAcount' element={<MyPersonalAccount/>}/>
          <Route path='/centerAbout/:id' element={<CenterAbout/>}/>
          <Route path="/voluntary-details/:id" element={<VoluntaryDetails />} />
          <Route path="/CenterVoluntaryDetails/:id/:type" element={<CenterVoluntaryDetails />} />
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="/UserDetails" element={<UserDetails />} />
        </Route>
        <Route path='login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
