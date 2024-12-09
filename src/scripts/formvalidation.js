$(document).ready(function () {

    // PAYMENT PAGE

// Retrieve and parse data from session storage
const cartData = JSON.parse(sessionStorage.getItem('cartData')) || [];
let totalPrice = parseFloat(sessionStorage.getItem('cartTotalPrice')) || 0;

// Parse URL parameters to determine the checkout source
const paymentParams = new URLSearchParams(window.location.search);
const productName = paymentParams.get("name");
const productPrice = parseFloat(paymentParams.get("price"));
const quantity = parseInt(paymentParams.get("quantity"));

// DOM elements
const $cartItemsContainer = $('.cart-items-container');
const $paymentTotal = $('#payment-total');

// Clear previous cart items display
$cartItemsContainer.empty();

// Determine whether URL parameters are valid for a single product checkout
const isValidSingleProduct =
    productName &&
    quantity > 0;

if (isValidSingleProduct) {
    // Handle Single Product Checkout
    const singleProductTotal = productPrice * quantity;

    // Display single product details in the cart
    $cartItemsContainer.append(`
        <tr class="row">
            <td class="text-center col-6 d-flex justify-content-start text-muted">${productName}</td>
            <td class="text-center col-3 d-flex justify-content-center text-muted">${quantity}</td>
            <td class="text-center col-3 d-flex justify-content-end text-muted">$${singleProductTotal.toFixed(2)}</td>
        </tr>
    `);

    // Update the total price display for the single product
    $paymentTotal.text(`$${singleProductTotal.toFixed(2)}`);
} else {
    // Handle Cart Checkout when URL parameters are not valid
    cartData.forEach(item => {
       
            $cartItemsContainer.append(`
                <tr class="row">
                    <td class="text-center col-6 d-flex justify-content-start text-muted">${item.productName}</td>
                    <td class="text-center col-3 d-flex justify-content-center text-muted">${item.quantity}</td>
                    <td class="text-center col-3 d-flex justify-content-end text-muted">$${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
            `);
        }
    );

    // Display the total price of the cart
    $paymentTotal.text(`$${totalPrice.toFixed(2)}`);
}


    // FORM

    const $inputs = $('.form-control');
    const $submit = $('#form-submit');

    $submit.on('click', function (e) {
        let isValid = true; // Flag to track validation

        $inputs.each(function () {
            const $input = $(this);

            // Remove any existing error message
            const $error = $input.next('.error-message');
            if ($error.length) {
                $error.remove();
            }

            // Check if the input is empty or invalid (email or number)
            if ($input.val().trim() === '' ||
                ($input.attr('type') === 'email' && !validateEmail($input.val())) ||
                ($input.attr('type') === 'number' && isNaN($input.val()))) {
                isValid = false;

                // Create an error message
                const $errorMessage = $('<p>').addClass('error-message').text(`Please fill the ${$input.attr('id')} field.`);

                // Append the error message after the input field
                $input.after($errorMessage);
            }
        });

        if (!isValid) {
            e.preventDefault(); // Prevent form submission if validation fails
        }
    });

    // Helper function for email validation
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    
});