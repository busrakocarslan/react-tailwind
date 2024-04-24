import axios from "axios";
import React, { useState,useEffect  } from "react";
import { useNavigate, useParams} from "react-router-dom";

const ProductDetail = () => {
  const navigate=useNavigate()
  const {id}=useParams()
  const [state,setState]=useState({})
  const getDatailData=async()=>{
    
    const {data}= await axios(`https://dummyjson.com/products/${id}`)
    setState(data);
  }
  useEffect(() => {
    getDatailData();
    
  }, [])
  
  const{ thumbnail,title,description,category,price,images}=state
  return (
    <div className="mx-auto max-w-2xl px-4 pt-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="mt-6 w-90 m-auto ">
        <article className="mx-auto w-full block lg:flex mt-4 h-full 2xl:h-[70vh]  shadow-lg border rounded-md duration-300 hover:shadow-sm">
          <div className="grid grid-rows-4 gap-2 h-full w-full lg:w-7/12 p-4">
            <div className="w-full row-span-3">
              <img
                className="h-full w-full rounded-lg"
                src={thumbnail}
                alt=""
              />
            </div>
            <div className="grid grid-cols-3 gap-4 row-span-1">
              {images?.slice(0, 3).map((item, i) => (
                <div key={i}>
                  <img
                    className="h-[15vh] w-full rounded-lg"
                    src={item}
                    alt=""
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-5/12 flex flex-col justify-evenly p-4">
            <div className="pt-3 ml-4 mr-2 mb-3">
              <h3 className="text-xl text-gray-900 font-montepasifico">{title}</h3>
              <p className="text-gray-400 mt-1">{description}</p>
            </div>
            <div className="flex  mt-2 pt-3 ml-4 mr-2">
              <div className="">
                <span className="block text-gray-900">
                  Category :{category}
                </span>
                <span className="block font-montepasifico text-sm">Price : {price} $</span>
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => navigate(-1)}
                className="border rounded-lg bg-orange-400 text-gray-700 font-bold p-2"
              >
                Go Back
              </button>
              <button
                onClick={() => navigate("/dashboard")}
                className="border rounded-lg bg-gray-400 text-black font-bold p-2"
              >
                Go Home
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ProductDetail;
