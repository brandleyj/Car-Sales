export const ADD_FEATURE = "ADD_FEATURE";
export const addFeature = id => ({ type: ADD_FEATURE, payload: id });

export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const removeFeature = id => ({ type: REMOVE_FEATURE, payload: id });
