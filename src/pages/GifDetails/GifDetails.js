import React from "react";
import Gif from "../../components/Gif/Gif";
import "./gifDetails.css";
import useSingleGif from "../../hooks/useSingleGif";
import Spiner from "../../components/Spiner/Spiner";
import { Redirect } from "wouter";
import { Helmet } from "react-helmet";

const GifDetails = ({ params }) => {
  const { id } = params;
  const { gif, isError, isLoading } = useSingleGif({ id });

  if (isLoading)
    return (
      <>
        <Helmet>
          <title>Cargando...</title>
        </Helmet>
        <Spiner/>;
      </>
    );

  if (isError) return <Redirect to="/404" />;
  if (!gif) return null;

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="GifDetails">
        <Helmet>
          <title>{gif.title} || Giffy</title>
        </Helmet>
      <h3>Gif:</h3>
      <p className="gifDetails_link" onClick={goBack}>
        Go back
      </p>
      <Gif gif={gif} />
    </div>
  );
};

export default GifDetails;
