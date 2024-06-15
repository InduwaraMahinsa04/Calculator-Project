let Calculation = localStorage.getItem('Calculation') || '';

function updateCalculation(value){
  Calculation += value;
  console.log(Calculation);
  displayCalculation();
  localStorage.setItem('Calculation', Calculation);
 
}

function calculateCalculation(){
   Calculation=eval(Calculation);
     console.log(Calculation);
     
    displayCalculation();

    localStorage.setItem('Calculation', Calculation);


}
function displayCalculation(){
  document.querySelector('.js-display-calculation')
  .innerHTML = Calculation;
  
}

function clearCalculation(){
  Calculation ='';
  displayCalculation();
  localStorage.setItem('Calculation', Calculation);

}