import { categories } from '../fake-db/fakeProducts';

export const getCategories = () => {

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categories);
    }, 700);
  })
    .then((res) => {
      return { res };
    })
    .catch((error) => {
      return { error }
    });
};

export const getCategory = (category) => {

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('../fake-db/fakeProducts')
        .then((products) => products[category.toLowerCase()]));
    }, 700);
  })
    .then((res) => {
      return { res };
    })
    .catch((error) => {
      return { error };
    });
};

export const getProduct = (productData) => {

  const { category, product } = productData;

  return new Promise((resolve) => {
    setTimeout(() => {
      import('../fake-db/fakeProducts')
        .then((products) => products[category.toLowerCase()])
        .then((res) => {
          const findProduct = res.find((item) => item.name === product);
          resolve(findProduct);
        });
    }, 700);
  })
    .then((res) => {
      return { res };
    })
    .catch((error) => {
      return { error };
    });
};
