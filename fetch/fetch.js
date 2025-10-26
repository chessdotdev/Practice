     
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response=>
          response.json()
             ).then((response)=>{
              console.log(response)
                 })

//optional
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: "GET",
//   body: new FormData(),
// });

// fetch("https://example.com/", {
//   cache: "only-if-cached",
//   mode: "no-cors",
// });


