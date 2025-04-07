//your JS code here. If required.
// Select the dropdown and button elements
const colorSelect = document.getElementById('colorSelect');
const removeButton = document.querySelector('input[type="button"]');

// Add an event listener to the button
removeButton.addEventListener('click', function() {
    // Get the selected option
    const selectedOption = colorSelect.options[colorSelect.selectedIndex];

    // Remove the selected option from the dropdown
    if (selectedOption) {
        colorSelect.removeChild(selectedOption);
    }
});