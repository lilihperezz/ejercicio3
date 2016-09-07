
window.addEventListener("load", function() {
    var button = document.getElementById("calcular");
    button.addEventListener("click", function() {
        var segundos = parseInt(document.getElementById("segundos").value);
        var numero= parseInt(document.getElementById("numero").value);

        contador(segundos,numero);
	});
	function contador(segundos, numero) {
		setInterval(function(){document.write(numero++)}, segundos*1000);
	}
});

 