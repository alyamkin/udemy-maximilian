import { useRef, useEffect } from "react";
import useHttp from "../../hooks/use-http";
import { addComment } from "../../lib/api";

import classes from "./NewCommentForm.module.css";

const NewCommentForm = (props) => {
  const commentTextRef = useRef();

  const { sendRequest, status, error } = useHttp(addComment);

  const { onAddNewComment } = props;

  useEffect(() => {
    if (status === "completed" && !error) {
      onAddNewComment();
    }
  }, [status, error, onAddNewComment]);

  const submitFormHandler = (event) => {
    event.preventDefault();
    sendRequest({
      comment: { text: commentTextRef.current.value },
      quoteId: props.quoteId,
    });
    // optional: Could validate here

    // send comment to server
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn" type="submit">
          Add Comment
        </button>
      </div>
    </form>
  );
};

export default NewCommentForm;
