//  Scroll //

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

//  Tabu rodymas //

function showTab(tabName) {
    
    const allTabs = document.querySelectorAll('.tabs-button > .tabs');
    allTabs.forEach(tab => {
      tab.classList.remove('active');
    });
    const selectedTab = document.querySelector(`.${tabName}`);
    selectedTab.classList.add('active');
  
    const allTabContents = document.querySelectorAll('.Tabs-register, .Tabs-apply, .Tabs-receive');
    allTabContents.forEach(content => {
      content.style.display = 'none';
    });
    const selectedTabContent = document.querySelector(`.${tabName}`);
    selectedTabContent.style.display = 'block';
  
    const selectedImage = document.querySelector(`.${tabName} img`);
    selectedImage.style.display = 'block';
}

// Lentelės validacija //

/*function submitForm(event) {
  event.preventDefault(); 

  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');
  const phoneNumberInput = document.getElementById('phone-number');

  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const phoneNumber = phoneNumberInput.value;

  if (!isNaN(firstName) || firstName.trim() === '') {
    alert('First name should not be a number or empty!');
    return false; 
  }

  if (!isNaN(lastName) || lastName.trim() === '') {
    alert('Last name should not be a number or empty!');
    return false; 
  }

  if (isNaN(phoneNumber) || phoneNumber.trim() === '' || phoneNumber.length !== 10) {
    alert('Phone number should be a 10-digit number!');
    return false; 
  }

  sendFormData(firstName, lastName, phoneNumber);

  alert('Form submitted successfully!');
  return true;
}

function sendFormData(firstName, lastName, phoneNumber) {

}*/

document.addEventListener("DOMContentLoaded", function () {
  const submitButtons = document.querySelectorAll("input[type='submit']");

  submitButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      const form = button.closest("form");
      const inputs = form.querySelectorAll("input[required]");
      let isEmpty = false;

      inputs.forEach(function (input) {
        if (input.value.trim() === "") {

        }
      });

      if (isEmpty) {
        event.preventDefault();
        alert("Please enter the requested data");
        return false;
      }
    });
  });
}) ;