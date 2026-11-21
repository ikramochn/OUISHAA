// IMPORTANT: Replace the placeholder with your WhatsApp number in international format.
 // Algeria example: 213XXXXXXXXX (without +, spaces, or leading 0).
const WHATSAPP_NUMBER = "213XXXXXXXXX";
const UNIT_PRICE = 2500;

document.getElementById("orderForm").addEventListener("submit", function (event) {
  event.preventDefault();

  if (WHATSAPP_NUMBER.includes("X")) {
    alert("قبل النشر، افتحي script.js وحطي رقم واتساب تاعك مكان 213XXXXXXXXX.");
    return;
  }

  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const wilaya = document.getElementById("wilaya").value.trim();
  const color = document.getElementById("color").value.trim();
  const quantity = Number(document.getElementById("quantity").value);
  const total = quantity * UNIT_PRICE;

  const message =
`السلام عليكم، حابة نطلب من وشاح OUSIHAA 🤎

الاسم: ${name}
رقم الهاتف: ${phone}
الولاية: ${wilaya}
اللون المختار: ${color}
الكمية: ${quantity}
السعر الإجمالي: ${total} DA

نستنى تأكيد الطلب، شكراً!`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});