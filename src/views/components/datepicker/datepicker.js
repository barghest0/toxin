import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";

$(".range-date").each(function (index) {
	const datepicker = this.lastChild.firstChild;
	new AirDatepicker(datepicker, {
		inline: true,
		range: true,
		minDate: new Date(),
		buttons: ["today", "clear"],
		onSelect: data => {
			const [from, to] = data.formattedDate;
			$(`#date-from-${index + 1}`).val(from);
			$(`#date-to-${index + 1}`).val(to);
		},
	});
});

$(".filter-date").each(function (index) {
	const datepicker = this.lastChild.firstChild;
	new AirDatepicker(datepicker, {
		inline: true,
		range: true,
		minDate: new Date(),
		onSelect: data => {
			const [from, to] = data.formattedDate;
			$(".text-field__input_filter-date").val(`${from} - ${to || ""}`);
		},
		classes: "air-datepicker_md",
	});
});
