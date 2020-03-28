$(document).ready(function () {
    $('select').formSelect();
    $('.timepicker').timepicker();
    $('.datepicker').datepicker({
        format: "yyyy-mm-dd",
        autoClose: true,
        selectYears: 100,
        max: new Date(),
    });
});