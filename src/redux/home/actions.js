export const actName = {
  ADD: 'ADD_COUNTER_HOME',
  QUIT: 'QUIT_COUNTER_HOME',
  FETCH_DATA: 'FETCH_DATA_HOME',
  FETCH_DATA_SUCCESS: 'FETCH_DATA_SUCCESS_HOME',
  FETCH_DATA_ERROR: 'FETCH_DATA_ERROR_HOME',
}

export default {
  add: (num) => {
		return (dispatch) => {
			dispatch({
        type: actName.ADD,
        num
      });
		}
  },
  quit: (num) => {
		return (dispatch) => {
			dispatch({
        type: actName.QUIT,
        num
      });
		}
  },
  fetchData: () => {
		return (dispatch) => {
			dispatch({
        type: actName.FETCH_DATA
      });
		}
  },
};
