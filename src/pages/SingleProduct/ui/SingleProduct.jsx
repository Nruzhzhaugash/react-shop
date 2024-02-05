import { useNavigate, useParams } from 'react-router-dom'
// import styles from './SingleProduct.module.scss'
import { useGetProductQuery } from '../../../shared/api/apiSlice';
import { useEffect } from 'react';
import { ROUTES } from '../../../app/appRouter';
import { Product } from '../../../widgets/Product/indes';

export const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });

  useEffect(() => {
    if(!isFetching && !isLoading && !isSuccess) {
      navigate(ROUTES.ERROR);
    }  
  }, [isLoading, isFetching, isSuccess])

  return !data ? (
      <section className='preloader'>Loading...</section>
    ) : (
      <>
        <Product {...data} />
      </>
    )
}
