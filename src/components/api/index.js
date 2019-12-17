import Prismic from 'prismic-javascript';

const apiEndpoint = '';
const accessToken = '';
 
export const Client = Prismic.client(apiEndpoint, { accessToken });