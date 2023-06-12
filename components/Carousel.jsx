import Image from 'next/image';
import React from 'react';

function Carousel(props) {
    return (
        <div className="hover:opacity-80 relative">
          <Image
            src={props.imagen}
            alt={props.imagen}
           className="" />
           <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <p class="text-white text-2xl">props.imagen</p>
           </div>
        </div>
    );
}

export default Carousel;