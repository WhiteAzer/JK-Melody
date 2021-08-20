$(document).ready(function () {
    let currentFloor = 2;
    let buttonUp = $(".button-up");
    let buttonDown = $(".button-down");
    let usCurrentFloor;
    let floorPath = $(".main__img path");
    let modal = $(".modal");
    let modalDialog = $(".modal__dialog");
    let modalClose = $(".modal__close");
    let viewFlats = $(".view-flats");

    floorPath.on("mouseover", function() {
        floorPath.removeClass("current-floor");
        currentFloor = $(this).attr("data-floor");
        $(".counter").text(currentFloor);
    });

    buttonUp.on("click", function() {
        if (currentFloor < 18) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false});
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
        
    });

    buttonDown.on("click", function() {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false});
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    });

    modalDialog.on("click", function(e) {
        e.stopPropagation();
    });

    floorPath.on("click", toggleModal);
    modalClose.on("click", toggleModal);
    viewFlats.on("click", toggleModal);
    modal.on("click", toggleModal);

    function toggleModal() {
        modal.toggleClass("is-open");
    }
});