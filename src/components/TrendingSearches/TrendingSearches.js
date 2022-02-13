import React, {Suspense} from "react";
import { useNearScreen } from "../../hooks/useNearScreen";
import Spiner from "../Spiner/Spiner"

const TrendingContent = React.lazy(
  () => import("./TrendingContent")
);

const LazyTrendings = () => {
  const { isNearScreen, nearRef } = useNearScreen({ distance: "200px" });

  return <div ref={nearRef}>
    <Suspense fallback={<Spiner/>}>
      {isNearScreen ? <TrendingContent /> : <Spiner/>}
    </Suspense>
  </div>;
};

export default LazyTrendings;
