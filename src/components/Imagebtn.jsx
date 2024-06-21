


const ImageButton = () => {
 




  return (
    <div className='imagesBox'>
     
            <a href="https://annaleites.github.io/MyRoom/" target="_blank" rel="noopener noreferrer"> 
        <img src="https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/blue_repicthousebase_1484336386-1.png" alt="description"/>
        <div>Моя комната</div>
      </a>
            <a href="https://annaleites.github.io/Derby/" target="_blank" rel="noopener noreferrer" className='imageLink'>
        <img src="https://dax.co.il/wp-content/uploads/2020/06/derby.jpg" alt="description"  />
        <div>Стул Derby</div>
      </a>
            <a href="https://annaleites.github.io/Cupido/" target="_blank" rel="noopener noreferrer">
        <img src="https://dax.co.il/wp-content/uploads/2022/05/cupido0360.jpg" alt="description"  />
        <div>Кресло Cupido</div>
      </a>
            <a href="https://annaleites.github.io/Vicenza/" target="_blank" rel="noopener noreferrer">
        <img src="https://dax.co.il/wp-content/uploads/2018/06/13-1.jpg" alt="description"  />
        <div>Комод Vicenza</div>
      </a>
    </div>
  );
};

export default ImageButton;
// import React, { useState } from 'react';
// import './Imagebtn.css'; 

// const ImageButton = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const images = [
//     {
//       src: 'https://dax.co.il/wp-content/uploads/2020/06/derby.jpg',
//       alt: 'Derby',
//       link: 'https://annaleites.github.io/Derby/',
//       name: 'Derby'
//     },
//     {
//       src: 'https://dax.co.il/wp-content/uploads/2022/05/cupido0360.jpg',
//       alt: 'Cupido',
//       link: 'https://annaleites.github.io/Cupido/',
//       name: 'Cupido'
//     },
//     {
//       src: 'https://dax.co.il/wp-content/uploads/2018/06/13-1.jpg',
//       alt: 'Vicenza',
//       link: 'https://annaleites.github.io/Vicenza/',
//       name: 'Vicenza'
//     }
//   ];

//   const handleImageClick = (image) => {
//     setSelectedImage(image);
//   };

//   return (
//     <div className='imagesBox'>
//       <a href="https://annaleites.github.io/MyRoom/" target="_blank" rel="noopener noreferrer"> 
//         <img src="https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/blue_repicthousebase_1484336386-1.png" alt="MyRoom" />
//         <p>MyRoom</p>
//       </a>
//       {images.map((image, index) => (
//         <a key={index} href={image.link} target="_blank" rel="noopener noreferrer" className='imageLink'>
//           <img src={image.src} alt={image.alt} />
//           <p>{image.name}</p>
//         </a>
//       ))}
//     </div>
//   );
// };

// export default ImageButton;
