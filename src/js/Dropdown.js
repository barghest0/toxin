import "item-quantity-dropdown/lib/item-quantity-dropdown.min";
import "item-quantity-dropdown/lib/item-quantity-dropdown.min.css";

class Dropdown {
	constructor(element, size, type) {
		this.element = element;
		this.size = size;
		this.type = type;
		this.init();
	}

	init() {
		this.setParams();
		this.element.iqDropdown(this.params);
		this.attachButtonsProps();
		this.attachButtonsListeners();
	}

	setParams() {
		this.params = {
			maxItems: 20,
			setSelectionText: this.type === "people" ? this.setPeopleText : this.setApartmentsText,
		};
	}

	attachButtonsProps() {
		this.element.find(".button-decrement").prop("disabled", true);
	}

	attachButtonsListeners() {
		this.element.find(".button-increment").on("click", function () {
			if ($(this).prev().html() > 0) {
				$(this).prev().prev().prop("disabled", false);
			}
		});
		this.element.find(".button-decrement").on("click", function () {
			if ($(this).next().html() == 0) {
				$(this).prop("disabled", true);
			}
		});

		$(".iqdropdown-button_clear").on("click", function () {
			$(".counter").html(0);
			$(".button-decrement").prop("disabled", true);
			$(".iqdropdown-selection").html("Сколько гостей");
		});
	}

	setPeopleText(itemCount, totalItems) {
		if (!totalItems) {
			return `Сколько гостей`;
		}
		let result = itemCount["adult"] + itemCount["child"] + itemCount["newborns"];
		if (totalItems[totalItems.length - 1] == 1 || totalItems == 1) {
			result += " Гость";
		} else if (totalItems > 1 && totalItems < 5) {
			result += " Гостя";
		} else {
			result += " Гостей";
		}

		if (itemCount["newborns"]) {
			if (itemCount["newborns"] == 1) {
				result += ` , ${itemCount["newborns"]} Младенец`;
			} else if (itemCount["newborns"] > 1 && itemCount["newborns"] < 5) {
				result += ` , ${itemCount["newborns"]} Младенца`;
			} else {
				result += ` , ${itemCount["newborns"]} Младенцев`;
			}
		}
		return result;
	}

	setApartmentsText(itemCount, totalItems) {
		if (!totalItems) {
			return `Сколько комнат`;
		}
		let result = [];
		for (const key in itemCount) {
			if (itemCount[key] >= 1 && key == "bedrooms") {
				result.push(`${itemCount[key]} Комнат`);
			} else if (itemCount[key] >= 1 && key == "beds") {
				result.push(`${itemCount[key]} Кроватей`);
			} else if (itemCount[key] >= 1 && key == "bathrooms") {
				result.push(`${itemCount[key]} Ванных комнат`);
			}
		}
		result = result.join(", ").slice(0, 20);
		if (result.length == 20) {
			return result + "...";
		}
		return result;
	}
}

export default Dropdown;
