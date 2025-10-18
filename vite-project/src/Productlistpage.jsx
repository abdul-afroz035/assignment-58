import React, { useState } from 'react';
import Productlist from './Productlist';
import Navbar from './Navbar';
import Footer from './Footer';


function Productlistpage() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("");
  const AllData = [
    {
      photo: "https://png.pngtree.com/thumb_back/fh260/background/20250409/pngtree-ceramic-white-coffee-cup-image_17184564.jpg",
      category: "mugs",
      title: "Red new Stylish Mug",
      price: 20.00,
    },

    {
      photo: "https://static.vecteezy.com/system/resources/previews/056/852/944/non_2x/a-white-mug-is-shown-on-a-gray-background-photo.jpg",
      category: "mugs",
      title: "Red Stylish Mug",
      price: 25.00,
    },

    {
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgqGTJTCIZtlo7P0nFxlNiPzyLvnmZ8PqhdQ&s",
      category: "Tshirt",
      title: "Blue Sport tshirt",
      price: 35.00,
    },

    {
      photo: "https://www.yourprint.in/new-admin-ajax.php?action=resize_outer_image&cfcache=all&url=med-s3/d-i-o/Tshirts/Men/tshirt_hs_men_pat_d48_o.jpg&resizeTo=600",
      category: "Tshirt",
      title: "Navy Wolf Printed White Tshirt",
      price: 30.00,
    },

    {
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyBBiVCu51eT3hEdq3cRIkCHQlS9OJlqWPor37LeA5WKS9uneC-y8XTydXXjQ_X79KDO0&usqp=CAU",
      category: "Tshirt",
      title: "White Simple Printed Tshirt",
      price: 34.00,
    },

    {
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9E5_gsXhGBc69mZSzuivvIHIr6SuMzGoYE5KyCRY8yipHDf4zhQmPwLr0ZsAiIhS5m0g&usqp=CAU",
      category: "Tshirt",
      title: "Cream Text Printed White Tshirt",
      price: 19.00,
    },

    {
      photo: "https://www.theapparelbox.com/cdn/shop/products/1_5_4e19bd05-2a32-46ca-b85b-6624a2f4513e_1200x1200.jpg?v=1745069250",
      category: "Tshirt",
      title: "Yellow Scooty Printed White Tshirt",
      price: 29.00,
    },

    {
      photo: "https://squirehood.com/cdn/shop/files/SilentTigerT-Shirt.jpg?v=1752841040",
      category: "Tshirt",
      title: "Tiger Printed White Tshirt",
      price: 27.00,
    },

    {
      photo: "https://i.ebayimg.com/images/g/9JUAAOSwX4tmlCOE/s-l400.jpg",
      category: "Tshirt",
      title: "Cofee Printed Tshirt",
      price: 37.00,
    },


  ]

  const data = AllData.filter(function (item) {
    const lowerCaseTitle = item.title.toLowerCase();
    const lowerCaseQuery = query.toLowerCase();
    return lowerCaseTitle.indexOf(lowerCaseQuery) != -1
  })

  // return -ve if x should come first and viseversa
  if(sort == "title"){
      data.sort(function(x, y) {
        return (x.title < y.title) ? -1 : 1;
      });
    }
    else if (sort == "price-low") {
      data.sort(function(x, y) {
        return x.price - y.price
      });
    }
    else if (sort == "price-high") {
      data.sort(function(x, y) {
        return y.price - x.price
      });
    }



  function handleChange(event) {
    const newquery = event.target.value;
    setQuery(newquery);
  }

  function handleSort(event) {
    const newsort = event.target.value;
    setSort(newsort);
  }
    return (
      <div>
        <Navbar />

        <div class="bg-white mx-16 my-8 py-10 px-6">
          <div class="flex justify-end my-4">
            <input value={query}
              class="border border-gray-400 px-2 mr-2 rounded-sm"
              placeholder="search"
              onChange={handleChange}
            />

            <select
              value={sort}
              onChange={handleSort}
              class="text-xs bg-gray-200 px-2 py-1">
              <option value="default">default sorting</option>
              <option value="title">Sort by title</option>
              <option value="price-low">Sort by price : low-high</option>
              <option value="price-high">Sort by price : high-low</option>

            </select>
          </div>

          <Productlist Products={data} />

          <button class="text-[10px] text-white bg-red-500 border-2 border-red-500 py-1 px-2 mt-8 mr-1"> 1 </button>
          <button class="text-[10px] text-red-500 bg-white border-2 border-red-500 py-1 px-2 mt-8 mr-1"> 2 </button>
          <button class="text-[10px] text-red-500 bg-white border-2 border-red-500 py-1 px-1 mt-8 mr-1"> --- </button>
        </div>
        <Footer />
      </div>

    );
  }

  export default Productlistpage;