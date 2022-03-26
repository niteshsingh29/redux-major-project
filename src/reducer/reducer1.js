let initialState = {
  firstName: "",
  lastName: "",
};
const reducer1 = (state = initialState, action) => {
  // switch (action.type) {
  //     case 'StudentList':

  //         break;

  //     default:
  //         break;
  // }
  console.log(state);
  if (action.type === "StudentList") {
    return { firstName: action.payLoad, lastName: action.payLoad };
  }

  return state;
};
export default reducer1;
