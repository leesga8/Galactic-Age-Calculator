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
  $('#results').append(`Earth Age: ${person1.earthAge}<br>Years: ${person1.earthyrsLeft}<br>`);
  $('#results').append(`Mercury Age: ${person1.mercAge}<br>Years: ${person1.mercyrsLeft}<br>`);
  $('#results').append(`Venus Age: ${person1.venusAge}<br>Years: ${person1.venusyrsLeft}<br>`);
  $('#results').append(`Mars Age: ${person1.marsAge}<br>Years: ${person1.marsyrsLeft}<br>`);
  $('#results').append(`Jupiter Age: ${person1.jupiterAge}<br>Years: ${person1.jupiteryrsLeft}<br>`);
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