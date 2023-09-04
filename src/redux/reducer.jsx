import { CHANGE_CATEGORY, CHANGE_DIFFICULTY, CHANGE_TYPE, CHANGE_SIZE, CHANGE_SCORE } from "./action";  

const initialState = {
  question_category: "",
  question_difficulty: "",
  question_type: "",
  size: 50,
  score: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CATEGORY:
      return {
        ...state,
        question_category: action.payload,
      };
    case CHANGE_DIFFICULTY:
      return {
        ...state,
        question_difficulty: action.payload,
      };
    case CHANGE_TYPE:
      return {
        ...state,
        question_type: action.payload,
      };
    case CHANGE_SIZE:
      return {
        ...state,
        size: action.payload,
      };
    case CHANGE_SCORE:
      return {
        ...state,
       score: action.payload,
      };
      default:
        return state;
  }
};

export default reducer;
