let link = 'https://677f67de0476123f76a64435.mockapi.io/books';  //store url in a variable
// let showData = document.getElementById("showdata");
let showData = document.getElementById("showtable") 

async function displayData(){
    let response = await fetch(link);  //to fetch the data 
    let data = await response.json();  //to convert the data to json

    data.forEach(element => {
        showData.innerHTML +=`       // to add new row multiple times based on the element
    <tr>
      <td>${element.id}</td>
      <td>${element.name}</td>
    </tr>
  
        `
        
    });
}

displayData();  ///function call