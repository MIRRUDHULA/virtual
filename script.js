// Get DOM elements
const photoInput = document.getElementById('photo-input');
const userPhoto = document.getElementById('user-photo');
const dressOptions = document.querySelectorAll('.dress');
const selectedDress = document.getElementById('selected-dress');
const quantityInput = document.getElementById('quantity');
const paymentMethodInput = document.getElementById('payment-method');
const checkoutForm = document.getElementById('checkout-form');

// Event listeners
photoInput.addEventListener('change', handlePhotoUpload);
dressOptions.forEach(dress => dress.addEventListener('click', handleDressSelection));
checkoutForm.addEventListener('submit', handleCheckout);

// Function to handle photo upload
function handlePhotoUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        userPhoto.src = e.target.result;
        userPhoto.classList.remove('hidden');
    }

    reader.readAsDataURL(file);
}

// Function to handle dress selection
function handleDressSelection(event) {
    const dress = event.target;
    const dressSrc = dress.getAttribute('src');

    selectedDress.src = dressSrc;
    selectedDress.classList.remove('hidden');
}

// Function to handle checkout
function handleCheckout(event) {
    event.preventDefault();

    const quantity = quantityInput.value;
    const paymentMethod = paymentMethodInput.value;

    // Perform further processing or redirect to a checkout page
    // based on the selected quantity and payment method
    // For demonstration purposes, we'll simply log the values to the console
    console.log('Quantity:', quantity);
    console.log('Payment Method:', paymentMethod);
    alert('Checkout successful!');
}
