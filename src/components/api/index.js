import Prismic from 'prismic-javascript';

const apiEndpoint = 'https://orlic.cdn.prismic.io/api/v2';
const accessToken = 'MC5YZmluWkJFQUFDSUFGQnE3.77-9bu-_ve-_ve-_ve-_ve-_vRzvv73vv70AETDvv713H--_vSzvv70T77-9GSfvv73vv71DEBvvv70hfO-_vQ';
 
export const Client = Prismic.client(apiEndpoint, { accessToken });