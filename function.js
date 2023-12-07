function changeText1() {
  var text1 = document.getElementById('price1');
  var text2 = document.getElementById('price2');
  var text3 = document.getElementById('price3');
  if (text1.innerHTML === '£4.99') {
    text1.innerHTML = '£19.99';
  } else {
    text1.innerHTML = '£4.99'
  }

  if (text2.innerHTML === '£9.99') {
    text2.innerHTML = '£24.99';
  } else {
    text2.innerHTML = '£9.99'
  }

  if (text3.innerHTML === '£14.99') {
    text3.innerHTML = '£29.99';
  } else {
    text3.innerHTML = '£14.99'
  }
}