const images = [
    "https://th.bing.com/th/id/OIP.npSihnx9WGUPAfWJlVPPzwAAAA?cb=iwp1&rs=1&pid=ImgDetMain",
    "https://orig00.deviantart.net/6e11/f/2011/210/d/f/ryu_sprite_by_captainquestion-d4212ba.png",
    "https://picsum.photos/id/1015/600/400",
 "https://images.hitpaw.com/topics/photo-tips/pixel-art.jpg",
 "https://mymodernmet.com/wp/wp-content/uploads/2022/03/pixel-art-4.jpg",
 "https://cdn.pixabay.com/photo/2022/06/25/19/03/pixel-art-7284060_1280.png",
 "https://th.bing.com/th/id/OIP.q6LY_2EbeafMeR79nw5mGwHaHa?cb=iwp1&rs=1&pid=ImgDetMain",
 "https://35mm.es/wp-content/uploads/2024/11/pixel-art.jpg",
 "https://idyllic.app/wp-content/uploads/2024/02/308673-1.jpeg",
 "https://storage.googleapis.com/bookscene-82b8b.appspot.com/df14fa2f-87fd-44aa-8e41-e39c97d4892c-compressed.jpg"
  ];
  
  let nowIndex = 0;
  
  document.addEventListener("DOMContentLoaded", () => {
    const imgElement = document.getElementById("galeria-img");
    const btnPrev = document.getElementById("btn-prev");
    const btnNext = document.getElementById("btn-next");
  
    btnPrev.addEventListener("click", () => {
      nowIndex = (nowIndex - 1 + images.length) % images.length;
      imgElement.src = images[nowIndex];
      console.log("Imagen anterior:", nowIndex, images[nowIndex]);
    });
  
    btnNext.addEventListener("click", () => {
      nowIndex = (nowIndex + 1) % images.length;
      imgElement.src = images[nowIndex];
      console.log("Imagen siguiente:", nowIndex, images[nowIndex]);
    });
  });
  