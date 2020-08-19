let linkWrapper = document.querySelector(".link_wrapper");
let URL = "./dist/links.json";
function myLinks() {
  fetch(URL)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return new Error("Something wents wrong");
      }
    })
    .then((data) => {
      data.forEach((element) => {
        let links = document.createElement("div");
        links.setAttribute("class", "links");
        let a = document.createElement("a");
        a.textContent = element.caption;

        links.addEventListener("click", function () {
          location.href = element.url;
        });
        linkWrapper.appendChild(links);
        links.append(a);
      });
    });
}

myLinks();
