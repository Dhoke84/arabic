document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle Functionality
    const menuIcon = document.querySelector('.fa-bars');
    const closeIcon = document.querySelector('.fa-times');
    const headerLinkContainer = document.querySelector('.header-link');
    const mainNav = document.querySelector('.main-nav');

    // Toggle visibility of header links and main navigation
    menuIcon.addEventListener('click', () => {
        headerLinkContainer.classList.add('visible');
        mainNav.classList.add('active');
        menuIcon.style.display = 'none'; // Hide bars icon
        closeIcon.style.display = 'block'; // Show close icon
    });

    closeIcon.addEventListener('click', () => {
        headerLinkContainer.classList.remove('visible');
        mainNav.classList.remove('active');
        menuIcon.style.display = 'block'; // Show bars icon
        closeIcon.style.display = 'none'; // Hide close icon
    });


    document.getElementById("cancel-download").addEventListener("click", function() {
        // Create a link element
        const link = document.createElement("a");

        // Set the URL of the form file you want to download
        link.href = "./img/APPLICATION FORM.pdf"; // Replace with the actual path to your form

        // Set the download attribute with a default file name
        link.download = "APPLICATION FORM.pdf"; // This is the default download name

        // Append the link to the body
        document.body.appendChild(link);

        // Programmatically click the link to trigger the download
        link.click();

        // Remove the link from the DOM
        document.body.removeChild(link);
    });
    // Ensure menu closes when clicking outside (only for mobile view)
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768) { // Check if the screen width is mobile
            if (!event.target.closest('.header') && !event.target.closest('.header-link') && !event.target.closest('.main-nav') && !event.target.closest('.fa-bars')) {
                headerLinkContainer.classList.remove('visible');
                mainNav.classList.remove('active');
                menuIcon.style.display = 'block'; // Show bars icon
                closeIcon.style.display = 'none'; // Hide close icon
            }
        }
    });

    // Prevent clicks on menu icon and close icon from propagating to document
    menuIcon.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    closeIcon.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    // Handle link click event
    const handleLinkClick = (event, links) => {
        event.stopPropagation(); // Prevent document click from triggering

        links.forEach(link => link.classList.remove('active'));
        event.currentTarget.classList.add('active');
    };

    // Header Navigation Active Link Functionality
    const headerNavLinks = document.querySelectorAll('.header-link a');
    headerNavLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            handleLinkClick(event, headerNavLinks);
        });
    });

    // Main Navigation Active Link Functionality
    const mainNavLinks = document.querySelectorAll('.main-nav ul li a');
    mainNavLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            handleLinkClick(event, mainNavLinks);
            // Handle dropdown icon change
            const dropdown = link.nextElementSibling;
            const icon = link.querySelector('.dropdown-icon');
            if (dropdown && dropdown.style.display === 'block') {
                icon.classList.remove('fa-caret-up');
                icon.classList.add('fa-caret-down');
            } else if (dropdown) {
                icon.classList.remove('fa-caret-down');
                icon.classList.add('fa-caret-up');
            }
        });
    });

    // Show dropdown on click and toggle icon
    const dropdownIcons = document.querySelectorAll('.dropdown-icon');
    dropdownIcons.forEach(icon => {
        icon.addEventListener('click', function(event) {
            event.stopPropagation();
            const dropdown = icon.parentElement.nextElementSibling;
            if (dropdown && dropdown.style.display === 'block') {
                dropdown.style.display = 'none';
                icon.classList.remove('fa-caret-up');
                icon.classList.add('fa-caret-down');
            } else if (dropdown) {
                dropdown.style.display = 'block';
                icon.classList.remove('fa-caret-down');
                icon.classList.add('fa-caret-up');
            }
        });
    });

    // Remove "active" class when clicking outside of the links
    document.addEventListener('click', function() {
        if (window.innerWidth <= 768) { // Check if the screen width is mobile
            headerNavLinks.forEach(link => link.classList.remove('active'));
            mainNavLinks.forEach(link => link.classList.remove('active'));

            dropdownIcons.forEach(icon => {
                const dropdown = icon.parentElement.nextElementSibling;
                if (dropdown && dropdown.style.display === 'block') {
                    dropdown.style.display = 'none';
                    icon.classList.remove('fa-caret-up');
                    icon.classList.add('fa-caret-down');
                }
            });
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Select elements
    const searchInput = document.querySelector('.search-bar input');
    const searchIcon = document.querySelector('.search-bar .fa-search');
    const closeIcon = document.querySelector('.search-bar .fa-times');
    const searchBar = document.querySelector('.search-bar');

    // Toggle search bar visibility
    searchIcon.addEventListener('click', () => {
        searchBar.classList.add('expanded');
        searchInput.focus();
    });

    closeIcon.addEventListener('click', () => {
        searchBar.classList.remove('expanded');
        searchInput.value = ''; // Optional: Clear the input field
        searchInput.blur();
    });

    // Ensure search bar closes when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.search-bar')) {
            searchBar.classList.remove('expanded');
            searchInput.value = ''; // Optional: Clear the input field
            searchInput.blur();
        }
    });

    // Prevent clicks on the search bar from closing it
    searchBar.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});

// Select the carousel image element
const carouselImage = document.getElementById('carousel-image');

// Select all the carousel icons
const carouselIcons = document.querySelectorAll('.carousel-icon');

// Add click event listener to each icon
carouselIcons.forEach(icon => {
  icon.addEventListener('click', function() {
    // Get the target image src from the data-src attribute
    const targetImageSrc = this.getAttribute('data-src');
    
    // Update the src attribute of the carousel image
    carouselImage.setAttribute('src', targetImageSrc);
  });
});


// Handle the modal popup
document.getElementById('application-form-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    document.getElementById('download-modal').style.display = 'block'; // Show the modal
});

// Close the modal when the close button is clicked
document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('download-modal').style.display = 'none';
});

// Close the modal when the cancel button is clicked
document.getElementById('cancel-download').addEventListener('click', function() {
    document.getElementById('download-modal').style.display = 'none';
});

document.getElementById('confirm-download').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    document.getElementById('download-modal').style.display = 'none';
    // Manually trigger redirection
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSfm8_QR_t7AoCTDGm4N4tCyXP7VnHvkPY0Aleybmawjdj6kfA/viewform';
});


// Get contact-modal and button elements
var contactModal = document.getElementById("contactModal");dd
var btn = document.getElementById("talkToProsBtn");
var btnTwo = document.getElementById("talkToProsBtnNew");
var closeBtn = document.getElementsByClassName("contact-close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  contactModal.style.display = "block";
}

btnTwo.onclick = function() {
    contactModal.style.display = "block";
  }

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
  contactModal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == contactModal) {
    contactModal.style.display = "none";
  }
}
function openWhatsApp() {
    const phoneNumber = "0567019877"; // Replace with your phone number including the country code, e.g., "971" for UAE
    const message = "Hello, I'd like to chat!"; // Optional predefined message

    // Check if user is on mobile or desktop
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        window.location.href = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    } else {
        window.location.href = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    }
}


// Get references to elements
const talkToProsBtn = document.getElementById('talkToProsBtnNew'); // Button element
const talkToProsLink = document.getElementById('talkToProsBtn');  // Link element
const supportModal = document.getElementById('support-modal');
const closeModal = document.getElementById('closeModal');

// Function to open the modal
function openModal(event) {
    event.preventDefault(); // Prevent default link behavior
    supportModal.style.display = 'block'; // Show the modal
}

// Function to close the modal
function closeModalHandler() {
    supportModal.style.display = 'none'; // Hide the modal
}

// Event listeners
talkToProsBtn.addEventListener('click', openModal); // Open modal on button click
talkToProsLink.addEventListener('click', openModal); // Open modal on link click
closeModal.addEventListener('click', closeModalHandler); // Close modal on close button click

// Close modal if user clicks outside the modal box
window.addEventListener('click', (event) => {
    if (event.target === supportModal) {
        supportModal.style.display = 'none';
    }
});

