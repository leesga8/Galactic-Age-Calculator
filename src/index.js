import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Person from './js/person';


function planets(user) {
  user.lifeLeft();
  user.mercuryAge();
  user.venusAge();
  user.marsAge();
  user.jupiterAge();
}


  $(document).ready(function(){
    $("#formOne").submit(function(element){
      element.preventDefault();
      const age = $("#inputAge").val();
      const lifeExpect = 75;
      let example = new Person(age, lifeExpect);
      planets(example);
      
    });
  });