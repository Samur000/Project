$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Заявка отправлена!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});


var input = document.querySelectorAll('input');
var div = document.querySelector('div');
var res;
for (let i = 0; i < input.length; i++) {
  input[i].addEventListener('input', function() {
    if (inputOne.value !== '' && inputTwo.value !== '' && inputThree.value !== '') {
      obyem = inputOne.value * inputTwo.value * inputThree.value;
      resObyem.textContent = ' ' + obyem + ' кв/м';
      price = obyem * 7000;
      resPrice.textContent = ' ' + price + ' р';

		resObyemModal.textContent = ' ' + obyem + ' кв/м';
      resPriceModal.textContent = ' ' + price + ' р';

		document.getElementById('formObyem').value = ' ' + obyem + ' кв/м';
		document.getElementById('formPrice').value = ' ' + price + ' р';
    }
  })
}