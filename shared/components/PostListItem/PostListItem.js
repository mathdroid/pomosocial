/* eslint no-unused-vars: 0 */
/* eslint-disable prefer-template*/
import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { Button } from 'amazeui-touch';

function PostListItem(props, context) {
  return (
    <div className="single-post">
      <h3 className="post-title ">
        <Link to={'/post/' + props.post.slug + '-' + props.post.cuid} onClick={props.onClick}>
            {props.post.title}
        </Link>
      </h3>
      <p className="author-name">By {props.post.name}</p>
      <p className="post-desc">{props.post.content}</p>
      <p className="post-action"><Button href="#" onClick={props.onDelete}>Delete Post</Button></p>
      <hr className="divider"/>
    </div>
  );
}

PostListItem.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,

  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PostListItem;
