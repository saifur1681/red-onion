import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Breakfasts from './Pages/Header/Services/Breakfasts/Breakfasts';
import Launchs from './Pages/Header/Services/Launchs/Launchs';
import Dinners from './Pages/Header/Services/Dinners/Dinners';
import MealDetail from './Pages/Header/Services/MealDetail/MealDetail';
import Services from './Pages/Header/Services/Services/Services';
import Header from './Pages/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Home></Home>} ></Route>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/services" element={<Services></Services>} ></Route>
        <Route path="/mealDetail/:mealId" element={<MealDetail></MealDetail>} ></Route>
        <Route path="/breakfast" element={<Breakfasts></Breakfasts>} ></Route>
        <Route path="/launch" element={<Launchs></Launchs>} ></Route>
        <Route path="/dinner" element={<Dinners></Dinners>} ></Route>
        <Route path="*" element={<NotFound></NotFound>} ></Route>
      </Routes>
    </div >
  );
}

export default App;
