(function () {
  const carMessage =
    "入力内容を確認しました。実運用ではこの内容にキャンペーンコード LINE30 を付けて送信します。";

  const errorText = {
    name: "お名前を入力してください。",
    tel: "電話番号を入力してください。",
    email: "メールでの連絡を希望する場合は、メールアドレスを入力してください。",
    item_type: "お売りいただけるものを1つ以上選択、またはその他欄に入力してください。",
    parking_status: "駐車場の有無を選択してください。",
    address_match: "本人確認書類記載の住所との一致確認が必要です。",
    age_confirm: "18歳以上であることの確認が必要です。",
    privacy: "個人情報の取扱いへの同意が必要です。"
  };

  function setMessage(form, text, className) {
    const message = form.querySelector(".form-message");
    if (!message) return;
    message.className = "form-message";
    if (className) message.classList.add(className);
    message.textContent = text;
  }

  function clearErrors(form) {
    form.classList.remove("is-error", "is-pending");
    form.querySelectorAll(".field-error").forEach((node) => {
      node.textContent = "";
    });
    form.querySelectorAll("[aria-invalid='true']").forEach((node) => {
      node.removeAttribute("aria-invalid");
    });
  }

  function showFieldError(form, name, text) {
    const field = form.elements[name];
    const error = form.querySelector(`[data-error-for="${name}"]`);
    if (field && typeof field.setAttribute === "function") {
      field.setAttribute("aria-invalid", "true");
    } else if (field && typeof field.length === "number") {
      Array.from(field).forEach((node) => node.setAttribute("aria-invalid", "true"));
    }
    if (error) error.textContent = text;
  }

  function validateBrandForm(form) {
    clearErrors(form);

    const requiredNames = ["name", "tel", "parking_status", "address_match", "age_confirm", "privacy"];
    const invalid = [];

    requiredNames.forEach((name) => {
      const field = form.elements[name];
      const missing =
        field?.type === "checkbox"
          ? !field.checked
          : field instanceof RadioNodeList
            ? !String(field.value || "").trim()
            : !String(field?.value || "").trim();
      if (missing) {
        invalid.push(name);
        showFieldError(form, name, errorText[name]);
      }
    });

    const selectedItems = Array.from(form.querySelectorAll('input[name="item_type"]:checked'));
    const otherItem = String(form.elements.item_other?.value || "").trim();
    if (selectedItems.length === 0 && !otherItem) {
      invalid.push("item_type");
      showFieldError(form, "item_type", errorText.item_type);
    }

    const contactMethod = form.elements.contact_method?.value;
    const email = form.elements.email;
    if (contactMethod === "メール" && !String(email?.value || "").trim()) {
      invalid.push("email");
      showFieldError(form, "email", errorText.email);
    }

    if (invalid.length > 0) {
      form.classList.add("is-error");
      setMessage(form, "未入力または確認が必要な項目があります。赤字の項目をご確認ください。", "is-error");
      const firstInvalid = form.elements[invalid[0]];
      if (firstInvalid && typeof firstInvalid.focus === "function") firstInvalid.focus();
      return false;
    }

    return true;
  }

  async function buildPayload(form) {
    const data = new FormData(form);
    const fields = {};

    data.forEach((value, key) => {
      if (value instanceof File) return;
      if (Object.prototype.hasOwnProperty.call(fields, key)) {
        fields[key] = Array.isArray(fields[key]) ? fields[key].concat(value) : [fields[key], value];
        return;
      }
      fields[key] = value;
    });

    Object.keys(fields).forEach((key) => {
      if (Array.isArray(fields[key])) fields[key] = fields[key].join("、");
    });

    const otherItem = String(fields.item_other || "").trim();
    if (otherItem) {
      fields.item_type = fields.item_type ? `${fields.item_type}、その他: ${otherItem}` : `その他: ${otherItem}`;
    }

    fields.privacy = Boolean(form.elements.privacy?.checked);
    fields.address_match = Boolean(form.elements.address_match?.checked);
    fields.age_confirm = Boolean(form.elements.age_confirm?.checked);

    return {
      fields,
      files: [],
      page: {
        href: window.location.href,
        referrer: document.referrer,
        userAgent: navigator.userAgent
      }
    };
  }

  async function submitToEndpoint(endpoint, payload) {
    await fetch(endpoint, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify(payload)
    });
  }

  async function handleBrandSubmit(form) {
    if (!validateBrandForm(form)) return;

    const submitButton = form.querySelector("button[type='submit']");
    form.classList.add("is-pending");
    if (submitButton) submitButton.disabled = true;
    setMessage(form, "入力内容を確認しています。", "");

    try {
      const endpoint = form.dataset.endpoint;

      if (!endpoint) {
        window.setTimeout(() => {
          form.classList.remove("is-pending");
          if (submitButton) submitButton.disabled = false;
          setMessage(
            form,
            "入力内容は確認できました。現在このフォームは送信先未設定のため、実運用前に送信先の接続が必要です。",
            "is-config"
          );
        }, 450);
        return;
      }

      const payload = await buildPayload(form);
      setMessage(form, "送信しています。画面を閉じずにお待ちください。", "");
      await submitToEndpoint(endpoint, payload);

      form.classList.remove("is-pending");
      if (submitButton) submitButton.disabled = false;
      form.reset();
      setMessage(form, "送信しました。担当者より折り返しご連絡いたします。", "");
    } catch (error) {
      form.classList.remove("is-pending");
      form.classList.add("is-error");
      if (submitButton) submitButton.disabled = false;
      setMessage(form, "送信できませんでした。時間をおいて再度お試しください。", "is-error");
    }
  }

  document.querySelectorAll("form[data-form-type]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (form.dataset.formType === "brand") {
        handleBrandSubmit(form);
        return;
      }

      setMessage(form, carMessage, "");
    });
  });
})();
