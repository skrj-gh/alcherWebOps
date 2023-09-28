var currentTab = 0; // Current tab is set to be the first tab (0)
var tab = [0];
var numOfMem = 0;
var numOfParticipants = 5;

showTab(currentTab); // Display the current tab

function showTab(n) {

  if(tab.indexOf(n) == -1){
    return false;
  }

  var head_form = document.getElementsByClassName("mem_form")[n-1];
  var mem_form = document.getElementsByClassName("mem_form")[n];
  // var next_mem_form = document.getElementsByClassName("mem_form")[n+1];
  
  if (n == 0) {
    document.getElementsByClassName("fake_arr_back")[0].style.display = "flex";
    document.getElementsByClassName("button-deletemember")[0].style.display = "none";
    document.getElementsByClassName("arr_back")[0].style.display = "none";




    mem_form.style.display = "block";
    // next_mem_form.style.display = "none";
  } else {
    // document.getElementsByClassName("mem-element")[0].style.display = "flex";
    document.getElementsByClassName("fake_arr_back")[0].style.display = "none";
    document.getElementsByClassName("arr_back")[0].style.display = "flex";
    document.getElementsByClassName("button-deletemember")[0].style.display = "flex";




    head_form.style.display = "none";
    mem_form.style.display = "block";
    // next_mem_form.style.display = "none";
  }
}


function appendForms(){
  var code = `
      
      <div class="mem_form">
      <div class="head_data">
          <div class="mem_info heading">
              <h3>Member's data:</h3>
              <!-- <img src="./images/same-flag.png" alt="same as leader"> -->
              <div class="mem-element">
                  <p>Member no.<pre>   </pre><div class="mem-no"><p>${currentTab}</p></div></p>
              </div>
          </div>

          <div class="mem_info">
              <div class="left-input-field">
                  <label for="members_name" class="form-field">Member's Name <span>*</span></label><br>
                  <input type="text" id="members_name" name="members_name" class="form-field">
              </div>
              <div class="right-input-field">
                  <label for="gender" class="form-field">Gender <span>*</span></label><br>
                  <select id="gender" name="gender">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="others">Others</option>
                  </select>
              </div>
          </div>
          <div class="mem_info">
              <div class="left-input-field">
                  <label for="members_contact_number" class="form-field">Member's Contact Number <span>*</span></label><br>
                  <input type="text" id="members_contact_number" name="members_contact_number" class="form-field">
              </div>
              <div class="right-input-field">
                  <label for="email" class="form-field">E - mail <span>*</span></label><br>
                  <div class="same_input">
                    <input type="text" id="email" name="email" class="form-field same-flag email">
                    <div class="same_as_leader" onclick="sameAsLeader('e')"><p>Same as Leader</p></div>
                  </div>
              </div>
          </div>
          <div class="mem_info">
              <div class="left-input-field">
                  <label for="program_enrolled" class="form-field">Program Enrolled <span>*</span></label><br>
                  <div class="same_input">
                    <input type="text" id="program_enrolled" name="program_enrolled" class="form-field same-flag program_enrolled">
                    <div class="same_as_leader" onclick="sameAsLeader('p')"><p>Same as Leader</p></div>
                  </div>
              </div>
              <div class="right-input-field">
                  <label for="institute_name" class="form-field">Institute Name <span>*</span></label><br>
                  <div class="same_input">
                    <input type="text" id="institute_name" name="institute_name" class="form-field same-flag institute_name">
                    <div class="same_as_leader" onclick="sameAsLeader('i')"><p>Same as Leader</p></div>
                  </div>
              </div>
          </div>
          <div class="mem_info">
              <div class="left-input-field">
                  <label for="year_of_passing" class="form-field">Year Of Passing <span>*</span></label><br>
                  <div class="same_input">
                    <input type="text" id="year_of_passing" name="year_of_passing" class="form-field same-flag year_of_passing">
                    <div class="same_as_leader" onclick="sameAsLeader('y')"><p>Same as Leader</p></div>
                  </div>
              </div>
              <div class="right-input-field">
                  
              </div>
          </div>

      </div>

    </div>

  `
    document.getElementById("info").innerHTML += code;
}


function addMember(n) {
  // if (!validateForm()) return false;
  appendForms();
  var head_form = document.getElementsByClassName("mem_form")[n-1];
  var mem_form = document.getElementsByClassName("mem_form")[n];
  
  // document.getElementsByClassName("mem-element")[0].style.display = "flex";
  document.getElementsByClassName("fake_arr_back")[0].style.display = "none";
  document.getElementsByClassName("arr_back")[0].style.display = "flex";
  document.getElementsByClassName("button-deletemember")[0].style.display = "flex";
  head_form.style.display = "none";
  mem_form.style.display = "block";
  
  
}




function nextPrev(n) {

  currentTab = currentTab + n;

  if(tab.indexOf(currentTab) == -1){
    currentTab = currentTab - n;
    return false;
  }
  
  console.log(currentTab);
  
  if (currentTab >= numOfParticipants) {
    document.getElementById("info").submit();
    return false;
  }
  
  showTab(currentTab);

}



function addMem() {

  if (!validateForm()) return false;

  numOfMem++;

  currentTab++;
  
  tab.push(currentTab);
  
  console.log(currentTab);

  if (currentTab >= numOfParticipants) {

    console.log("Can't add more members");
    return false;
  
  }

  addMember(currentTab);
}

function delMem(){
  if(currentTab == 0){
    console.log("Can't remove leader");
    return false;
  }

  numOfMem--;

  var i;
  for(i=currentTab+1;i<tab.length;i++){
    tab[i]--;
  }

  tab.splice(currentTab,currentTab+1);

  currentTab = currentTab --;

  showTab(currentTab);
}





var heads_email = document.getElementById("heads_email");
var heads_program_enrolled = document.getElementById("heads_program_enrolled");
var heads_institute_name = document.getElementById("heads_institute_name");
var heads_year_of_passing = document.getElementById("heads_year_of_passing");

var heads_email_value, heads_program_enrolled_value, heads_institute_name_value, heads_year_of_passing_value;

heads_email.addEventListener("input", function(){
  heads_email_value = heads_email.value;
});

heads_program_enrolled.addEventListener("input", function(){
  heads_program_enrolled_value = heads_program_enrolled.value;
});

heads_institute_name.addEventListener("input", function(){
  heads_institute_name_value = heads_institute_name.value;
});

heads_year_of_passing.addEventListener("input", function(){
  heads_year_of_passing_value = heads_year_of_passing.value;
});






function submitForm(){
  if (!validateForm()){
    console.log("Wrong Submission!!!");
    return false;
  }

  document.getElementById("info").submit();
  console.log("Successful Submission");
}


function sameAsLeader(c){
  
  if(c=='e'){
    document.getElementsByClassName("email")[currentTab-1].value = heads_email_value;
  }

  if(c=='p'){
    document.getElementsByClassName("program_enrolled")[currentTab-1].value = heads_program_enrolled_value;
  }

  if(c=='i'){
    document.getElementsByClassName("institute_name")[currentTab-1].value = heads_institute_name_value;
  }

  if(c=='y'){
    document.getElementsByClassName("year_of_passing")[currentTab-1].value = heads_year_of_passing_value;
  }
}


function validateForm() {
  // This function deals with validation of the form fields
  var u, v, w, x, y, i, valid = true;
  v = document.getElementsByClassName("left-input-field");
  x = document.getElementsByClassName("right-input-field");

  w = v[currentTab].getElementsByTagName("input");
  y = x[currentTab].getElementsByTagName("input");
  u = x[currentTab].getElementsByTagName("select");

  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }

  for (i = 0; i < u.length; i++) {
    // If a field is empty...
    if (u[i].value == "") {
      // add an "invalid" class to the field:
      u[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }

  for (i = 0; i < w.length; i++) {
    // If a field is empty...
    if (w[i].value == "") {
      // add an "invalid" class to the field:
      w[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }

  return valid; 
}