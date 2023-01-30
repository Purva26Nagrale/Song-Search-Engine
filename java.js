const search = () =>{
	const searchbox = document.getElementById('search-items').value.toUpperCase();
	const storeitems = document.getElementById('songs-list');
	const song = document.querySelectorAll(".song");

	const sname = document.getElementsByTagName('h2');

	for (var i = 0; i < sname.length; i++) {
		let match = song[i].getElementsByTagName('h2')[0];
		if (match) {
			let textvalue = match.textContent || match.innerHTML

			if (textvalue.toUpperCase().indexOf(searchbox)> -1) {
				song[i].style.display="";

			}else{
				song[i].style.display="none";
			}
		}
	}
}