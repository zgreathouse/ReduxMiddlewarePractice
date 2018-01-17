const handleAsync = ({ dispatch }) => {
  return next => action => {
    //If the action does not have a payload, or the payload
    //does not have a .then property we don't care about it,
    //send it on
    if (!action.payload || !action.payload.then) {
      return next(action);
    }

    //Make sure the action's promise resolves
    action.payload
      .then(response => {
        const newAction = { ...action, payload: response };
        dispatch(newAction);
      });
  };
}

export default handleAsync;
