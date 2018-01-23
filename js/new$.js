$(document).ready(function() {
  Materialize.updateTextFields();
});


// Show sideNav
  $('.button-collapse').sideNav('show');
  // Hide sideNav
  $('.button-collapse').sideNav('hide');
  // Destroy sideNav
  $('.button-collapse').sideNav('destroy');


  $('.button-collapse').sideNav({
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
      onOpen: function(el) { /* Do Stuff */ }, // A function to be called when sideNav is opened
      onClose: function(el) { /* Do Stuff */ }, // A function to be called when sideNav is closed
    }
  );

// Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  $('.collapsible').collapsible();

  $(document).ready(function(){
     // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
     $('.modal').modal();
   });

   $(document).ready(function() {
      $('select').material_select();
    });

// Date Picker for Report generation
$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });

  // Accordion
  $(document).ready(function(){
   $('.collapsible').collapsible();
 });
 // Select
 $(document).ready(function() {
   $('select').material_select();
 });

$(".dropdown-button").dropdown();
