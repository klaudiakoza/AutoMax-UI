document.addEventListener("DOMContentLoaded", function () {
	const cartButtons = document.querySelectorAll(".cart-btn");

	cartButtons.forEach((button) => {
		button.addEventListener("click", function () {
			const card = this.closest(".vehicle-card");

			if (this.classList.contains("add")) {
				// Add to cart
				this.textContent = "Remove from Cart";
				this.classList.remove("add");
				this.classList.add("remove");
				card.classList.add("in-cart");
			} else {
				// Remove from cart
				this.textContent = "Add to Cart";
				this.classList.remove("remove");
				this.classList.add("add");
				card.classList.remove("in-cart");
			}
		});
	});
});
