import {api, PageParams} from '@api';
import {ProductsResponse} from './productType';

/**
 * @description Busca a lista de produtos do backend.
 */
async function getList(params?: PageParams): Promise<ProductsResponse> {
  try {
    const response = await api
      .get<ProductsResponse>('/Products', {
        params,
      })
      .catch(error => {
        throw error;
      });

    console.log('response', response.data);

    return response.data;
  } catch (error) {
    console.error('Error on getList', error);
    throw error;
  }
}

export const productApi = {
  getList,
};
