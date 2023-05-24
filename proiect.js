
//2. modificarea stilului unui element sau unui grup de elemente

// document.addEventListener("DOMContentLoaded", function() {
//     // Code to modify the footer color
//     var body = document.body;
//   if (body) {
//     body.style.backgroundColor = "white";
//   }
// });

//3. manipularea DOM-ului (selectați elemente după ID, clasă, tag și querySelector)

// const divElement = document.getElementById("pFooter");
//     console.log(divElement.textContent);

  
document.addEventListener("DOMContentLoaded", function() {
    const idElement = document.getElementById("pFooter");
    idElement.style.color = "black";
    idElement.style.color = "white";
  
    const classElements = document.getElementsByClassName("dropdown");
    for (let i = 0; i < classElements.length; i++) {
      classElements[i].style.color = "pink";
    }
  
    const tagElements = document.getElementsByTagName("li");
    for (let i = 0; i < tagElements.length; i++) {
      tagElements[i].style.color = "pink";
    }
  
    const queryElement = document.querySelector("li.link1.dropdown-menu");
    queryElement.style.color = "pink";
  });
  
// 4.  crearea și ștergerea de elemente + setTimeout si setInterval + date class

  //il creez si il sterg dupa 5 sec cu setTimeout
  document.addEventListener("DOMContentLoaded", function() {
    const parentElement = document.getElementById("parent");
  
    const newElement = document.createElement("div");
    newElement.textContent = "This is a new element";
    newElement.classList.add("gallery");
  
    parentElement.appendChild(newElement);
  
    setTimeout(function() {
      parentElement.removeChild(newElement);
    }, 5000);
  });
  
  //il creez si il sterg dupa 5 sec cu setInterval
  document.addEventListener("DOMContentLoaded", function() {
    const duration = 5000;
    const startTime = Date.now();

    const parentElement = document.getElementById("parent");
    const newElement = document.createElement("div");
    newElement.textContent = "This is a new element";
    newElement.classList.add("gallery");
    parentElement.appendChild(newElement);
  
    const interval = setInterval(function() {
      const currentTime = Date.now();
      if (currentTime - startTime >= duration) {
        parentElement.removeChild(newElement);
        clearInterval(interval); 
      }
    }, 1000); 
  });


//folosesc localStorage pt light theme si dark theme

function setLightTheme() {
    document.body.classList.add("light-theme");
  
    document.body.classList.remove("dark-theme");
  
    localStorage.setItem("theme", "light");

    const articles = document.querySelectorAll(".gallery article");
    articles.forEach((article) => {
      article.style.backgroundColor = "#fff";
      article.style.color = "#333";
    });
  
  }
  
  function setDarkTheme() {
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
    localStorage.setItem("theme", "dark");

    const articles = document.querySelectorAll(".gallery article");
    articles.forEach((article) => {
      article.style.backgroundColor = "#333";
      article.style.color = "#f2f2f2";
    });
  
  }
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
    setLightTheme();
  } else if (storedTheme === "dark") {
    setDarkTheme();
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("lightThemeButton").addEventListener("click", setLightTheme);
    document.getElementById("darkThemeButton").addEventListener("click", setDarkTheme);
       });

//schimbarea aleatorie a pizitiei pozelor
// + metode math si array


function randomizeGallery() {
    var gallery = document.querySelector('.gallery');
    var articles = Array.from(gallery.getElementsByTagName('article'));
      for (var i = articles.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = articles[i];
      articles[i] = articles[j];
      articles[j] = temp;
    }
      articles.forEach(function (article) {
      gallery.appendChild(article);
    });
  }
  
  document.addEventListener("DOMContentLoaded", function() {
  var randomizeButton = document.getElementById('randomizeButton');
  
  randomizeButton.addEventListener('click', randomizeGallery);
  });


  