
// export default function Carousel() {
//     return (
//         <div class="photo-gallery">
//             <div class="container">
//                 <div class="intro">
//                     <h2 class="text-center">Lightbox Gallery</h2>
//                     <p class="text-center">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae. </p>
//                 </div>
//                 <div class="row photos">
//                     <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="images/klinika1.jpeg" data-lightbox="photos"><img class="img-fluid" src="assets/img/desk.jpg"/></a></div>
//                     <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="images/klinika2.jpeg" data-lightbox="photos"><img class="img-fluid" src="assets/img/building.jpg"/></a></div>
//                     <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="images/klinika3.jpeg" data-lightbox="photos"><img class="img-fluid" src="assets/img/loft.jpg"/></a></div>
//                     <div class="col-sm-6 col-md-4 col-lg-3 item"><a href="images/klinika4.jpeg" data-lightbox="photos"><img class="img-fluid" src="assets/img/building.jpg"/></a></div>
//                 </div>
//             </div>
//         </div>
//     )
// }
    
    
// import React, { useEffect } from 'react';
// import 'lightbox2/dist/css/lightbox.min.css';

// export default function Carousel() {
//     useEffect(() => {
//         // Dynamické načtení lightbox JS
//         const script = document.createElement('script');
//         script.src = '/node_modules/lightbox2/dist/js/lightbox.min.js';
//         script.async = true;
//         document.body.appendChild(script);

//         // Čistící funkce při odpojení komponenty
//         return () => {
//             document.body.removeChild(script);
//         };
//     }, []);
    

//     return (
//         <div>
//                 <a href="images/klinika1.jpeg" data-lightbox="gallery">
//                     <img 
//                       src="images/klinika1_nahled.jpeg" 
//                       alt="Obrázek 1" 
//                       style={{ width: '200px', height: '150px' }}
//                     />
//                 </a>
//         </div>
//     );
// }

