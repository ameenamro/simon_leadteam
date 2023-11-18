    const removeButtons = document.querySelectorAll(".cart-item button");
    removeButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const cartItem = this.parentNode;
            cartItem.parentNode.removeChild(cartItem);
        });
    });
