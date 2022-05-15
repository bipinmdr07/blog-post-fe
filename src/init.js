import { http } from 'utils/http';

import * as interceptors from 'common/interceptors';

function initInterceptors() {
  http.interceptors.request.use(interceptors.requestInterceptor);
  http.interceptors.response.use(
    (response => response, interceptors.responseInterceptor)
  );
}

export default function init() {
  initInterceptors();
}
