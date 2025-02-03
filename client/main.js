const app = document.getElementById('app')

async function getJokes() {
  const res = await fetch("https://w4project.onrender.com/games")
  const jokes = await res.json()
  console.log(jokes)
  displayJokes(jokes);
}

function displayJokes(param) {
  app.innerHTML = ''
  const div= document.createElement('div');
  param.forEach(singleGame => {
    const pTag = document.createElement('p');
    pTag.innerText = singleGame.result;
    div.appendChild(pTag);
  });
  app.appendChild(div);
}

getJokes();

