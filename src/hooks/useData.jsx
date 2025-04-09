import axios from 'axios';
import React, { useReducer } from 'react'

export default function useData(url) {


  const [state, dispatch] = useReducer(reducer, initialState);


  const fetchData = async (url) => {
    dispatch({ type: 'FETCH_LOADING' });
    try {
      const { data: response } = await axios.get(url);
      dispatch({ type: 'FETCH_SUCCESS', payload: response });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: error.message });
    }
  }

  React.useEffect(() => {
    fetchData(url);
  }, [url])

  const { data, loading, error } = state;
  return {
    data,
    loading,
    error
  }
}

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return { ...state, data: action.payload, loading: false, error: null };
    case 'FETCH_ERROR':
      return { ...state, data: null, loading: false, error: action.payload };
    case 'FETCH_LOADING':
      return { ...state, loading: true, error: null };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const initialState = {
  data: null,
  loading: true,
  error: null,
};