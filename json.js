export default function getPosts(url, element, callMeBack) {
    setInterval(async () => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          let contents = [];
          data.content.forEach((content) => {
            contents.push(
              new Moviecard(              
                content.title1,
                content.img1,
                content.title2,
                content.img2,
                content.title3,
                content.img3,
                0
              )
            );
          });
          callMeBack(contents);
          console.log("hello from JSON");
          console.log(data.content);
        });
      element.innerHTML = " ";
    }, 4000);
    //   document.getElementById("card").innerHTML = " ";
  }
  
  export class Moviecard {
    constructor(
      _title1,
      _img1,
      _title2,
      _img2,
      _title3,
      _img3
    ) {
      this.title1 = _title1;
      this.title2 = _title2;
      this.title3 = _title3;
      this.img1 = _img1;
      this.img2 = _img2;
      this.img3 = _img3;
    }
  
    Create() {
      return `
          <h2>${this.title}</h2>
              <div class="content">
                  <a href=""><img src="${this.img1}" alt=""></a>
                  <a href=""><img src="${this.img2}" alt=""></a>
                  <a href=""><img src="${this.img3}" alt=""></a>			
              </div>
              <div class="details">
                  <a href="">${this.title1}</a>
                  <a href="">${this.title2}</a>
                  <a href="">${this.title3}</a>
              </div>`;
    }
  }