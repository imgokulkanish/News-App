// ApiKey 
// 009cd83505a244979d1a22814939f698

function getData() {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=009cd83505a244979d1a22814939f698')
         .then((res) => {
             console.log(res.data.articlesarticles);
             let latestNews = res.data.articles;
          //   console.log(latestNews);
             var newsContent = '';
            
             for (var i in latestNews) {
             newsContent +=
         
             `<div class="newsContent">
          <div class="card-image">
          <img  src="${latestNews[i].urlToImage}">
          </div>
          <div class="card-title">
          <h6>${latestNews[i].title}</h6>
          </div>
          <div class="card-des">
          <p>${latestNews[i].description}</p>
          </div>
          <div class="btn">
          <a href="${latestNews[i].url}">READ MORE</a>
          </div>
          </div>`; }
          document.getElementById('box').innerHTML = newsContent; 
         }).catch(err=> console.log(err));
 }
 
 function getData2(){
     axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=009cd83505a244979d1a22814939f698')
         
         .then((data) => {
             console.log(data);
             var newsContent = '';
             let latestNews = res.data.articles;
             for (var i in latestNews) {
                 newsContent +=
                     `<div class="newsContent">
          
                   <div class="card-image">
          <img  src="${latestNews[i].urlToImage}">
          </div>
          <div class="card-title">
          <h6>${latestNews[i].title}</h6>
          </div>
          <div class="card-des">
          <p>${latestNews[i].description}</p>
          </div>
          <div class="btn">
          <a href="${latestNews[i].url}">READ MORE</a>
          </div>
          </div>`;
             }
              document.getElementById('box').innerHTML = newsContent;
         }).catch(err=> console.log(err));
    }