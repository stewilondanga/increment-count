var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

console.log("hi");

var x = 0;
console.log(x);

document.getElementById("output").innerHTML = x;

function incrementCount() {
  x++;
  document.getElementById("output").innerHTML = x;
}
