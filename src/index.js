import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Person from './js/person';

function planets(user) {
  user.lifeLeft();
  user.earthAge();
  user.mercuryAge();
  user.venusAge();
  user.marsAge();
  user.jupiterAge();
}

function show(person1) {
  $('#results').append(`Earth Age: ${person1.earthAge}<br>Years Left: ${person1.earthyrsLeft}<br>`);
  $('#results').append(`Mercury Age: ${person1.mercAge}<br>Years Left: ${person1.mercyrsLeft}<br>`);

}

$(document).ready(function () {
  $("#formOne").submit(function (element) {
    element.preventDefault();
    const age = $("#inputAge").val();
    const lifeExpect = 75;
    let example = new Person(age, lifeExpect);
    planets(example);
    show(example);
  });
});