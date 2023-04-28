var my_airtable_api = "keyTVJyOw2PHn0ebR";
var my_airtable_base_id = "appCQFP3dgYHYVCpA";
var table_name = "form_table";
let submitBtn = document.getElementById("btn");
let result = document.getElementById("result");

// Onclick of submit button,this function captures the form data and sends it to Airtable
function submitData() {
  // Capture form data
  var form_data = {
    fields: {
      "First Name": document.getElementById("firstName").value,
      "Middle Name": document.getElementById("middleName").value,
      "Last Name": document.getElementById("lastName").value,
      "Email": document.getElementById("email").value
    }
   
  }; 
  // console.log(form_data);
i
  // Sending the data to Airtable
  fetch("https://api.airtable.com/v0/" + my_airtable_base_id + "/" + table_name, {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + my_airtable_api,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(form_data)
  })
  if (form_data.value == "") {
    console.log("Data added to Airtable:");
    result.innerHTML = "Data successfully added to Airtable"
  }
  else{
    result.innerHTML = "There was an error while adding data to Airtable"
    console.log("Error adding data to Airtable"); 
  }
 


}


  submitBtn.addEventListener("click", submitData);
  