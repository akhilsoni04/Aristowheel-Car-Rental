export const GET_CARS = `
  query GetCars {
    carLists {
      id
      name
      price
      carAvg
      carType
      carBrand
      fuelType
      image {
        url
      }
    }
  }
`;
