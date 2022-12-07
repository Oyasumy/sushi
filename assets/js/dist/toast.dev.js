"use strict";

var submit = function submit() {
  Toastify({
    text: "Thank you for contacting us, we will send an email to you as soon as possible",
    duration: 5000,
    destination: "https://www.facebook.com/SushiSuki89",
    newWindow: true,
    close: true,
    gravity: "top",
    // `top` or `bottom`
    position: "right",
    // `left`, `center` or `right`
    stopOnFocus: true,
    // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)"
    },
    onClick: function onClick() {} // Callback after click

  }).showToast();
};