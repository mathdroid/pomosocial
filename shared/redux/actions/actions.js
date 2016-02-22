/* eslint no-unused-vars: 0 */
import * as ActionTypes from '../constants/constants';
import fetch from 'isomorphic-fetch';

const baseURL = typeof window === 'undefined' ? process.env.BASE_URL || (`http://localhost:${(process.env.PORT || 8000)}`) : '';

export function addPomo(pomo) {
  return {
    type: ActionTypes.ADD_Pomo,
    name: pomo.name,
    title: pomo.title,
    content: pomo.content,
    slug: pomo.slug,
    cuid: pomo.cuid,
    _id: pomo._id,
  };
}

export function changeSelectedPomo(slug) {
  return {
    type: ActionTypes.CHANGE_SELECTED_POMO,
    slug,
  };
}

export function addPomoRequest(pomo) {
  return (dispatch) => {
    fetch(`${baseURL}/api/addPomo`, {
      method: 'pomo',
      body: JSON.stringify({
        pomo: {
          name: pomo.name,
          title: pomo.title,
          content: pomo.content,
        },
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    }).then((res) => res.json()).then(res => dispatch(addPomo(res.pomo)));
  };
}


export function addSelectedPomo(pomo) {
  return {
    type: ActionTypes.ADD_SELECTED_POMO,
    pomo,
  };
}

export function getPomoRequest(pomo) {
  return (dispatch) => {
    return fetch(`${baseURL}/api/getPomo?slug=${pomo}`, {
      method: 'get',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    }).then((response) => response.json()).then(res => dispatch(addSelectedPomo(res.pomo)));
  };
}

export function deletePomo(pomo) {
  return {
    type: ActionTypes.DELETE_POMO,
    pomo,
  };
}

export function addPomos(pomos) {
  return {
    type: ActionTypes.ADD_POMOS,
    pomos,
  };
}


export function fetchPomos() {
  return (dispatch) => {
    return fetch(`${baseURL}/api/getPomos`).
      then((response) => response.json()).
      then((response) => dispatch(addPomos(response.pomos)));
  };
}



export function deletePomoRequest(pomo) {
  return (dispatch) => {
    fetch(`${baseURL}/api/deletePomo`, {
      method: 'pomo',
      body: JSON.stringify({
        pomoId: pomo._id,
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    }).then(() => dispatch(deletePomo(pomo)));
  };
}
