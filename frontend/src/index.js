import './style.scss';
require('intersection-observer');
import 'whatwg-fetch';

// console.log('webpackテストです');


// window.addEventListener('load', ()=> {
//   alert('babelテストです');
// });

const options = {
  rootMargin: '-400px'
};

const observer = new IntersectionObserver(callback, options);

const targets = document.querySelectorAll('.message-box');

targets.forEach(target => {
  observer.observe(target);
});

function callback(entries) {
  entries.forEach(entry => {
    // console.log(entry);
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
}

const url = 'http://coinbaby8.com/udemy_js_api/api/udemy_js';

const get_options = {
  method: 'GET'
};

const getFormData = fetch(url, get_options)
.then(response => response.json());
console.log(getFormData);

// const postForm = document.forms.post_form;
// const formData = new FormData(postForm);
// console.log(formData);

document.getElementById('button')
.addEventListener('click', () => {
  const postForm = document.forms.post_form;
  const formData = new FormData(postForm);
  const url = 'http://coinbaby8.com/udemy_js_api/api/udemy_js';
  const post_options = {
    method: 'post',
    body: formData
  };

  fetch(url, post_options)
  .then(response => {
    if(response.ok){
      return response.text();
    } else {
      return new Error();
    }
  })
  .then( text => console.log(text))
  .catch( error => console.error(error));

});