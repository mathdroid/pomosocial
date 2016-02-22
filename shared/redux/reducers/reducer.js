import * as ActionTypes from '../constants/constants';

const initialState = { pomos: [], selectedPomo: null };

const pomoReducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionTypes.ADD_POMO :
      return {
        pomos: [{
          name: action.name,
          title: action.title,
          content: action.content,
          slug: action.slug,
          cuid: action.cuid,
          _id: action._id,
        }].concat(state.pomos),
        pomo: state.pomo };

    case ActionTypes.CHANGE_SELECTED_POMO :
      return {
        pomos: state.pomos,
        pomo: action.slug,
      };

    case ActionTypes.ADD_POMOS :
      return {
        pomos: action.pomos,
        pomo: state.pomo,
      };

    case ActionTypes.ADD_SELECTED_POMO :
      return {
        pomo: action.pomo,
        pomos: state.pomos,
      };

    case ActionTypes.DELETE_POMO :
      return {
        pomos: state.pomos.filter((pomo) => pomo._id !== action.pomo._id),
      };

    default:
      return state;
  }
};

export default pomoReducer;
