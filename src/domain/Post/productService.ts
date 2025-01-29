import {apiAdapter} from '@api';
import {Page} from '@types';

import {productApi} from './productApi';
import {Product, ProductsResponse, toProduct} from './productType';

/**
 * Retorna { data: Product[], meta: ... }
 */
async function getList(page: number): Promise<Page<Product>> {
  const productPageAPI: ProductsResponse = await productApi.getList({
    page,
    per_page: 10,
  });

  return {
    data: productPageAPI.produtos.map(toProduct),
    meta: apiAdapter.toMetaDataPage(productPageAPI.meta),
  };
}

export const productService = {
  getList,
};
