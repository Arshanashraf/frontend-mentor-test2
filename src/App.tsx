
import Image1 from './assets/images/illustration-article.svg'
import Avatar from './assets/images/image-avatar.webp'
import './App.css'

function App() {

  return (
    <>
    <div className='flex flex-wrap justify-center mt-6'>
      <div className='w-80 max-w-auto text-start bg-white p-4 rounded-xl shadow-xl shadow-black'>
          <div >
            <img src={Image1} className='rounded-xl' alt="" />
          </div>
       <div>
          <h3 className='mt-6 bg-yellow-400 w-fit px-4 py-2 font-bold rounded-md'>Learning</h3>
          <p className='mt-3 font-semibold'>Published 21 Dec 2023</p>
          <h1 className='mt-3 text-xl font-extrabold cursor-pointer hover:text-yellow-400'>HTML & CSS foundations</h1>
          <p className='text-gray-500 mt-3'>These languages are the backbone of every website, defining structure, content, and presentation.</p>
      <div className='flex flex-wrap mt-3'>
        <img src={Avatar} className='w-10' alt="" /><span className='pl-2 pt-2 font-bold'>Greg Hooper</span>
      </div>
      <div className='text-xs mt-2'>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className='text-blue-500 underline'>Frontend Mentor</a>. 
        Coded by <a href="#" className='text-blue-500 underline'>Arshan</a>.
      </div>
    </div>
    
  </div></div>
      
    </>
  )
}

export default App
