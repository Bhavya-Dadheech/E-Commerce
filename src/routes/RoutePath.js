import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import navigation from "../models/navigation";
import CircularProgress from "@mui/material/CircularProgress";

const About = lazy(() => import("../components/main/About"));
const Wishlist = lazy(() => import("../components/main/WishList"));
const Cart = lazy(() => import("../components/main/Cart"));

export default function RoutePath({ setProgress }) {
  return (
    <Suspense
      fallback={
        <div className="w-full flex items-center justify-center">
          <CircularProgress />
        </div>
      }
    >
      <Routes>
        <Route path="/About-Us" element={<About />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/cart" element={<Cart />}></Route>

        {navigation.map((item) => (
          <React.Fragment key={item.title}>
            <Route
              path={item.path}
              element={
                <Suspense
                  fallback={
                    <div className="w-full flex items-center justify-center">
                      <CircularProgress />
                    </div>
                  }
                >
                  <item.component setProgress={setProgress} />
                </Suspense>
              }
            />
            {item.subNav &&
              item.subNav.map((subItem) => (
                <Route
                  key={subItem.title}
                  path={subItem.path}
                  element={
                    <Suspense
                      fallback={
                        <div className="w-full flex items-center justify-center">
                          <CircularProgress />
                        </div>
                      }
                    >
                      <subItem.component setProgress={setProgress} />
                    </Suspense>
                  }
                />
              ))}
          </React.Fragment>
        ))}
      </Routes>
    </Suspense>
  );
}
