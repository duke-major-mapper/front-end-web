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

const getClasses = (id) => (
  crud({
    dispatch: {
      begin: 'BEGIN_GET_CLASSES',
      fail: 'FAILED_GET_CLASSES',
      end: 'END_GET_CLASSES',
    },
    method: 'GET',
    url: url + '/classes/' + id
  })
)

const getOverlap = (id1, id2) => (
  crud({
    dispatch: {
      begin: 'BEGIN_GET_OVERLAP',
      fail: 'FAILED_GET_OVERLAP',
      end: 'END_GET_OVERLAP',
    },
    method: 'GET',
    url: url + '/overlap?ids=' + id1 + ',' + id2
  })
)

export {
  getAllMajors,
  getClasses,
  getOverlap,
};
