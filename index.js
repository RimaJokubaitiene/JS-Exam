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

function submitForm(event) {
  event.preventDefault();

  const firstName = document.querySelector('input[placeholder="First name"]').value;
  const lastName = document.querySelector('input[placeholder="Last name"]').value;
  if (firstName === '' || lastName === '') {
    alert('Please enter your first and last name.');
    return;
  }

  const phoneNumber = document.querySelector('input[placeholder="Phone number"]').value;
  if (isNaN(phoneNumber) || phoneNumber === '') {
    alert('Please enter a valid phone number.');
    return;
  }

  const subscriptionType = document.querySelector('input[name="subscription"]:checked');
  if (!subscriptionType) {
    alert('Please select a subscription type.');
    return;
  }

  const formData = {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    subscriptionType: subscriptionType.value
  };

  fetch('backend_url', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {

    console.log('Success:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}