const editor = document.getElementById('editor');

editor.value = localStorage.getItem('textValue');
editor.addEventListener('keyup', (event) => {
  localStorage.textValue = editor.value;
});
