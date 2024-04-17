const hero = document.getElementById("hero");
const foto = document.getElementById("foto");

hero.addEventListener("click", function () {
  const randomnumber = crypto.randomUUID();

  const imageURL = "https://picsum.photos/v2/list?page=89&limit=1"
` let imageSource = "https://picsum.photos/seed/${randomnumber}/1000/600";

  //
  foto.src = imageSource;
})
