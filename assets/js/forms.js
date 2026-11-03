(function () {
  function endpoint() {
    return window.MSD_FORM_ENDPOINT || "";
  }
  function ready(fn) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
    else fn();
  }
  ready(function () {
    var url = endpoint();
    var forms = document.querySelectorAll("form.msd-quote-form");
    for (var i = 0; i < forms.length; i++) forms[i].setAttribute("action", url);
  });
  document.addEventListener("submit", function (e) {
    var form = e.target;
    if (!form || !form.classList || !form.classList.contains("msd-quote-form")) return;
    e.preventDefault();
    e.stopPropagation();
    var wrap = form.closest(".w-form") || form.parentElement;
    var done = wrap.querySelector(".w-form-done");
    var fail = wrap.querySelector(".w-form-fail");
    var btn = form.querySelector('[type="submit"]');
    function show(el) { if (el) el.style.display = "block"; }
    function hide(el) { if (el) el.style.display = "none"; }
    hide(done);
    hide(fail);
    var url = endpoint();
    if (!url) {
      show(fail);
      return;
    }
    var prev = btn ? btn.value : "";
    if (btn) {
      btn.disabled = true;
      btn.value = btn.getAttribute("data-wait") || "Please wait...";
    }
    fetch(url, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" }
    }).then(function (r) {
      if (!r.ok) throw new Error("fail");
      form.reset();
      show(done);
    }).catch(function () {
      show(fail);
    }).then(function () {
      if (btn) {
        btn.disabled = false;
        btn.value = prev || "Submit";
      }
    });
  }, true);
})();
