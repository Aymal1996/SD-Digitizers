const sendMessage = (data) => {
  $.ajax({
    url: "../contact.php",
    type: "post",
    data,
    success: function (html) {
      console.log({
        html,
      });
    },
  });
};

$("#concatc-form").submit((e) => {
  e.preventDefault();

  const name = $("#contact-form-name-field").value();
  const email = $("#contact-form-email-field").value();
  const message = $("#contact-form-message-field").value();

  sendMessage({ name, email, message });
});
