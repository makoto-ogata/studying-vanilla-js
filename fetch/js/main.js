const url = 'https://dog.ceo/api/breeds/image/random';
const options = {
  method: 'GET'
};

const fetchTest1 = fetch(url, options);
console.log(fetchTest1);

// const fetchTest2 = fetch(url, options)
//   .then(response => response.json());

// console.log(fetchTest2);

function getDogImage(url, options){
  return fetch(url, options)
    .then( response => {
      console.log(response.ok);
      console.log(response.status)
      if(response.ok){
        return response.json();
      }

      throw new Error('エラーです');
    }).catch(e => console.log(e.message));
}

async function getImage(url, options){
  const response = await getDogImage(url, options);
  // console.log(response.message);
  const imageElement = document.createElement('img');
  imageElement.src = response.message;
  document.getElementById('image').appendChild(imageElement);
}

getImage(url, options);