document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector(".contact__modal_wrapper")
  const sendButton = document.querySelector(".form__bottom_btns_send")

  sendButton.addEventListener("click", (event) => {
    event.preventDefault()
    
    sendButton.disabled = true

    modal.classList.add("visible")

    setTimeout(() => {
      modal.classList.remove("visible")
      
      sendButton.disabled = false
    }, 3000)
  });
});