import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import imageUpload from 'quill-plugin-image-upload';

Quill.register('modules/imageUpload', imageUpload);

var MOCK_IMG_SRC = 'http://tva1.sinaimg.cn/crop.0.0.217.217.180/4c8b519djw8fa45br0vpxj2062062q33.jpg';
var quill = new Quill('#editor', {
  theme: 'snow',
  modules: {
    toolbar: [
      [{
        'header': [1, 2, 3, 4, 5, false]
      }, {
        'size': ['small', false, 'large', 'huge']
      }],
      [{
        'color': []
      }, {
        'background': []
      }, 'bold', 'italic', 'underline', 'strike'],
      ['link', 'blockquote', 'code-block', 'image'],
      [{
        'align': []
      }, {
        'indent': '-1'
      }, {
        'indent': '+1'
      }, {
        list: 'ordered'
      }, {
        list: 'bullet'
      }],
      ['clean'] // outdent/indent
    ],
    imageUpload: {
      upload: file => {
        // return a Promise that resolves in a link to the uploaded image
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(MOCK_IMG_SRC); // Must resolve as a link to the image
          }, 8000);
          // const fd = new FormData();
          // fd.append("upload_file", file);

          // const xhr = new XMLHttpRequest();
          // xhr.open("POST", `${window.location.pathname}/api/files/add`, true);
          // xhr.onload = () => {
          //   if (xhr.status === 200) {
          //     const response = JSON.parse(xhr.responseText);
          //     resolve(response.file_path); // Must resolve as a link to the image
          //   }
          // };
          // xhr.send(fd);
        });
      }
    },
  },
  placeholder: 'please write something...',
});

document.getElementById('output').onclick = function() {
  console.log(quill.root.innerHTML);
}