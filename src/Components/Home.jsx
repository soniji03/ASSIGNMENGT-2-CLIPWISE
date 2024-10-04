import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full">
      <img
        src={images[currentIndex]}
        className='h-40 md:h-[20rem] w-auto md:w-[22rem] shadow-sm mx-auto'
        alt={`Crystal Agate Phone Grip ${currentIndex + 1}`}
      />
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md"
      >
        <ChevronRight size={20} />
      </button>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-1.5 h-1.5 rounded-full ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};


function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const backgroundImageStyle = {
        backgroundImage: 'url(/svg1.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '120vh',
        width: '100%',
        zIndex: -100,
    };

    const backgroundImageStyle2 = {
        backgroundImage: 'url(/wave-haikei4.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '120vh',
        width: '100%',
        zIndex: -100,
    };

    const images = [
        '/item.png',
        // Add more image URLs as needed
      ];

    return (
        <div className=''>
            <div className='bg-white min-h-screen' style={backgroundImageStyle}>
                <header className='p-2 relative'>
                    <div className='flex justify-between items-center mx-4 md:mx-9'>
                        <div className='flex items-center gap-3'>
                            <img src='./Frame.png' className='h-8 md:h-auto' alt="Logo" />
                            <span className='text-sm md:text-base'>Pop Rock Crystal</span>
                        </div>
                        {/* Desktop menu */}
                        <div className='hidden md:flex gap-36'>
                            <div>
                                <ul className='flex gap-10'>
                                    <li><a href='#' className='text-base'>Home</a></li>
                                    <li><a href='#' className='text-base'>Shop</a></li>
                                    <li><a href='#' className='text-base'>About US</a></li>
                                    <li><a href='#' className='text-base'>Help</a></li>
                                </ul>
                            </div>
                            <div>
                                <img src='./Group.png' className='h-10' alt="Group" />
                            </div>
                        </div>
                        {/* Mobile menu button */}
                        <button 
                            className='md:hidden'
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    {/* Mobile menu */}
                    {isMenuOpen && (
                        <div className='md:hidden absolute top-full left-0 right-0 bg-white shadow-md z-50'>
                            <ul className='flex flex-col items-center py-4'>
                                <li className='py-2'><a href='#' className='text-base'>Home</a></li>
                                <li className='py-2'><a href='#' className='text-base'>Shop</a></li>
                                <li className='py-2'><a href='#' className='text-base'>About US</a></li>
                                <li className='py-2'><a href='#' className='text-base'>Help</a></li>
                                <li className='py-2'>
                                    <img src='./Group.png' className='h-8' alt="Group" />
                                </li>
                            </ul>
                        </div>
                    )}
                </header>

                <main className='flex flex-col md:flex-row h-auto md:h-[30rem] p-4 md:p-8 gap-6 md:gap-12 '>
                    <div className='w-full md:w-2/3 flex flex-col justify-center'>
                        <h1 className='text-3xl md:text-5xl font-normal text-white mb-6 md:mb-9'>Welcome to <br />
                            <span className='font-bold'>Pop Rock Crystal Shop!</span></h1>
                        <p className='mb-6 md:mb-9 text-sm md:text-base text-[#31546d]'>Here you will find unique phone accessories, crystals, jewelry and more. Free shipping inside the U.S. and our phone grips come with a limited warranty. Enjoy!</p>
                        <div className='gap-4 md:gap-9 flex flex-col md:flex-row mx-0 md:mx-7'>
                            <button className='p-2 md:p-3 w-full md:w-[9rem] text-[#317189] font-bold bg-white rounded-xl text-sm md:text-base'>SHOP NOW</button>
                            <button className='text-[#317189] text-sm md:text-base'>about us</button>
                        </div>
                    </div>
                    
<div className='w-full md:w-1/2 h-64 md:h-full bg-[#ffff] flex items-center justify-center rounded-3xl shadow-2xl'>
      <div className='text-center'>
        <ProductCarousel images={images} />
        <p className='text-sm md:text-base mt-2 md:-bottom-6'>
          Crystal Agate Phone Grip - <span className='text-blue-900 font-bold'>18.99$</span>
        </p>
      </div>
    </div>

                </main>
            </div>

            

            <div className='flex justify-center mb-10 md:mb-20'>
              <bitton> <img src='/Group 103.png'  alt="Group 103" /></bitton> 
            </div>

            <section className='mb-7'>
                <h1 className='text-center font-bold text-2xl md:text-3xl mb-6'>All Product</h1>
                <div className="mx-4 md:mx-12 mb-6 gap-4 md:gap-20 bg-white p-4 flex flex-col md:flex-row">
                    <div className="relative items-center text-left flex">
                        <span className="text-gray-500 mr-2 text-sm md:text-base">Filter:</span>
                        <button type="button" className="inline-flex justify-center items-center w-full px-2 md:px-4 py-1 md:py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2">
                            All Products
                            <svg className="-mr-1 ml-2 h-4 w-4 md:h-5 md:w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <div className="relative flex items-center text-left mt-2 md:mt-0">
                        <span className="text-gray-500 mr-2 text-sm md:text-base">Sort:</span>
                        <button type="button" className="inline-flex justify-center items-center w-full px-2 md:px-4 py-1 md:py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2">
                            Best Selling
                            <svg className="-mr-1 ml-2 h-4 w-4 md:h-5 md:w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4 md:mx-12 mb-12 md:mb-24">
                    {[...Array(8)].map((_, index) => (
                        <div key={index} className='bg-gray-50 h-[20rem] md:h-[23rem] rounded-3xl shadow-2xl flex justify-center flex-col items-center p-4'>
                            <img src='/item.png' className='h-[10rem] md:h-[13rem]' alt={`Product ${index + 1}`} />
                            <h1 className='text-center mb-3 md:mb-5 text-sm md:text-base'>CRYSTAL AGATE PHONE GRIP<br /> <span className='text-blue-700 font-bold'>18.99$</span></h1>
                            <button className={`p-2 md:p-3 w-full md:w-[9rem] rounded-2xl text-sm md:text-base ${index === 0 ? 'text-white bg-blue-400' : 'text-blue-400 border-2 border-blue-300'}`}>BUY NOW</button>
                        </div>
                    ))}
                </div>

                <div className='text-center'><button className='w-[9rem] rounded-xl p-2 border-2 text-blue-400 border-blue-400 text-sm md:text-base'>View All</button></div>
            </section>

            <section style={backgroundImageStyle2} className='py-8 md:py-0'>
                <div className='flex flex-col md:flex-row min-h-[35rem] mb-10'>
                    <div className='w-full md:w-1/2 relative p-4 md:p-0'>
                        <div className='flex flex-col items-center md:items-end md:absolute md:inset-y-36 md:right-0'>
                            <h2 className='font-normal text-2xl md:text-3xl text-[#31546d] mb-2'>BEST PRICE</h2>
                            <h1 className='font-semibold text-3xl md:text-5xl mb-4 md:mb-7 text-[#31546d] text-center md:text-right'>Agate Phone Grip</h1>
                            <p className='mb-3 md:mb-5'>
                                <span className='line-through text-[#41a0b7] text-lg md:text-xl'>44.50$</span>
                                <span className='text-3xl md:text-4xl font-semibold text-[#e35b3e]'> 19.50$</span>
                            </p>
                            <p className='text-xs md:text-sm mb-6 md:mb-10 text-[#31546d] text-center md:text-right'>
                                These Pop Rock Crystal grip tops can be swapped with <br className='hidden md:inline' />
                                other tops depending on your mood, outfit, nails,<br className='hidden md:inline' />
                                phone case, holiday, etc.! Just gently squeeze the sides<br className='hidden md:inline' />
                                to remove and swap out with another color or design!
                            </p>
                            <button className='w-[9rem] p-2 md:p-3 bg-blue-300 rounded-xl text-white font-semibold text-sm md:text-base'>BUY NOW</button>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 flex items-center justify-center mt-8 md:mt-0'>
                        <div className='bg-white shadow-xl rounded-full h-[20rem] w-[20rem] md:h-[30rem] md:w-[30rem] flex items-center justify-center'>
                            <div className='bg-white shadow-2xl rounded-full flex items-center justify-center'>
                                <img src='/item.png' className='h-[15rem] w-[15rem] md:h-[20rem] md:w-[20rem]' alt="Agate Phone Grip" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className='h-[10rem] bg-[#264c70]'>
                {/* Footer content */}
            </footer>
        </div>
    )
}

export default Home
