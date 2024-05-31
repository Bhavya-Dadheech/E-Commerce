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
import { SnackbarProvider, MaterialDesignContent } from "notistack";
import styled from "styled-components";

function App() {
  const [progress, setprogress] = useState(0);
  const location = useLocation();

  const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
    "&.notistack-MuiContent": {
      backgroundColor: "#2D7738",
      zIndex: "1000"
    }
  }));

  return (
    <Provider store={store}>
      <SnackbarProvider
        Components={StyledMaterialDesignContent}
        maxSnack={3}
        autoHideDuration={1500}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <div className="w-full h-full flex flex-col">
          <LoadingBar color="#7469B6" progress={progress} onLoaderFinished={() => setprogress(0)} />
          <TopNav />
          <SideNav />
          <div
            className={`${
              location.pathname === "/"
                ? "min-h-[49vh] sm:my-0 my-14 sm:p-12 sm:m-12 py-6 px-2 m-3"
                : "min-h-[49vh] sm:my-0 my-14 sm:p-12 sm:mx-12 py-6 px-2 mx-2"
            }`}
          >
            <RoutePath setProgress={setprogress} />
          </div>
          <Footer />
          <div className="fixed w-full bottom-0 sm:hidden z-[999]">
            <BottomNav />
          </div>
        </div>
      </SnackbarProvider>
    </Provider>
  );
}

export default App;
