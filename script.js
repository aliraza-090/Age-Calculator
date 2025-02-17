document.getElementById("calculate").addEventListener("click", function() {
  const dobInput = document.getElementById("dob").value;
  
  if (!dobInput) {
    document.getElementById("result").innerHTML = "Please enter your date of birth.";
    return;
  }
  
  const dob = new Date(dobInput);
  const today = new Date();
  
  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--;
  }
  
  document.getElementById("result").innerHTML = "Your Age is: " + age;
});
