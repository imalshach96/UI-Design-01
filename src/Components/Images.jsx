import React from 'react';

function Images() {
  return (
    <>
    <div className='w-full flex justify-center'>
    <div className="grid grid-cols-4 gap-4 h-auto w-[1080px]">
      <img src="src/assets/1.jpg" className="w-72 h-56 object-cover rounded-lg" alt="Image 1" />
      <img src="src/assets/2.jpg" className="w-72 h-56 object-cover rounded-lg" alt="Image 2" />
      <img src="src/assets/3.jpg" className="w-72 h-56 object-cover rounded-lg" alt="Image 3" />
      <img src="src/assets/4.jpg" className="w-72 h-56 object-cover rounded-lg" alt="Image 4" />
      <img src="src/assets/5.jpg" className="w-72 h-56 object-cover rounded-lg" alt="Image 5" />
      <img src="src/assets/6.jpg" className="w-72 h-56 object-cover rounded-lg" alt="Image 6" />
      <img src="src/assets/7.jpg" className="w-72 h-56 object-cover rounded-lg" alt="Image 7" />
      <img src="src/assets/8.jpg" className="w-72 h-56 object-cover rounded-lg" alt="Image 8" />
    </div>
    </div>
    
    </>
  );
}

export default Images;
