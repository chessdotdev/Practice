const lines = [
    {text: verse1, delay: 1000},
    {text: verse2, delay: 4000},

    
  ];
  
  let i = 0;
  function playNext() {
    console.log(lines[i].text);
    i++;
    if (i < lines.length) setTimeout(playNext, lines[i].delay);
  }
  playNext();