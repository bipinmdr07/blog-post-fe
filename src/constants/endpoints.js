const endpoints = {
  BLOGS: '/blogs',
};

const v1Endpoints = Object.keys(endpoints).map(k => ({
  k: `/api/v1/${endpoints[k]}`,
}));

export default v1Endpoints;
