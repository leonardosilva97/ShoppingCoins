import {useEffect, useState} from 'react';
import {productService} from '../productService';
import {Product} from '../productType';

export function useProductList() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);
  const [productList, setProductList] = useState<Product[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);

  async function fetchInitialData() {
    try {
      setError(null);
      setLoading(true);

      const {data, meta} = await productService.getList(1);

      if (data) {
        setProductList(data);

        if (meta.hasNextPage) {
          setPage(2);
          setHasNextPage(true);
        } else {
          setHasNextPage(false);
        }
      }
    } catch (er) {
      console.log('error fecth', er);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  async function fetchNextPage() {
    if (loading || !hasNextPage) {
      return;
    }

    try {
      setLoading(true);

      const {data, meta} = await productService.getList(page);
      setProductList(prev => [...prev, ...data]);

      if (meta.hasNextPage) {
        setPage(prev => prev + 1);
      } else {
        setHasNextPage(false);
      }
    } catch (er) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchInitialData();
  }, []);

  return {
    productList,
    error,
    loading,
    refresh: fetchInitialData,
    fetchNextPage,
  };
}
