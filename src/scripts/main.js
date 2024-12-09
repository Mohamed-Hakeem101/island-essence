$(document).ready(function () {
    // Product Data
    const products = [{
            productID: 1,
            productName: "Calm Waters",
            category: "Spice Blends",
            type: "Calm Waters",
            brand: "Island Essence",
            price: "10",
            description: "A blend to promote relaxation and sleep",
            img: "../assets/productsImages/Calm_Waters.WebP",
            ingredients: {
                1: 'Cardamom',
                2: 'Ashwagandha',
                3: 'Brahmi',
                4: 'Jatamansi',
                5: 'Nutmeg',
            },
            concern: {
                1: 'Reduce stress & Anxiety',
                2: 'Improve digestion',
                3: 'Enhances mental clarity and relaxation',
                4: 'Reduce mental fatigue',
                5: 'Restful sleep',
                6: 'Calming the mind',
                7: 'Aiding in sleep induction',
            },
            trending: "trending"
        },
        {
            productID: 2,
            productName: "Immunity Growth",
            category: "Spice Blends",
            type: "Immunity Growth",
            brand: "Island Essence",
            price: "12",
            description: "A blend to support the immune system",
            img: "../assets/productsImages/Immunity_Growth.WebP",
            ingredients: {
                1: 'Ginger',
                2: 'Turmeric',
                3: 'Cardamom',
                4: 'Ashwagandha',
                5: 'Cinnamon',
                6: 'Tulsi',
                7: 'Black Pepper',
                8: 'Amla',
                9: 'Cloves',
            },
            concern: {
                1: 'Reduce stress & Anxiety',
                2: 'Improve digestion',
                3: 'Regulate blood sugar levels',
                4: 'Boost immunity',
                5: 'Reduce respiratory issues',
                6: 'Fight infections',
                7: 'Protect cells from damage',
                8: 'Fighting off colds and flu'
            },
            trending: "trending"
        },
        {
            productID: 3,
            productName: "Inner Fire",
            category: "Spice Blends",
            type: "Inner Fire",
            brand: "Island Essence",
            price: "17",
            description: "A blend to boost metabolism and energy",
            img: "../assets/productsImages/Inner_Fire.WebP",
            ingredients: {
                1: 'Ginger',
                2: 'Turmeric',
                3: 'Cardamom',
                4: 'Ashwagandha',
                5: 'Cinnamon',
            },
            concern: {
                1: 'Aiding in overall vitality',
                2: 'Improve digestion',
                3: 'Reduce stress & Anxiety',
                4: 'Boost energy levels',
                5: 'Boost metabolism',
                6: 'Regulate blood sugar levels',
                7: 'Improves insulin sensitivity'
            },
            trending: "trending"
        },
        {
            productID: 4,
            productName: "Island Detox",
            category: "Spice Blends",
            type: "Island Detox",
            brand: "Island Essence",
            price: "14",
            description: "Ayurvedic digestive spice blend",
            img: "../assets/productsImages/Island_Detox.WebP",
            ingredients: {
                1: 'Ginger',
                2: 'Turmeric',
                3: 'Cardamom',
                4: 'Cumin powder',
                5: 'Coriander powder',
                6: 'Fennel powder',
                7: 'Peppermint leaves',
                8: 'Lemon',
            },
            concern: {
                1: 'Enhance enzyme production',
                2: 'Improve digestion',
                3: 'Absorption of nutrients',
                4: 'Reduce bloating',
                5: 'Reduce gas',
                6: 'Reduce cramps',
                7: 'Mild laxative properties',
                8: 'Reduces nausea',
                9: 'Aiding in overall vitality',
                10: 'Aids in detoxification',
                11: 'Freshens breath',
                12: 'Soothes the stomach lining',
                13: 'A refreshing taste'
            },
            trending: "trending"
        },
        {
            productID: 5,
            productName: "Sharpened Mind",
            category: "Spice Blends",
            type: "Sharpened Mind",
            brand: "Island Essence",
            price: "15",
            description: "A blend to enhance focus and memory",
            img: "../assets/productsImages/Sharpened_Mind.WebP",
            ingredients: {
                1: 'Ginger',
                2: 'Gotu Kola',
                3: 'Ginkgo Biloba',
                4: 'Brahmi',
                5: 'Ashwagandha',
            },
            concern: {
                1: 'Reduce stress & Anxiety',
                2: 'Reduce mental fatigue',
                3: 'Improve memory',
                4: 'Enhance focus & clarity',
                5: 'Improves blood circulation to the brain',
                6: 'Support brain health'
            },
            trending: "trending"
        }
    ];


    // CURRENCY CONVERTING

    const conversionRate = 290; // USD to LKR conversion rate
    let currency = localStorage.getItem('currency') || "USD"; // Retrieve saved currency or default to USD

    // Set the toggle button text based on the current currency
    $('#toggleCurrency').text(currency);

    // Function to update product prices
    function updatePrices() {
        $(".product-price").each(function () {
            const productID = $(this).data('id') || $(this).closest('.product-card').find('.product-btn').data('id');
            const product = products.find(p => p.productID === productID);
            if (product) {
                const price = parseFloat(product.price);
                const newPrice = currency === "USD" ? `$${price}` : `LKR ${price * conversionRate}`;
                $(this).text(newPrice);
            }
        });
    }

    // Apply the saved currency on page load
    $(document).ready(() => {
        updatePrices();
    });

    // Handle currency toggle
    $('#toggleCurrency').on('click', () => {
        // Toggle the currency
        currency = currency === "USD" ? "LKR" : "USD";
        localStorage.setItem('currency', currency); // Save the selected currency to localStorage
        $('#toggleCurrency').text(currency);

        // Update prices on all products
        updatePrices();
    });




    let $wishlistItems = []; // Initialize an empty wishlist array
    let $cartItems = []; // Initialize an empty cart array
    let $cartItemCount = 0; // Initialize the cart item count
    let $wishListItemCount = 0; // Initialize the wishlist item count


    // HOME (INDEX) PAGE


    // Select DOM elements using jQuery
    const $productsSection = $("#new-products .swiper-wrapper");
    const $productsCount = $("#products-count");

    // Filter products to include only those with the "trending" key
    const $trendingProducts = products.filter(product => product.trending === "trending");

    // Update the text content with the count of products
    $productsCount.text(`Showing all ${$trendingProducts.length} products`);

    // Update the products in the HTML
    $trendingProducts.forEach(({
        productID,
        productName,
        price,
        img
    }) => {
        $productsSection.append(`
        <div class="swiper-slide d-flex justify-content-center">
            <div class="card product-card my-auto shadow-2-strong">
                <div class="card-top image">
                    <img src="${img}" class="card-img-top" loading="lazy"/>
                </div>
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${productName}</h5>
                    <p class="card-text product-price">$${price}</p>
                    <div class="card-footer d-flex justify-content-start align-items-center gap-2 pt-3 px-0 pb-0 mt-auto">
                        <button class="btn primary-btn product-btn rounded-4" data-id="${productID}"><small>Preview</small></button>
                        <button class="add-to-cart border-0" data-id="${productID}"><i class="fa-solid fa-cart-plus" title="add to cart"></i></button>
                        <button class="add-to-wishlist border-0" data-id="${productID}"><i class="fa-solid fa-heart"></i></button>
                    </div>
                </div>
            </div>
        </div>
    `);
    });

    // Attach event listeners to product buttons
    $(document).on('click', '.product-card .product-btn', function (event) {
        event.preventDefault();
        const $productID = $(this).data('id');
        viewProduct($productID);
    });

    function viewProduct($productID) {
        window.location.href = `single-product.html?id=${$productID}`;
    }

    // Initialize Swiper after all DOM is loaded
    const $swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        slidesPerView: 1, // Default for very small screens
        spaceBetween: 5, // Adjust spacing between slides as needed
        breakpoints: {
            576: { // Small screens (e.g., small tablets)
                slidesPerView: 2,
            },
            768: { // Medium screens (e.g., tablets)
                slidesPerView: 3,
            },
            1024: { // Large screens (e.g., desktops)
                slidesPerView: 4,
            }
        }
    });


    // PRODUCTS PAGE


    // Render Products in HTML
    function renderProducts(productList) {
        const productsSection = $("#products .products-row");
        productsSection.empty(); // Clear existing content
        $.each(productList, function (index, {
            productID,
            productName,
            price,
            img
        }) {
            const productCard = `
            <div class="col-lg-3 col-md-6 col-sm-6 d-flex">
                <div class="card product-card w-100 my-2 shadow-2-strong">
                    <div class="card-top image">
                        <img src="${img}" class="card-img-top" loading="lazy"/>
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${productName}</h5>
                        <p class="card-text product-price">$${price}</p>
                        <div class="card-footer d-flex justify-content-start align-items-center gap-2 pt-3 px-0 pb-0 mt-auto">
                            <button class="btn primary-btn product-btn rounded-4" data-id="${productID}"><small>Preview</small></button>
                            <button class="add-to-cart border-0" data-id="${productID}"><i class="fa-solid fa-cart-plus" title="add to cart"></i></button>
                            <button class="add-to-wishlist border-0" data-id="${productID}"><i class="fa-solid fa-heart"></i></button>
                        </div>
                    </div>
                </div>
            </div>`;
            productsSection.append(productCard);
        });
    }

    // Update product count
    function updateProductCount(count) {
        $productsCount.text(`Showing all ${count} products`); // Correctly update using jQuery object
    }

    // Initial products and products count render
    updateProductCount(products.length);
    renderProducts(products);

    // Sorting Functionality
    $('.products-sorting select').on('change', function () {
        let sortedProducts = [...products];
        switch ($(this).val()) {
            case 'All':
                sortedProducts = products; // Correctly reset to all products
                break;
            case 'Popular':
                sortedProducts = sortedProducts.filter(product => product.trending);
                break;
            case 'Latest':
                sortedProducts = sortedProducts.filter(product => product.trending);
                break;
            case 'Low to high':
                sortedProducts.sort((a, b) => a.price - b.price);
                break;
            case 'High to low':
                sortedProducts.sort((a, b) => b.price - a.price);
                break;
        }
        updateProductCount(sortedProducts.length);
        renderProducts(sortedProducts);
    });

    // Handling products search bar
    const $searchBar = $('#search-input');

    $searchBar.on('keyup', function () { // Changed from keydown to keyup for better UX
        const searchValue = $(this).val().trim(); // Trim to handle accidental spaces
        if (searchValue.length > 0) {
            const searchedProducts = products.filter(product =>
                product.productName.toLowerCase().includes(searchValue.toLowerCase())
            );

            updateProductCount(searchedProducts.length);
            renderProducts(searchedProducts.length > 0 ? searchedProducts : []); // Use ternary operator
        } else {
            // Input is empty, show all products
            updateProductCount(products.length);
            renderProducts(products);
        }
    });

    // Filtering products dropdown
    const $filterProduct = $('#products .concern-filter');

    // Collect and populate unique concerns
    const uniqueConcerns = [...new Set(products.flatMap(product =>
            typeof product.concern === 'object' ? Object.values(product.concern) : [product.concern]))]
        .filter(Boolean); // Remove any null or undefined concerns

    $.each(uniqueConcerns, function (i, concern) {
        $filterProduct.append(`<option value="${$.trim(concern)}">${$.trim(concern)}</option>`);
    });

    // Event listener for filter-concern
    $filterProduct.on('change', function () {
        const selectedConcern = $(this).val().trim(); // Get the selected concern
        const filteredProducts = products.filter(product =>
            typeof product.concern === 'object' ?
            Object.values(product.concern).some(concern => $.trim(concern) === selectedConcern) :
            product.concern && $.trim(product.concern) === selectedConcern
        );

        updateProductCount(filteredProducts.length);
        renderProducts(filteredProducts);
    });


    // SINGLE PRODUCT PAGE


    // Number of products functionality
    let $numberOfProducts = $('#number-of-products');
    $numberOfProducts.val(1);

    // Get product ID from URL
    const queryParams = new URLSearchParams(window.location.search);
    const product_ID = queryParams.get("id");

    // Find the product by ID
    const product = products.find(p => p.productID == product_ID);

    // Populate the HTML elements
    if (product) {
        $("#product-name").text(product.productName);
        $(".product-price").text(currency === "USD" ? `$${product.price}` : `LKR ${product.price * conversionRate}`);
        $("#product-description").text(product.description);
        $("#product-catogary").text(product.category);
        $("#product-type").text(product.type);
        $("#product-img").attr("src", product.img);
        $("#product-brand").text(product.brand);

        $('.cart-wishlist-div').append(`
                <button class="add-to-wishlist border-0" data-id="${product_ID}"><i class="fa-solid fa-heart"></i></button>
                <button class="add-to-cart border-0" data-id="${product_ID}"><i class="fa-solid fa-cart-plus" title="add to cart"></i></button>
            `)
        $('.buttons-div').append(`
                <button class="proceed-to-checkout btn warning-btn shadow-0 mb-1 py-1 px-2" data-id="${product_ID}"><small>Buy Now</small></button>
                <button class="continue-shopping btn primary-btn shadow-0 mb-1 py-1 px-2"><small>Continue shopping</small></button>
            `)

        // Render ingredients dynamically
        const $ingredientsContainer = $("#product-ingredients-list ul");
        $ingredientsContainer.empty(); // Clear any existing content
        $.each(product.ingredients, function (key, value) {
            const ingredientItem = $("<li>").text(value);
            $ingredientsContainer.append(ingredientItem);
        });

        $(document).on("click", '.proceed-to-checkout', function () {
            const productDetails = `id=${product.productID}&name=${encodeURIComponent(product.productName)}&quantity=${$numberOfProducts.val()}&price=${product.price}`;
            window.location.href = `payment.html?${productDetails}`;
        });

        $(document).on('click', '.continue-shopping', function () {
            window.location.href = `products.html`;
        })
    } else {
        // window.location = 'error.html';
    }

    let $increaseNumberOfProducts = $('#increase-number-of-products');
    let $decreaseNumberOfProducts = $('#decrease-number-of-products');

    $increaseNumberOfProducts.on('click', () => {
        let currentValue = parseInt($numberOfProducts.val());
        $numberOfProducts.val(currentValue + 1); // Increment value
        $decreaseNumberOfProducts.removeAttr('disabled'); // Enable the decrease button
    });

    $decreaseNumberOfProducts.on('click', () => {
        let currentValue = parseInt($numberOfProducts.val());
        if (currentValue > 1) {
            $numberOfProducts.val(currentValue - 1); // Decrement value
        }
        if (parseInt($numberOfProducts.val()) === 1) {
            $decreaseNumberOfProducts.attr('disabled', 'true'); // Disable if 1
        }
    });



    // CART AND WISHLIST


    // WISH LIST 

    // Initialize wishlist button colors based on localStorage
    $('.add-to-wishlist').each(function () {
        const $productID = $(this).data('id');
        if (localStorage.getItem(`wishList_${$productID}`)) {
            $(this).css('color', 'red'); // Set red if in wishlist
        } else {
            $(this).css('color', '#41563E'); // Default color
        }
    });


    // Add to Wishlist
    $(document).on('click', '.add-to-wishlist', function () {
        const $productID = $(this).data('id'); // Get the productID from the data-id attribute
        const $thisBtn = $(this)
        $thisBtn.css('color', '#41563E')

        // Find the product details in the $trendingProducts array
        const $product = $trendingProducts.find(item => item.productID === $productID);

        if ($product) {
            // Check if the product is already in the wish-list
            const $existingProduct = $wishlistItems.find(item => item.productID === $productID);

            if (!$existingProduct) {
                // If not, add it to the wish-list
                $wishlistItems.push({
                    ...$product,
                    quantity: 1
                }); // Add product with default quantity 1
                $wishListItemCount++; // Increment wish-list item count
                localStorage.setItem(`wishList_${$productID}`, JSON.stringify($product));
                updateWishListModal(); // Update the wish-list modal
                updateWishListBadge(); // Update the wish-list badge
                $($thisBtn).css('color', 'red'); // Set red
            } else {
                // If the product is already in the wish-list, trigger remove functionality
                $(`.remove-wish-list-item-btn[data-id="${$productID}"]`).trigger('click');
                return;
            }
        }
    });

    // Function to update the wish-list modal
    function updateWishListModal() {
        const $wishlistItemsRow = $('.wish-list-items-row'); // Select the container for wish-list items
        $wishlistItemsRow.empty(); // Clear existing items
        let totalItems = 0; // Initialize total items
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (key.startsWith('wishList_')) {
                let product = JSON.parse(localStorage.getItem(key));
                let priceText = currency === "USD" ? `$${product.price}` : `LKR ${product.price * conversionRate}`;
                // Append each item to the wish-list modal
                $wishlistItemsRow.append(`
                    <div class="card product-card wish-list-row mb-2" data-key="${key}" style="height: 80px;">
                        <div class="row wish-list-item align-items-center justify-content-between h-100">
                            <div class="col-3 h-100">
                                <div class="card-top h-100 w-100">
                                    <img src="${product.img}" class="w-100 h-100" loading="lazy">
                                </div>
                            </div>
                            <div class="col-6 col-md-4">
                                <small class="wish-list-item-title">${product.productName}</small>
                            </div>
                            <div class="col-2 wish-list-price product-price">${priceText}</div>
                            <div class="col-1 col-md-2 d-flex justify-content-center">
                                <i class="fa-solid fa-trash-can p-0 btn remove-wish-list-item-btn" data-id="${product.productID}"></i>
                            </div>
                        </div>
                    </div>
                `);

                totalItems++; // Add to total item count
            }
        }

        // Update total items in the modal
        $('.wish-list-items-total').text(`${totalItems}`);
        $wishListItemCount = totalItems
        updateWishListBadge()
    }

    // Function to update the wish-list badge
    function updateWishListBadge() {
        // Update the text of the badge with the count of items in the wish-list
        $('.wish-list-badge').text($wishListItemCount);
    }

    updateWishListModal();

    // Add functionality to remove item from wishlist
    $(document).on('click', '.remove-wish-list-item-btn', function () {
        const $thisBtn = $(this)
        const key = $(this).closest('.product-card').data('key'); // Get the key from the parent div data attr 
        localStorage.removeItem(key); // Remove from localstorage

        const $productID = $(this).data('id'); // Get the productID from the data-id attribute
        $wishlistItems = $wishlistItems.filter(item => item.productID !== $productID); // Remove the item from the wish list

        $wishListItemCount--; // Decrement wish list item count
        updateWishListBadge(); // Update the wish list badge
        updateWishListModal(); // Update the modal display
    });


    // CART 

    // Add to Cart
    $(document).on('click', '.add-to-cart', function () {
        const $productID = $(this).data('id'); // Get the productID from the data-id attribute

        // Find the product details in the $trendingProducts array
        const $product = $trendingProducts.find(item => item.productID === $productID);

        if ($product) {
            // Check if the product is already in the cart
            const $existingProduct = $cartItems.find(item => item.productID === $productID);

            if (!$existingProduct) {
                // If not, add it to the cart
                $cartItems.push({
                    ...$product,
                    quantity: 1
                }); // Add product with default quantity 1
                $cartItemCount++; // Increment cart item count
                localStorage.setItem(`cart_${$productID}`, JSON.stringify($product));
                // alert('Product added to cart successfully');
            } else {
                // If the product is already in the cart
                alert('Product already exists in the cart');
                return;
            }

            // Update the cart modal
            updateCartModal();

        }
    });

    // Update the cart modal
    function updateCartModal() {
        const $cartItemsRow = $('.cart-items-row');
        $cartItemsRow.empty();
        let totalPrice = 0.00;
        let totalItems = 0;

        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (key.startsWith('cart_')) {
                let product = JSON.parse(localStorage.getItem(key));
                let priceText = currency === "USD" ? `$${product.price}` : `LKR ${product.price * conversionRate}`;

                // Append each item to the cart modal
                $cartItemsRow.append(`
                <div class="card product-card cart-row mb-2" data-key="${key}" style="height: 80px;">
                    <div class="row cart-item align-items-center h-100">
                        <div class="col-3 h-100">
                            <div class="card-top h-100 w-100">
                                <img src="${product.img}" class="w-100 h-100" loading="lazy">
                            </div>
                        </div>
                        <div class="col-4 col-md-3">
                            <small class="cart-item-title">${product.productName}</small>
                        </div>
                        <div class="col-2">
                            <form>
                                <input class="cart-quantity-input form-control" 
                                       type="number" 
                                       value="1" 
                                       min="1" 
                                       data-price="${priceText}" />
                            </form>
                        </div>
                        <div class="col-2 col-md-2 cart-price product-price">${priceText}</div>
                        <div class="col-1 col-md-2 d-flex justify-content-center">
                            <i class="fa-solid fa-trash-can p-0 btn remove-cart-item-btn" data-id="${product.productID}"></i>
                        </div>
                    </div>
                </div>
                `);
                totalPrice += parseFloat(product.price);
                totalItems++
                $cartItemCount = totalItems;
                updateCartBadge()
            }
        }

        $('.cart-total').text(currency === "USD" ? `$${totalPrice.toFixed(2)}` : `LKR ${(totalPrice * conversionRate).toFixed(2)}`);
        $('.cart-items-count').text(totalItems);

        // Show or hide checkout button
        if (totalItems > 0) {
            $('.cart-checkout-btn').show();
        } else {
            $('.cart-checkout-btn').hide();
        }
    }

    // Function to update the cart badge
    function updateCartBadge() {
        // Update the text of the badge with the count of items in the cart
        $('.cart-badge').text($cartItemCount);
    }

    updateCartModal();

    // Add functionality to remove item from cart
    $(document).on('click', '.remove-cart-item-btn', function () {
        const $productID = $(this).data('id'); // Get the productID from the data-id attribute

        localStorage.removeItem(`cart_${$productID}`)
        $cartItems = $cartItems.filter(item => item.productID !== $productID); // Remove the item from the cart
        $cartItemCount--; // Decrement cart item count
        updateCartBadge(); // Update the cart badge
        updateCartModal(); // Update the modal display
    });


    $(document).on('click', '.cart-checkout-btn', function () {
        const cartData = []; // Initialize an array to hold cart items

        // Loop through localStorage to gather all cart items
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (key.startsWith('cart_')) {
                let product = JSON.parse(localStorage.getItem(key));
                const quantity = parseInt(
                    $(`.cart-quantity-input[data-price="${product.price}"]`).val()
                ) || 1; // Get quantity of each product
                cartData.push({
                    ...product,
                    quantity,
                    totalPrice: quantity * product.price, // Calculate total price for each item
                });
            }
        }

        // Save cart data and total price into sessionStorage
        sessionStorage.setItem('cartData', JSON.stringify(cartData));
        sessionStorage.setItem(
            'cartTotalPrice',
            cartData.reduce((sum, item) => sum + item.totalPrice, 0).toFixed(2)
        );

        // Redirect to the payment page
        window.location.href = 'payment.html';
    });



});