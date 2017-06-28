
$(document).ready(function(){
	$("input:button").click(function(){
		btn = $(this).val(); //valor del input (?)
		pantalla = $("#resultado").val();

		if (btn == "C"){
			$("#resultado").val(""); //botón clear (limpia la pantalla)
		} else {
			if (btn == "="){
				$("#resultado").val(eval(pantalla));
			} else {
				$("#resultado").val(pantalla + btn);
			}
		}
	});
});