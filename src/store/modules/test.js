import * as testService from '@/services/testService';

const types = {
  SET_TESTS: 'SET_TESTS',
  SET_TEST_ID: 'SET_TEST_ID',
};

// initState
const initState = {
  tests: [],
};

// mutations
const mutations = {
  [types.SET_TESTS](state, data) {
    state.tests = data;
  },
};

// actions
const actions = {
  GET_TESTS: ({ commit }, {
    projectId, filePath, ref, method, path,
  }) => testService.getTests({
    params: {
      project_id: projectId, file_path: filePath, ref, method, path,
    },
  }).then(({ data }) => {
    commit(types.SET_TESTS, data.data);
  }),
  RUN_TEST: (id) => testService.runTest(id),
  CLEAR_TEST: ({ commit }) => {
    commit(types.SET_TESTS, []);
  },
};
// getters
const getters = {
};

export default {
  namespaced: true,
  state: initState,
  getters,
  actions,
  mutations,
};
