import './App.css'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import HeroImage from './assets/monitor.png'
import img1 from './assets/Logo (1).png'
import img2 from './assets/Logo (2).png'
import img3 from './assets/Logo (3).png'
import img4 from './assets/Logo (4).png'
import img5 from './assets/Logo (5).png'
import img6 from './assets/Logo (6).png'
import img7 from './assets/Logo (7).png'
import img8 from './assets/comm-icon1.png'
import img9 from './assets/comm-icon2.png'
import img10 from './assets/comm-icon3.png'
import img11 from './assets/unseen-img.png'
import img12 from './assets/reinvent-img1.png'
import img13 from './assets/reinvent-img2.png'
import img14 from './assets/reinvent-img3.png'
import img15 from './assets/reinvent-img4.png'
import img16 from './assets/pana.png'
import img17 from './assets/tesla-thingy.png'

function App() {

  return (
    <>
      <Navbar />
      <div className='slide-top1 flex md:w-[100%] md:px-[5%] md:bg-green-50 mt-20 items-center h-[70vh] md:h-[80vh] md:py-24 lg:py-10 z-20'>
        <div className='md:w-[50%] md:text-left md:ml-[5%] mx-auto text-center'>
          <h1 className='edit-text text-[25px] w-[90%] mx-auto md:w-full md:mx-0 md:text-4xl lg:text-5xl font-semibold'>Lessons and insights <br /><span className='text-green-500'> from 8 years</span></h1>
          <p className='w-[80%] mx-auto md:w-full md:mx-0 md:mt-10 mt-6 text-gray-400 text-lg md:text-xl'>Where to grow your business as a photographer. site or social media?</p>
          <button className="bg-green-500 md:mt-12 mt-8 px-4 py-2 font-medium rounded hover:bg-green-300 hover:text-green-900 text-white transition-all duration-200 ease-in text-lg md:text-xl">Register</button>
        </div>
        <div className='md:w-[40%] md:h-5/6 md:flex hidden'>
          <img className='w-full h-5/6' src={HeroImage} alt="" />
        </div>
      </div>
      <div className='mt-2 md:mt-0 flex flex-col items-center py-24 z-1'>
        <h1 className='text-[25px] md:text-4xl lg:text-5xl font-semibold text-gray-800'>Our Clients</h1>
        <p className='mt-10 text-xl w-5/6 text-center text-gray-400'>We have been working with some Fortune 500+ clients</p>
        <div className='flex mt-12 gap-2 md:gap-6 lg:gap-8'>
          <div className='w-[25px] h-[25px] md:w-[35px] md:h-[35px]'>
            <img src={img1} alt="" />
          </div>
          <div className='w-[25px] h-[25px] md:w-[35px] md:h-[35px]'>
            <img src={img2} alt="" />
          </div>
          <div className='w-[25px] h-[25px] md:w-[35px] md:h-[35px]'>
            <img src={img3} alt="" />
          </div>
          <div className='w-[25px] h-[25px] md:w-[35px] md:h-[35px]'>
            <img src={img4} alt="" />
          </div>
          <div className='w-[25px] h-[25px] md:w-[35px] md:h-[35px]'>
            <img src={img5} alt="" />
          </div>
          <div className='w-[25px] h-[25px] md:w-[35px] md:h-[35px]'>
            <img src={img6} alt="" />
          </div>
          <div className='w-[25px] h-[25px] md:w-[35px] md:h-[35px]'>
            <img src={img7} alt="" />
          </div>
        </div>
      </div>
      <hr className='h-1 mb-12 bg-green-200 w-2/6 mx-auto'/>
      <div className='py-4 items-center'>
        <h1 className='w-4/6 text-center text-[25px] md:text-2xl lg:text-3xl font-semibold mx-auto'>Manage your community in a single system</h1>
        <p className='w-[80%] mx-auto text-center mt-6 text-gray-400 text-xl md:mt-10 lg:mt-10'>Who is DVLP suitable for?</p>
      </div>
      <div className='py-6 grid grid-cols-1 md:grid-cols-3 gap-12 w-full md:w-[96%] md:ml-[2%]'>
        <div className='block items-center w-4/6 md:w-full mx-auto py-6 md:py-10 hover:bg-green-200 shadow-lg shadow-gray-800 rounded-lg'>
          <div className='w-[20%] h-[20%] ml-[43%]'>
            <img src={img8} alt="" />
          </div>
            <h1 className='mt-8 text-center w-[100%] md:w-[4/6] text-lg font-semibold md:text-xl lg:text-2xl'>Membership <br /> Organisations</h1>
            <p className='text-gray-500 text-[12px] text-center mt-4 md:text-md lg:text-lg md:mt-6 w-[70%] mx-auto'>Our membership management software provides full automation of membership renewals and</p>
        </div>
        <div className='block items-center w-4/6 md:w-full mx-auto py-6 md:py-10 hover:bg-green-200 shadow-lg shadow-gray-800 rounded-lg'>
          <div className='w-[20%] h-[20%] ml-[43%]'>
            <img src={img9} alt="" />
          </div>
            <h1 className='mt-8 text-center w-[100%] md:w-[4/6] text-lg font-semibold md:text-xl lg:text-2xl'>National <br /> Associations</h1>
            <p className='text-gray-500 text-[12px] text-center mt-4 md:text-md lg:text-lg md:mt-6 w-[70%] mx-auto'>Our membership management software provides full automation of membership renewals and</p>
        </div>
        <div className='block items-center w-4/6 md:w-full mx-auto py-6 md:py-10 hover:bg-green-200 shadow-lg shadow-gray-800 rounded-lg'>
          <div className='w-[20%] h-[20%] ml-[43%]'>
            <img src={img10} alt="" />
          </div>
            <h1 className='mt-8 text-center w-[100%] md:w-[4/6] text-lg font-semibold md:text-xl lg:text-2xl'>Clubs <br /> and Groups</h1>
            <p className='text-gray-500 text-[12px] text-center mt-4 md:text-md lg:text-lg md:mt-6 w-[70%] mx-auto'>Our membership management software provides full automation of membership renewals and</p>
        </div>
      </div>
      <hr className='h-1 mb-0 mt-10 md:mt-32 bg-green-200 w-2/6 mx-auto'/>
      <div className='slider flex md:w-[100%] md:px-[5%] mt-10 items-center h-[70vh] md:h-[80vh] md:py-24 lg:py-10 z-20'>
        <div className='md:w-[40%] md:h-full md:flex hidden'>
          <img className='w-full h-full' src={img11} alt="" />
        </div>
        <div className='md:w-[50%] md:text-left md:ml-[5%] mx-auto text-center'>
          <h1 className='edit-text2 text-[25px] w-[90%] mx-auto md:w-full md:mx-0 md:text-3xl lg:text-4xl font-semibold'>The unseen of spending 3 <br />years at Pixelgrade</h1>
          <p className='w-[80%] mx-auto md:w-full md:mx-0 md:mt-10 mt-6 text-gray-400 text-lg md:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
          <button className="unseen-btn bg-green-500 md:mt-12 mt-8 px-4 py-2 font-medium rounded hover:bg-green-300 hover:text-green-900 text-white transition-all duration-200 ease-in text-lg md:text-xl">Learn More</button>
        </div>
      </div>
      <div className='block py-16 md:py-28 bg-green-50 md:flex'>
        <div className='md:w-[40%] md:text-left md:ml-[5%] mx-auto text-center items-center'>
          <h1 className='text-[25px] w-[90%] mx-auto md:w-full md:mx-0 md:text-4xl lg:text-5xl font-semibold'>Helping a local<br /><span className='text-green-500'>business reinvent itself</span></h1>
          <p className='w-[80%] mx-auto md:w-full md:mx-0 md:mt-10 mt-6 text-gray-400 text-lg md:text-xl'>We reached here with our hard work and dedication</p>
        </div>
        <div className='md:w-[50%] w-full mt-16 md:mt-0 grid grid-cols-2 items-center gap-20'>
          <div className='flex items-center gap-4 mx-auto'>
            <div className='w-full'>
              <img src={img12} alt="" />
            </div>
            <div className='items-center'>
              <h1 className='text-lg md:text-xl lg:text-2xl font-semibold text-gray-700'>2,245,341</h1>
              <p className='mt-2 text-sm md:text-xl text-gray-600'>Members</p>
            </div>
          </div>
          <div className='flex items-center gap-4 mx-auto'>
            <div className='w-full'>
              <img src={img13} alt=""/>
            </div>
            <div className='items-center'>
              <h1 className='text-lg md:text-xl lg:text-2xl font-semibold text-gray-700'>1,346,328</h1>
              <p className='mt-2 text-sm md:text-xl text-gray-600'>Clubs</p>
            </div>
          </div>
          <div className='flex items-center gap-4 mx-auto'>
            <div className='w-full'>
              <img src={img14} alt="" />
            </div>
            <div className='items-center'>
              <h1 className='text-lg md:text-xl lg:text-2xl font-semibold text-gray-700'>1,828,867</h1>
              <p className='mt-2 text-sm md:text-xl text-gray-600'>Bookings</p>
            </div>          
          </div>
          <div className='flex items-center gap-4 mx-auto'>
            <div className='w-full'>
              <img src={img15} alt="" />
            </div>
            <div className='items-center'>
              <h1 className='text-lg md:text-xl lg:text-2xl font-semibold text-gray-700'>1,926,756</h1>
              <p className='mt-2 text-sm md:text-xl text-gray-600'>Payments</p>
            </div>
          </div>
        </div>
      </div>
      <div className='slider2 flex md:w-[100%] md:px-[5%] mt-10 items-center h-[70vh] md:h-[80vh] md:py-24 lg:py-10 z-20'>
        <div className='md:w-[40%] md:h-full md:flex hidden'>
          <img className='w-full h-full' src={img16} alt="" />
        </div>
        <div className='md:w-[50%] md:text-left md:ml-[5%] mx-auto text-center'>
          <h1 className='edit-text3 text-[25px] w-[90%] mx-auto md:w-full md:mx-0 md:text-3xl lg:text-4xl font-semibold'>How to design your site footer<br />like we did</h1>
          <p className='w-[80%] mx-auto md:w-full md:mx-0 md:mt-10 mt-6 text-gray-400 text-sm md:text-base lg:text-lg'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
          <button className="bg-green-500 md:mt-12 mt-8 px-4 py-2 font-medium rounded hover:bg-green-300 hover:text-green-900 text-white transition-all duration-200 ease-in text-sm md:text-base lg:text-lg">Learn More</button>
        </div>
      </div>
      <hr className='h-1 mb-0 mt-10 md:mt-32 bg-green-200 w-2/6 mx-auto'/>
      <div className='slider3 flex md:w-[100%] md:px-[5%] mt-10 items-center h-[70vh] md:h-[80vh] md:py-24 lg:py-10 z-20'>
        <div className='md:w-[40%] md:h-full md:flex hidden'>
          <img className='w-full h-full' src={img17} alt="" />
        </div>
        <div className='md:w-[50%] md:text-left md:ml-[5%] mx-auto text-center'>
          <p className='w-[80%] mx-auto md:w-full md:mx-0 md:mt-10 mt-6 text-gray-400 text-sm md:text-base lg:text-lg'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
          <h1 className='mt-6 text-xl lg:text-2xl font-bold text-green-500'>David Davies</h1>
          <p className='mt-4 text-gray-700'>British Dragon Boat Racing Association</p>
          <div className='flex justify-around mt-16 w-full mx-auto '>
            <img src={img1} alt="" className='w-[25px] h-[25px] md:w-[30px] md:h-[30px]'/>
            <img src={img2} alt="" className='w-[25px] h-[25px] md:w-[30px] md:h-[30px]' />
            <img src={img3} alt="" className='w-[25px] h-[25px] md:w-[30px] md:h-[30px]' />
            <img src={img4} alt="" className='w-[25px] h-[25px] md:w-[30px] md:h-[30px]' />
            <img src={img5} alt="" className='w-[25px] h-[25px] md:w-[30px] md:h-[30px]' />
            <img src={img6} alt="" className='w-[25px] h-[25px] md:w-[30px] md:h-[30px]' />
            <img src={img7} alt="" className='w-[25px] h-[25px] md:w-[30px] md:h-[30px]' />
          </div>
        </div>
      </div>
      <div className='mx-auto text-center mt-14 text-xl w-5/6 md:w-[50%] md:text-4xl lg:text-5xl font-semibold md:mt-32 pb-16 md:pb-20'>
        <h1>Pellentesque suscipit fringilla libero eu.</h1>
        <button className="bg-green-500 md:mt-12 mt-8 px-4 py-2 font-medium rounded hover:bg-green-300 hover:text-green-900 text-white transition-all duration-200 ease-in text-sm md:text-base lg:text-lg">Learn More</button>
      </div>
      <Footer />
    </>
  )
}

export default App
