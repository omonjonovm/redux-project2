import { useCallback } from "react";
import { useSelector } from "react-redux";

const ValidationError = () => {
  const { error } = useSelector(state => state.auth);

  const errorMessage = useCallback(() => {
    if (!error) return [];
    return Object.keys(error).flatMap(key => {
      return error[key].map(message => `${key}: ${message}`);
    });
  }, [error]);

  return (
    error !== null && errorMessage().map((msg, index) => (
      <div className="alert alert-danger mb-" role="alert" key={index}>
        {msg}
      </div>
    ))
  );
}

export default ValidationError;
