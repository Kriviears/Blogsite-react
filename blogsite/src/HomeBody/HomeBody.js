import React, { Component } from "react";
import "./HomeBody.css";
import Article from "../Article/Article";

class Homebody extends Component {
  render() {
    return (
      <>
        <div className="article">
          <h1 className="article-title">This would be one article</h1>
          <span className="article-credits">
            Posted by Author Abstract---Sometime ago
          </span>
          <img
            className="article-banner"
            alt="Some image to figure out here"
            src=""
          />
          <br />
          <p className="article-body">
            Ecce! In pictura est puella, nomine Cornelia. Cornelia est puella
            Romana quae in Italia habitat. Etiam in pictura est villa rustica
            ubi Cornelia aestate habitat. Cornelia est laete quod iam villa
            habitat. Cornelia iam sub arbore sedet et legit. Etiam in pictura
            est altera puella, nomine Flavia. Flavia est puella Romana quae in
            villa vicina habitat. Dum Cornelia legit, Flavia scribit. Laeta est
            Flavia quod Cornelia iam in villa habitat.
          </p>
        </div>
        <Article
          title={"This would be another article"}
          author={"ATL Abstract"}
          date={"Some time"}
          banner={
            "https://pbs.twimg.com/media/EVRIoGSXQAAOJ0a?format=jpg&name=900x900"
          }
          body={
            "Ecce! In pictura est puella, nomine Cornelia. Cornelia est puella Romana quae in Italia habitat. Etiam in pictura est villa rustica ubi Cornelia aestate habitat. Cornelia est laete quod iam villa habitat. Cornelia iam sub arbore sedet et legit. Etiam in pictura est altera puella, nomine Flavia. Flavia est puella Romana quae in villa vicina habitat. Dum Cornelia legit, Flavia scribit. Laeta est Flavia quod Cornelia iam in villa habitat."
          }
        />
      </>
    );
  }
}

export default Homebody;
