(function(){
  'use strict';

  var buttons = document.querySelectorAll('.button');

  for (var i = 0; i < buttons.length; i++) {
    var currentButton = buttons[i];
    currentButton.onclick = function() {
      var displayValue = document.getElementById('display').innerHTML;
      if (this.id === 'clear') {
        displayValue = this.value;
      }
      else if (this.id === 'equal') {
        var newArray = displayValue.split(' ');
        newArray[0] = +newArray[0];
        newArray[2] = +newArray[2];
        if (newArray[1] === '+') {
          displayValue = newArray[0] + newArray[2];
        } else if (newArray[1] === '-') {
          displayValue = newArray[0] - newArray[2];
        } else if (newArray[1] === '*') {
          displayValue = newArray[0] * newArray[2];
        } else if (newArray[1] === '/') {
          displayValue = newArray[0] / newArray[2];
        }
      } else {
        displayValue += this.value;
      }
      document.getElementById('display').innerHTML = displayValue;
    };

  }



  // var buttons = document.querySelectorAll('.button');
  //
  // console.log(buttons);
  //
  // for (var i = 0; i < buttons.length; i++) {
  //   var currentButton = buttons[i];
  //   currentButton.onclick = function() {
  //     var displayValue = document.getElementById('display').innerHTML;
  //     if (this.id === 'clear') {
  //       displayValue = this.value;
  //     }
  //     else if (this.id === 'equal') {
  //       displayValue = eval(displayValue);
  //     }
  //     else {
  //       displayValue += this.value;
  //     }
  //     document.getElementById('display').innerHTML = displayValue;
  //   };
  //
  // }

  // var display = document.getElementById('display');
  // var digit = document.querySelectorAll('.digit');
  // var mathOperator = document.querySelectorAll('.light-button');
  // var equals = document.querySelector('.equal');
  // var clear = document.querySelector('.clear');

  // var one = document.getElementById('one');
  // var two = document.getElementById('two');
  // var three = document.getElementById('three');
  // var four = document.getElementById('four');
  // var five = document.getElementById('five');
  // var six = document.getElementById('six');
  // var seven = document.getElementById('seven');
  // var eight = document.getElementById('eight');
  // var nine = document.getElementById('nine');
  // var zero = document.getElementById('zero');
  // var dec = document.getElementById('dec');
  // var divide = document.getElementById('divide');
  // var multiply = document.getElementById('multiply');
  // var subtract= document.getElementById('subtract');
  // var addition = document.getElementById('plus');
  // var clear = document.getElementById('clear');
  // var equal = document.getElementById('equal');
  //
  // one.addEventListener('click', function(){
  //   document.getElementById('display').value += '1';
  // });
  // two.addEventListener('click', function(){
  //   document.getElementById('display').value += '2';
  // });
  // three.addEventListener('click', function(){
  //   document.getElementById('display').value += '3';
  // });
  // four.addEventListener('click', function(){
  //   document.getElementById('display').value += '4';
  // });
  // five.addEventListener('click', function(){
  //   document.getElementById('display').value += '5';
  // });
  // six.addEventListener('click', function(){
  //   document.getElementById('display').value += '6';
  // });
  // seven.addEventListener('click', function(){
  //   document.getElementById('display').value += '7';
  // });
  // eight.addEventListener('click', function(){
  //   document.getElementById('display').value += '8';
  // });
  // nine.addEventListener('click', function(){
  //   document.getElementById('display').value += '9';
  // });
  // zero.addEventListener('click', function(){
  //   document.getElementById('display').value += '0';
  // });
  // dec.addEventListener('click', function(){
  //   document.getElementById('display').value += '.';
  // });
  // divide.addEventListener('click', function(){
  //   document.getElementById('display').value += '/';
  // });
  // multiply.addEventListener('click', function(){
  //   document.getElementById('display').value += '*';
  // });
  // addition.addEventListener('click', function(){
  //   document.getElementById('display').value += '+';
  // });
  // subtract.addEventListener('click', function(){
  //   document.getElementById('display').value += '-';
  // });
  // clear.addEventListener('click', function(){
  //   document.getElementById('display').value = '';
  // });
  // equal.addEventListener('click', function(){
  //   document.getElementById('display').value = eval(document.getElementById('display').value);
  // });



}());
