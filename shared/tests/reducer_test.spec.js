/* eslint no-unused-vars: 0 */
import expect from 'expect';
import pomoReducer from '../redux/reducers/reducer';
import deepFreeze from 'deep-freeze';
import * as ActionTypes from '../redux/constants/constants';

describe('reducer tests', () => {
  it('action ADD_POMO is working', () => {
    const stateBefore = { pomos: [], pomo: null };
    const stateAfter = { pomos: [{
      name: 'prank',
      title: 'first pomo',
      content: 'Hello world!',
      _id: null,
      cuid: null,
      slug: 'first-pomo',
    }], pomo: null };

    const action = {
      type: ActionTypes.ADD_POMO,
      name: 'prank',
      title: 'first pomo',
      content: 'Hello world!',
      _id: null,
      cuid: null,
      slug: 'first-pomo',
    };
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(stateAfter).toEqual(pomoReducer(stateBefore, action));
  });

  it('action ADD_SELECTED_POMO is working', () => {
    const stateBefore = {
      pomos: [{
        name: 'prank',
        title: 'first pomo',
        content: 'Hello world!',
        _id: null,
        slug: 'first-pomo',

      }],
      selectedPomo: null,
    };

    const stateAfter = {
      pomos: [{
        name: 'prank',
        title: 'first pomo',
        content: 'Hello world!',
        _id: null,
        slug: 'first-pomo',
      }],
      pomo: {
        name: 'prank',
        title: 'first pomo',
        content: 'Hello world!',
        _id: null,
        slug: 'first-pomo',
      },
    };

    const action = {
      type: ActionTypes.ADD_SELECTED_POMO,
      pomo: {
        name: 'prank',
        title: 'first pomo',
        content: 'Hello world!',
        _id: null,
        slug: 'first-pomo',
      },
    };

    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(stateAfter).toEqual(pomoReducer(stateBefore, action));
  });
});
