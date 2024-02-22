import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useGetProductsQuery } from "@/shared/api/apiSlice";
import { Filter } from "@/features/Filter/ui/Filter";
import { Button } from "../../../shared/ui/Button/Button";
import { ProductList } from "../../ProductList/ui/ProductList";
import { useSelector } from "react-redux";

import styles from './Category.module.scss';

export const Category = () => {
  const { id } = useParams();
  const { list } = useSelector(({ categories }) => categories);

  const defaultValues = {
    title: '',
    price_min: 0,
    price_max: 0,
  }

  const defaultParams = {
    categoryId: id,
    limit: 5,
    offset: 0,
    ...defaultValues,
  }

  const [isEnd, setIsEnd] = useState(false);
  const [cat, setCat] = useState(null);
  const [items, setItems] = useState([]);
  const [params, setParams] = useState(defaultParams);
  const [values, setValues] = useState(defaultValues);

  const { data = [], isLoading, isSuccess } = useGetProductsQuery(params);

  useEffect(() => {
    if(!id) return;

    setValues(defaultValues);
    setItems([])
    setIsEnd(false)
    setParams({ ...defaultParams, categoryId: id });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if(isLoading) return;

    if(!data.length) return setIsEnd(true);

    setItems((_items) => [..._items, ...data]);
  }, [data, isLoading])

  useEffect(() => {
    if(!id || !list.length) return;

    const category = list.find(item => item.id === id * 1)

    setCat(category);
  }, [list, id])

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setItems([]);
    setIsEnd(false);
    setParams({ ...defaultParams, ...values })
  }

  const handleReset = () => {
    setValues(defaultValues);
    setParams(defaultParams);
    setIsEnd(false)
  }


  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>{cat?.name}</h2>

      <Filter onSubmit={handleSubmit} title={values.title} price_max={values.price_max} price_min={values.price_min} onChange={handleChange} />

      {isLoading ? (
        <div className="preloader">Loading...</div>
      ) : !isSuccess || !items.length ? (
        <div className={styles.back}>
          <span>No results</span>
          <Button onClick={handleReset} label='Reset' />
        </div>
      ) : (
        <ProductList 
          title=''
          products={items}
          style={{ padding: 0 }}
          amount={items.length}
        />
      )}

      {!isEnd && (
        <div className={styles.more}>
          <Button 
            onClick={() => 
              setParams({ ...params, offset: params.offset + params.limit })
            }
            label='See more'
          />
        </div>
      )}
    </section>
  )
}