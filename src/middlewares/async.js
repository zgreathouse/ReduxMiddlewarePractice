const handleAsync = ({ dispatch }) => {
  return next => action => {
    console.log(action);

    next(action);
  };
}

export default handleAsync;
