const elements = document.querySelectorAll(".js-choice");

elements.forEach(element => {
    new Choices(element, { searchEnabled: false, itemSelectText: "" });
});


