async function loadText() {
    const textElement = document.getElementById('text');
    textElement.innerHTML = "Loading...";
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/"+ Math.floor(Math.random() * 200 + 1));
        if(!response.ok){
            throw new Error('Network response not work');
        }
        const data = await response.json();

        textElement.innerHTML = data.title;

    }catch(error){
        console.error('Fetch error', error);
        textElement.innerHTML = "Loading...";
    }
}


