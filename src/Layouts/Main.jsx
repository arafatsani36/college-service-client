import { Outlet } from "react-router-dom";
import Header from "../Components/Shared/Header/Header";
import Footer from "../Components/Shared/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className=" min-h-[calc(100vh-200px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;