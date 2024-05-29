import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import navigation from "../models/navigation";

const About = lazy(() => import("../components/main/About"));

export default function RoutePath({ setProgress }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/About-Us" element={<About />}></Route>
        {navigation.map((item) => (
          <Route
            key={item.title}
            path={item.path}
            element={
              <Suspense fallback={<>...</>}>
                <item.component setProgress={setProgress} />
              </Suspense>
            }
          ></Route>
        ))}
      </Routes>
    </Suspense>
  );
}
