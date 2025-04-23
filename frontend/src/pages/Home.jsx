import React from 'react'
import foodRecipe from '../assets/foodRecipe.png'
import RecipeItems from '../components/RecipeItems'

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className="left">
          <h1>Food Recipe</h1>
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga consequatur esse, optio molestias quod asperiores hic eveniet rem dignissimos voluptas eius sunt repudiandae natus iste doloremque minus accusamus incidunt ex architecto ea repellat ullam. Nesciunt cumque esse repudiandae nobis molestiae? Quaerat sequi cum esse maxime repudiandae rem? Commodi, aliquam excepturi?</h5>
          <button>Share your recipe</button>
        </div>
        <div className="right">
          <img src={foodRecipe} width={"320px"} height={"300px"} alt="" />
        </div>
      </section>
      <div className='bg'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d4f6e8" fillOpacity="1" d="M0,160L30,181.3C60,203,120,245,180,234.7C240,224,300,160,360,144C420,128,480,160,540,186.7C600,213,660,235,720,208C780,181,840,107,900,69.3C960,32,1020,32,1080,48C1140,64,1200,96,1260,133.3C1320,171,1380,213,1410,234.7L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
      </div>
      <div className='recipe'>
        <RecipeItems />
      </div>
    </>
  )
}

export default Home