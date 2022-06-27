window.onscroll = function() {
	growShrinkLogo()
};

function growShrinkLogo() {
	var Logo = document.getElementById("logo")
	let mybutton = document.getElementById("btn-back-to-top");	
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		Logo.style.width = '60px';
	} else {
		Logo.style.width = '180px';
	}
	
	if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}