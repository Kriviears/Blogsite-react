import React from "react";
import "./Article.css";

class Article extends React.Component {
  render() {
    return (
      <div className="article">
        <h1 className="article-title">{this.props.title}</h1>
        <span className="article-credits">
          Posted by {this.props.author}---{this.props.date}
        </span>
        <br />
        <img
          className="article-banner"
          alt={this.props.title}
          src={this.props.banner}
        />
        <br />
        <p className="article-body">{this.props.body}</p>
      </div>
    );
  }
}

export default Article;
