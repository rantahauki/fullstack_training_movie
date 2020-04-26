
async function get_movie() {
  var movie_name = document.getElementById("movie").value;
  var movie_year = document.getElementById("year").value;
  var poster = document.getElementById("movie_poster");

  var search_text ='https://www.omdbapi.com/?t='+movie_name+'&y='+movie_year+'&apikey=a95f3723';
  console.log(search_text);

  const response = await fetch(search_text);
  const data = await response.json();
  console.log(data);
  document.getElementById("movie_name").innerHTML = data.Title;
  poster.src = data.Poster; //add image

}
