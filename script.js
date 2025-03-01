// Sticky Header
window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Mobile Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", (e) => {
    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
    e.stopPropagation(); // Prevent immediate document click
  });

  // Close menu when clicking outside (updated)
  document.addEventListener("click", (e) => {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
      menuToggle.classList.remove("active");
      navLinks.classList.remove("active");
    }
  });

  // Close menu when clicking nav links
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });

  //Home Section Script
  // Typing Effect
  const typedTextSpan = document.querySelector(".typed-text");
  const professions = ["Developer", "Designer", "Freelancer", "Programmer"];
  let professionIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < professions[professionIndex].length) {
      typedTextSpan.textContent +=
        professions[professionIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 150);
    } else {
      setTimeout(erase, 2000);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typedTextSpan.textContent = professions[professionIndex].substring(
        0,
        charIndex - 1
      );
      charIndex--;
      setTimeout(erase, 100);
    } else {
      professionIndex = (professionIndex + 1) % professions.length;
      setTimeout(type, 500);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 1000);
  });

  // Animated Background
  document.querySelectorAll(".gradient-circle").forEach((circle) => {
    circle.style.animation = `float 20s linear infinite`;
  });

  //About Section Script
  // Progress bar animation on scroll
  const progressBars = document.querySelectorAll(".progress");

  function animateProgressBars() {
    progressBars.forEach((bar) => {
      const width = bar.style.width;
      bar.style.width = "0";
      setTimeout(() => {
        bar.style.width = width;
      }, 500);
    });
  }

  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateProgressBars();
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(document.querySelector(".about"));

  //skill section script
  // Progress bar animation on scroll
  const skillProgressBars = document.querySelectorAll(
    ".skill-card .progress"
  );

  function animateSkillProgress() {
    skillProgressBars.forEach((bar) => {
      const width = bar.style.width;
      bar.style.width = "0";
      setTimeout(() => {
        bar.style.width = width;
      }, 500);
    });
  }

  // Intersection Observer for scroll animations
  const skillObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateSkillProgress();
        }
      });
    },
    { threshold: 0.5 }
  );

  skillObserver.observe(document.querySelector(".skills-section"));

  //Project Section Script
  // Project card animation on scroll
  const projectCards = document.querySelectorAll(".project-card");

  const projectObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.2 }
  );

  projectCards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all 0.6s ease";
    projectObserver.observe(card);
  });

  //Contact Section Script
  // Initialize EmailJS
  (function () {
    emailjs.init("KZ4_2P6O7fG5br4P-"); // Replace with your EmailJS public key
  })();

  const contactForm = document.getElementById("contactForm");
  const successPopup = document.getElementById("successPopup");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Send email using EmailJS
    emailjs.sendForm("service_kdekalj", "template_6d7daqr", this).then(
      function () {
        // Show success popup
        successPopup.classList.add("active");
        setTimeout(() => {
          successPopup.classList.remove("active");
        }, 5000);

        // Reset form
        contactForm.reset();
      },
      function (error) {
        console.log("FAILED...", error);
        alert("Message failed to send. Please try again.");
      }
    );
  });

  // Back to Top Button Logic
  const backToTopButton = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
          backToTopButton.classList.add('show');
      } else {
          backToTopButton.classList.remove('show');
      }
  });

  backToTopButton.addEventListener('click', () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });