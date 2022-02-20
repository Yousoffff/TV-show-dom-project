const url = "https://api.tvmaze.com/shows/82/episodes";

const select = document.querySelector("#select-movie");
const container = document.querySelector("#container");
const allOption = document.querySelector("#allOption");
const search = document.querySelector("#search-movie");

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    showImage(data);
    select.addEventListener("change", () => {
      console.log(select.value);
      if(select.value===allOption.value){
          clear();
          showImage(data);
      }else{
      const mmd = data.filter((el) => el.name === select.value);
      console.log(mmd)
      clear();
      showImage(mmd);
      }
    });

    search.addEventListener("search",() =>{
        console.log(search.value);
        const mmd2 = data.filter((el) => el.name.includes(search.value));
        clear();
        showImage(mmd2);
    })

  });

// axios.get(url).then((x) => showImage(x))
const clear = () => {
  container.innerHTML = "";
};

const showImage = (data) => {
  for (const movie of data) {
    const div = document.createElement("div");
    div.id="divmmd";

    const img = document.createElement("img");
    img.id="imgmmd";
    img.src = movie.image.medium;

    const p = document.createElement("p");
    p.id="pmmd";

    if(movie.number<10){
    p.textContent =  movie.name + " S"+movie.season+" E"+ "0" + movie.number;
    }else{
      p.textContent =
        movie.name + " S" + movie.season + " E" + movie.number;  
    }
    div.append(img,p);

    const option = document.createElement("option");
    option.textContent = movie.name;
    option.value = movie.name;
    select.append(option);

    // select.addEventListener("change", () => {

    // //   if (movie.id === mmd) {
    // //     console.log(movie.name);
    // //   }
    // });

    container.append(div);
    
  }

  //   console.log(select.options[select.selectedIndex].value);
  console.log(data);
};
