import Datepicker from "../../../js/Datepicker";

new Datepicker($(".range-date"), "range", "lg");

new Datepicker($(".filter-date"), "filter", "md");

// $(".filter-date").each(function (index) {
// 	const datepicker = this.lastChild.firstChild;
// 	new AirDatepicker(datepicker, {
// 		inline: true,
// 		range: true,
// 		minDate: new Date(),
// 		dateFormat: "d MMM",
// 		buttons: ["clear", applyButton],
// 		onSelect: data => {
// 			const [from, to] = data.formattedDate;
// 			if (from && to) {
// 				$("#filter-date").val(`${from} - ${to}`);
// 			} else {
// 				$("#filter-date").val(`Выберите дату`);
// 			}
// 		},
// 		classes: "air-datepicker_md",
// 	});
// });

// $(".air-datepicker-button").attr("type", "button");
