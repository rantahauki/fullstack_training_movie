var movie_title = "";

get_reviews();


async function get_reviews(){
  const response = await fetch("/api/reviews"); //get data from own server api
  const data = await response.json();
  console.log(data);
  fill_the_review_table(data);
}

function fill_the_review_table(data) {
    // Find a <table> element with id="myTable":
  var table = document.getElementById("review_table");

  for (var i = 0; i < data.length; i++) {

    var row = table.insertRow(i+1);

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    // Add some text to the new cells:
    cell1.innerHTML = data[i].leffa;
    cell2.innerHTML = data[i].arvostelu;
    cell3.innerHTML = data[i].arvostelija;
  }

}

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

  movie_title = data.Title;
}


async function review_movie() {
  var leffa = movie_title;//document.getElementById("movie").value;
  var arvostelu = document.getElementById("review").value;
  var arvostelija = document.getElementById("reviewer").value;
  const data = {leffa, arvostelu, arvostelija};
  const options = {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
  };
  fetch('/api/review',options).then(function(response) {
    if(response.status = 200) {
      console.log("OK");
      empty_review_table();
      get_reviews();
    }
  }, function (error){
      console.log(error.message);
  });
}

async function empty_review_table() {
  var table = document.getElementById("review_table");
  var row_count = table.rows.length - 1;

  for (var i = 0; i < row_count; i++) {
      table.deleteRow(1);
  }
}
