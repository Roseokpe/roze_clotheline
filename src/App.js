import {Routes, Route} from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

const Shop = () => {
    return (
        <div>
            <div>
                <h2>Shop Now</h2>
            </div>
        </div>
    )
}


function App() {
    return (
        <Routes>
            <Route path="/" element ={<Navigation />}>
                <Route index element ={<Home/>} />
                <Route path="shop" element ={<Shop/>} /> 
            </Route>
             
        </Routes>
    ) 

}

export default App;
