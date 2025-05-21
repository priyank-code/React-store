import React, { useContext } from 'react'
import { AppContext } from '../Context/Context'

const Category = () => {

  const {categories} = useContext(AppContext);

  return <>
      <div className='justify-center items-center text-center p-10'>
        <div>
          <p className='md:text-4xl text-3xl font-bold text-gray-800'>Shop by Category</p>
          <p className='md:px-30 md:my-5 md:text-[1.1rem] m-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptate fugit nisi eveniet placeat illo perferendis, exercitationem impedit fuga, obcaecati eaque corporis neque excepturi sit explicabo minus quo natus sequi.</p>
          <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 mt-5'>
            {
              categories.map((cat) => (
                <div key={cat.id} className='bg-gray-300 shadow-lg rounded-md overflow-hidden '>
                  <img src={cat.image} alt={cat.title} className='w-full object-cover h-65 scale-90 hover:scale-100 transition-all rounded-sm shadow-2xl' />
                  <div className='p-3 bg-green-600'>
                    <h3 className='font-bold text-white md:text-xl'>{cat.title}</h3>
                    <p className='font-medium text-white'>{cat.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
  </>
}

export default Category