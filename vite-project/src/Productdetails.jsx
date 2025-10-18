import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Productdetails() {
    const [num, numSet] = useState(1)

    function setQuantity() {
        numSet(num + 1)
    }

    return (
        <div className=" flex my-14 mx-6 bg-white py-6 px-10 gap-6">
            <img class="h-[70vh]"
                src="https://png.pngtree.com/thumb_back/fh260/background/20250409/pngtree-ceramic-white-coffee-cup-image_17184564.jpg" />

            <div class="bg-white space-y-7">
                <div class="text-5xl text-cyan-900">Black Printed Coffee Mug</div>
                <div class="text-3xl text-cyan-900 font-bold ">$15.00</div>
                <div class="text-2xl text-cyan-900 font-serif">Neque porro quisquam est, qui dolore ipsum quia dolor sit
                    amet, consectetur adipisci velit, sed quia non incidunt lores
                    ta porro ame. numquam eius di tempora incidunt
                    lores ta porro ame.</div>
                <div>
                    <button class=" text-lg py-1 px-5 border-1 border-gray-400"
                        onClick={setQuantity} > {num}
                    </button>

                    <button class=" text-lg py-1 px-3 ml-1 border-1 bg-red-500 text-white rounded-lg" >
                        ADD TO CART
                    </button>
                    <div class="mt-4">
                        <Link className="border border-gray-400 px-2 py-1 text-sm rounded-sm"
                            to="/Productlistpage">previous page
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Productdetails;