const img=document.getElementById('id1');
const url="https://www.aqugen.com/academy/wp-json/wp/v2/posts?per_page=4&order=desc";

fetch('https://www.aqugen.com/academy/wp-json/wp/v2/posts?per_page=4&order=desc')
.then(function(res)
{
	return res.text();
})
.then(function (data)
{
	document.getElementById('sumeet').innerHTML = data;
}
)


const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url1 = "https://aqugen.com/academy/wp-json/wp/v2/media/1221"; // site that doesn’t send Access-Control-*
fetch(proxyurl + url1) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.json())
.then(contents => console.log(contents))
.then(function (data)
{
	document.getElementById('img1').innerHTML =data;
}

	)
.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))