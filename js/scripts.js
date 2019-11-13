/* const selectElement = (s) => document.querySelector(s);

selectElement('.toggle').addEventListener('click', () => {
 selectElement('.toggle').classList.add('active');
});

selectElement('.toggle').addEventListener('click', () => {
 selectElement('.toggle').classList.remove('active');
}); */

$(document).ready(function() {
 $('.toggle').click(function() {
 $('.toggle').toggleClass('active')
 });
});
