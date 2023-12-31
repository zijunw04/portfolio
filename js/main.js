const flipButton = document.getElementById('flipButton');
let colorsFlipped = false;
let mainStylesheet;

function createAltStylesheet() {
  const altStylesheet = document.createElement('link');
  altStylesheet.rel = 'stylesheet';
  altStylesheet.href = 'alt-style.css'; // Replace with the name of your alternate stylesheet
  altStylesheet.id = 'altStylesheet';
  document.head.appendChild(altStylesheet);
  localStorage.setItem('colorsFlipped', 'true'); // Store the color mode selection in Local Storage
  return altStylesheet;
}

function removeAltStylesheet() {
  const altStylesheet = document.getElementById('altStylesheet');
  if (altStylesheet) {
    altStylesheet.remove();
  }
  localStorage.setItem('colorsFlipped', 'false'); // Update the color mode selection in Local Storage
}

function applyColorMode() {
  const colorsFlippedStorage = localStorage.getItem('colorsFlipped');
  if (colorsFlippedStorage === 'true') {
    createAltStylesheet();
    colorsFlipped = true;
    flipButton.innerHTML = '<i class="uil uil-moon"></i>';
  } else {
    removeAltStylesheet();
    colorsFlipped = false;
    flipButton.innerHTML = '<i class="uil uil-brightness"></i>';
  }
}

function flipColors() {
  if (!colorsFlipped) {
    mainStylesheet = document.getElementById('mainStylesheet').getAttribute('href');
    createAltStylesheet();
    colorsFlipped = true;
    flipButton.innerHTML = '<i class="uil uil-moon"></i>';
  } else {
    removeAltStylesheet();
    colorsFlipped = false;
    flipButton.innerHTML = '<i class="uil uil-brightness"></i>';
  }
}

flipButton.addEventListener('click', flipColors);

// Apply color mode on page load
applyColorMode();





const hamburgerIcon = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const header = document.querySelector('header');

hamburgerIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('menu-open');
  header.classList.toggle('header-active');

  // Toggle the "header-active" class directly on the hamburger icon itself
  hamburgerIcon.classList.toggle('header-active');

  document.body.classList.toggle('lock-scroll');
});






const inputs = document.querySelectorAll('.contact-input');

  inputs.forEach((ipt) => {
    ipt.addEventListener("focus", () => {
      ipt.parentNode.classList.add("focus");
      ipt.parentNode.classList.add("not-empty");
    });
    ipt.addEventListener("blur", () => {
      if (ipt.value == "") {
        ipt.parentNode.classList.remove("not-empty");
      }
      ipt.parentNode.classList.remove("focus");
    });
  });



  // Replace YOUR_DISCORD_WEBHOOK_URL with your actual Discord webhook URL
const discordWebhookUrl = 'https://discord.com/api/webhooks/1132443910170497164/nl4OKZ2tXVgjydb_jXdlvRHPgT7Plmz434E9znhv-LKpVUDq6cXO8xNrBrpTEya39uoe';

// Function to send form data to Discord
function sendFormDataToDiscord(data, file) {
  const formData = new FormData();
  formData.append('content', `New form submission:
Name: ${data['First Name']} ${data['Last Name']}
Email: ${data['email']}
Message: ${data['message']}`);

  if (file) {
      formData.append('file', file);
  }

  fetch(discordWebhookUrl, {
      method: 'POST',
      body: formData,
  })
      .then((response) => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          alert('Form submitted successfully!');
          // You can add more actions here after the form is successfully submitted.
      })
      .catch((error) => {
          console.error('Error sending form data to Discord:', error);
          alert('An error occurred while submitting the form. Please try again later.');
      });
}

function resetFormFields() {
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
      contactForm.reset();
  }
}

function removeNotEmptyClass() {
  const conInpWraps = document.querySelectorAll('.conInp-wrap');
  conInpWraps.forEach((conInpWrap) => {
      conInpWrap.classList.remove('not-empty');
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.querySelector('.contact-form');

  if (contactForm) {
      contactForm.addEventListener('submit', function (event) {
          event.preventDefault(); // Prevent the form from submitting traditionally

          const formData = new FormData(contactForm);
          const formDataObject = {};
          formData.forEach((value, key) => {
              formDataObject[key] = value;
          });

          const fileInput = document.querySelector('input[name="attachment"]');
          const file = fileInput ? fileInput.files[0] : null;

          sendFormDataToDiscord(formDataObject, file);

          removeNotEmptyClass();
          // Reset form fields
          resetFormFields();
      });
  }
});


function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);



