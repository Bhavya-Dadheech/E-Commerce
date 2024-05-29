import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import LoadingBar from "react-top-loading-bar";
import RoutePath from "./routes/RoutePath";
import { useLocation } from "react-router-dom";
import TopNav from "./components/navigation/TopNav";
import SideNav from "./components/navigation/SideNav";
import { Footer } from "./components/navigation/Footer";
import BottomNav from "./components/navigation/BottomNav";

function App() {
  const [progress, setprogress] = useState(0);
  const location = useLocation();

  return (
    <Provider store={store}>
      <LoadingBar color="#7469B6" progress={progress} onLoaderFinished={() => setprogress(0)} />
      <TopNav />
      <SideNav />
      <div
        className={`${
          location.pathname === "/"
            ? "min-h-[49vh]  sm:my-0 my-14 sm:p-12 sm:m-12 p-6 m-3"
            : "sm:min-h-[49h] sm:my-0 my-14  sm:p-12 sm:mx-12 p-6 mx-2"
        }`}
      >
        <RoutePath setProgress={setprogress} />
      </div>
      <Footer />
      <div className="fixed w-full bottom-0 sm:hidden">
        <BottomNav />
      </div>
    </Provider>
  );
}

export default App;
