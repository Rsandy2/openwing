import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import "./Post.css";
import { deepOrange, green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  square: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  rounded: {
    color: "#fff",
    backgroundColor: green[500],
  },
}));

function Post({ postID, postDESC, imageURL }) {
  const classes = useStyles();
  return (
    <div className="post__container">
      {/* Header -> News Icon + Network Name */}
      <div className="post__header">
        <Avatar
          variant="square"
          className="post__Avatar"
          alt="FOXNEWS"
          src="/static/images/avatar/1.jpg"
        />

        <h2>{postID}</h2>
      </div>

      {/* Image */}
      <img className="post__image" src={imageURL} />
      {/* Description + Text */}
      <div className="post__text">
        <p>{postDESC}</p>
      </div>
    </div>
  );
}

export default Post;
