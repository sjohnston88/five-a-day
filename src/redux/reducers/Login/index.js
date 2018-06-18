import Types from "../../types";

const initialState = { cognitoErrorMessage: "" };

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGIN_PASSWORD_ERROR: {
      return {
        ...state,
        cognitoErrorMessage: "serverErrors.usernamePasswordError"
      };
    }
    case Types.LOGIN_COGNITO_ERROR: {
      return {
        ...state,
        cognitoErrorMessage: "serverErrors.genericSignInError"
      };
    }
    case Types.LOGIN_SUBMIT: {
      return {
        ...state,
        cognitoErrorMessage: ""
      };
    }
    default: {
      return state;
    }
  }
};
