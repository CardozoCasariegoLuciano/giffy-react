import { useTrendings } from "../../hooks/useTrendings";
import Category from "../Category/Category";

const TrendingContent = () => {
  const trends = useTrendings();

  return (
    <>
      <Category title="Trendings" options={trends} />
    </>
  );
};

export default TrendingContent;
