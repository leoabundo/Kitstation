const SUCCESS_MESSAGE = "Tu mensaje fue enviado correctamente. Te responderemos pronto.";
const ERROR_MESSAGE =
  "No se pudo enviar el formulario. Intentalo nuevamente o escribenos por WhatsApp.";

function setOrigin(form) {
  const origin = form.querySelector('input[name="pagina_origen"]');
  if (origin) {
    origin.value = window.location.href;
  }
}

function setFeedback(feedback, state, message) {
  if (!feedback) return;
  feedback.dataset.state = state;
  feedback.textContent = message;
}

function setButtonState(button, sending) {
  if (!button) return;

  if (sending) {
    button.dataset.originalText = button.textContent;
    button.textContent = "Enviando...";
    button.disabled = true;
    return;
  }

  button.textContent = button.dataset.originalText || button.textContent;
  button.disabled = false;
}

function initMailForms() {
  if (!window.fetch) return;

  document.querySelectorAll("form[data-mail-form]").forEach((form) => {
    if (form.dataset.mailReady === "true") return;
    form.dataset.mailReady = "true";
    setOrigin(form);

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const feedback = form.querySelector(".form-feedback");
      const button = form.querySelector('button[type="submit"], input[type="submit"]');
      setOrigin(form);
      setFeedback(feedback, "", "");
      setButtonState(button, true);

      try {
        const response = await fetch(form.action, {
          method: "POST",
          headers: {
            Accept: "application/json"
          },
          body: new FormData(form)
        });
        const result = await response.json().catch(() => ({ success: false }));

        if (!response.ok || result.success !== true) {
          throw new Error("Request failed");
        }

        form.reset();
        setOrigin(form);
        setFeedback(feedback, "success", SUCCESS_MESSAGE);
        form.dispatchEvent(new CustomEvent("mail-form:success"));
      } catch (_error) {
        setFeedback(feedback, "error", ERROR_MESSAGE);
      } finally {
        setButtonState(button, false);
      }
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initMailForms);
} else {
  initMailForms();
}
