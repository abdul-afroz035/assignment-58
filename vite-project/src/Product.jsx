import React from 'react';
import { Link } from 'react-router-dom';

function Product({photo,category,title,price}) { //destructuring
  return (
    <div class="w-40 h-60 bg-white rounded-l ">

      <div class="w-full h-40">
        <img class=" bg-gray-400 w-full h-full object-cover rounded-lg"
          src={photo} />
      </div>

      <div class="text-gray-400 text-xs font-bold"> {category}
      </div>

      <div class="text-gray-700 text-sm font-bold">{title}
      </div>

      <div class="bg-white flex">
        <img class="h-3"
          src="https://st5.depositphotos.com/36772142/66206/v/450/depositphotos_662063422-stock-illustration-gold-star-isolated-white-background.jpg" />
        <img class="h-3"
          src="https://st5.depositphotos.com/36772142/66206/v/450/depositphotos_662063422-stock-illustration-gold-star-isolated-white-background.jpg" />
        <img class="h-3"
          src="https://st5.depositphotos.com/36772142/66206/v/450/depositphotos_662063422-stock-illustration-gold-star-isolated-white-background.jpg" />
        <img class="h-3"
          src="https://st5.depositphotos.com/36772142/66206/v/450/depositphotos_662063422-stock-illustration-gold-star-isolated-white-background.jpg" />
        <img class="h-3"
          src="https://st5.depositphotos.com/36772142/66206/v/450/depositphotos_662063422-stock-illustration-gold-star-isolated-white-background.jpg" />
      </div>

      <div class="text-gray-700 text-sm font-bold"> Rs.{price}</div>
      <div class="text-gray-700 text-sm font-bold"> <Link to="/Productdetails" > view details</Link> </div>
    </div>
  );
}

export default Product;