import React from 'react'
import { useLoaderData } from 'react-router-dom'
import foodImg from '../assets/foodRecipe.png'
import { BsStopwatchFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

const RecipeItems = () => {
  const allRecipes = useLoaderData()
  console.log(allRecipes)
  return (
    <>
      <div className='card-container'>
        {
          allRecipes?.map((item, index) => {
            return (
              <div key={index}>
                <img src={foodImg} width={"120px"} height={"100px"} alt="" />
                <div className='card-body'>
                  <div className="title">
                    {item.title}
                  </div>
                  <div className="icons">
                    <div className="timer"><BsStopwatchFill />30min</div>
                    <FaHeart />
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default RecipeItems