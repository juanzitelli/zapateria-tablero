const getInitialState = () => {
  if (localStorage.getItem("usuario")) {
    return {
      usuario: localStorage.getItem("usuario"),
      logged: true,
    };
  }
  else {
    return {
      logged: false,
    }
  }
};

export const authenticationReducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case "login":
      return {
        ...action.payload,
        logged: true,
      };
    case "logout":
      return {
        logged: false,
      };
    default:
      return state;
  }
};
