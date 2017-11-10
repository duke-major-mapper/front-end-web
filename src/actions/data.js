import crud from './helpers/crud';

const url = "http://localhost:8080"

const getAllMajors = () => (
  crud({
    dispatch: {
      begin: 'BEGIN_GET_MAJORS',
      fail: 'FAILED_GET_MAJORS',
      end: 'END_GET_MAJORS',
    },
    method: 'GET',
    url: url + '/majors'
  })
);

export {
  getAllMajors,
};
