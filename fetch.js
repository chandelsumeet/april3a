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



/*

new fetch code
*/


console.log('i am working')

fetch('https://www.aqugen.com/academy/wp-json/wp/v2/media/1221')
.then(res =>{

    
    res.text().then(data =>{ 
        
        var list_data=JSON.parse(data);


       //this is for single Image to display  list_data.guid.rendered)

        // console.log(list_data.guid.rendered)
        
        // // var ImageURL=list_data.guid.rendered;
        // // console.log(ImageURL);

        // // var x = document.createElement("IMG");
        // // x.setAttribute("src", ImageURL);
        // // document.body.appendChild(x);


       //this is for single MUlti Image to display  list_data.media_details.sizes)

        console.log(list_data.media_details.sizes)
       
        var media_details = list_data.media_details.sizes;

        var len = Object.keys(media_details);

        for (var i of Object.keys(media_details)) {
                

            console.log(i);
            console.log(media_details[i].source_url);

            var ImageURL = media_details[i].source_url;

            var x = document.createElement("IMG");
            x.setAttribute("src", ImageURL);
            document.body.appendChild(x);
             
         }
                  
          


    })
    .catch(error => console.log(error))
    
})