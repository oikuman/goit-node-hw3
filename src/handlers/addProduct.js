const addProduct = product => {
    console.log(product);
    let result;
    
    if (product) {
        result = { status: "success", product: product };
      } else {
        result = { status: "failed" };
      }
    
      return result;
}

export default addProduct;