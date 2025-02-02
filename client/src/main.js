const app = document.getElementById('app')

async function getJokes() {
  const res = await fetch(`http://localhost:1234/games`)
  const jokes = await res.json()
  displayJokes(jokes);
}

function displayJokes(param) {
  app.innerHTML = ''
  param.forEach(singleGame => {
    const pTag = document.createElement('p');
    const div = document.getElementById('div');
    pTag.innerText = singleGame.result;
    div.appendChild(pTag);
    app.appendChild(div);
  });
}

fetchData();

