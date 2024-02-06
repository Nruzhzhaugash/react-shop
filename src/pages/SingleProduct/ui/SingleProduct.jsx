import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'

import { ROUTES } from '@/app/appRouter';
import { ProductList } from '@/widgets/ProductList/ui/ProductList';
import { Product } from '@/widgets/Product/indes';
import { useGetProductQuery } from '@/shared/api/apiSlice';
import { getRelatedProducts } from '@/shared/model/productsSlice';

export const SingleProduct = () => {
  const dispatch = useDispatch()
  const { id } = useParams();
  const navigate = useNavigate();
  const { list, related } = useSelector(({ products }) => products)

  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });

  useEffect(() => {
    if(!isFetching && !isLoading && !isSuccess) {
      navigate(ROUTES.ERROR);
    }  
  }, [isLoading, isFetching, isSuccess])

  useEffect(() => {
    if (!data || !list.length) return;
    
    dispatch(getRelatedProducts(data.category.id))
  }, [data, dispatch, list.length])

  return !data ? (
      <section className='preloader'>Loading...</section>
    ) : (
      <>
        <Product {...data} />
        <ProductList products={related} amount={5} title='Related products' />
      </>
    )
}
