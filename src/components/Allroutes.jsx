import { Route, Routes } from "react-router-dom"
import { BrandHRX } from "./BrandHRX"
import { BrandRoadster } from "./BrandRoadster"
import { Home } from "./Home"
import { Typecotton } from "./Typecotton"
import { Typenocotton } from "./Typenocotton"

export const Allroutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home></Home>} ></Route>
            <Route path="/typecotton" element={<Typecotton></Typecotton>}></Route>
            <Route path="/typenocotton" element={<Typenocotton></Typenocotton>}></Route>
            <Route path="/brandhrx" element={<BrandHRX></BrandHRX>}></Route>
            <Route path="/brandroadster" element={<BrandRoadster></BrandRoadster>}></Route>
            <Route path="/cotton" element={<Typecotton></Typecotton>}></Route>
            <Route path="/nocotton" element={<Typenocotton></Typenocotton>}></Route>
        </Routes>
    )
}