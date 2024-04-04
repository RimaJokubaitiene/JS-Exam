function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}


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