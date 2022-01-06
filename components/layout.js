import Header from "./header";
import Footer from "./footer";
import { useRouter } from "next/router";

import { useState, useMemo, useEffect } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

function Layout(props) {
  const router = useRouter();
  const [initialStyle, setInitialStyle] = useState(true);
  let homePage = router.pathname === "/";

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const initial = Math.abs(currPos.y) < 1 && homePage;
      setInitialStyle(initial);
    },
    [initialStyle]
  );

  return useMemo(
    () => (
      <>
        <div
          className="min-w-full h-screen gradient top-0 bottom-0 fixed"
          style={{ zIndex: -1 }}
        ></div>
        <div className="leading-normal tracking-normal text-white min-h-screen relative">
          <Header initialStyle={initialStyle} />
          <main>{props.children}</main>
          <Footer />
        </div>
      </>
    ),
    [initialStyle]
  );
}

export default Layout;
