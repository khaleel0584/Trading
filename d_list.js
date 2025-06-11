document.getElementById("addNewBtn").addEventListener("click", function () {
    document.getElementById("modal").style.display = "flex";
});

function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("subscriptionForm").reset();

    // Clear errors on close
    document.getElementById("indicatorError").textContent = "";
    document.getElementById("tradingIdError").textContent = "";
    document.getElementById("referralIdError").textContent = "";
}

function validateIndicatorName() {
    const input = document.getElementById("indicator_Name").value.trim();
    const errorSpan = document.getElementById("indicatorError");
    const pattern = /^[A-Za-z]+(?:[ .][A-Za-z]+)*$/;

    if (input.length > 40) {
        errorSpan.textContent = "Max 40 characters allowed.";
    } else if (!pattern.test(input)) {
        errorSpan.textContent = "Start with a letter. Only one space or dot between words allowed.";
    } else {
        errorSpan.textContent = "";
    }
}

function validateTradingId() {
    const input = document.getElementById("trading_view_Id").value.trim();
    const errorSpan = document.getElementById("tradingIdError");
    const pattern = /^TV\d{1,4}$/;

    if (!pattern.test(input)) {
        errorSpan.textContent = "Must start with 'TV' followed by 1 to 4 digits (e.g., TV1234).";
    } else {
        errorSpan.textContent = "";
    }
}

function validateReferralId() {
    const input = document.getElementById("referal_Id").value.trim();
    const errorSpan = document.getElementById("referralIdError");
    const pattern = /^REF\d{1,4}$/;

    if (!pattern.test(input)) {
        errorSpan.textContent = "Must start with 'REF' followed by 1 to 4 digits (e.g., REF1234).";
    } else {
        errorSpan.textContent = "";
    }
}

function validateForm() {
    const indicator_Name = document.getElementById("indicator_Name").value.trim();
    const date = document.getElementById("date").value;
    const trading_View_Id = document.getElementById("trading_view_Id").value.trim(); // ✅ fixed ID
    const referral_Id = document.getElementById("referal_Id").value.trim();
    const plan = document.getElementById("plan").value;
    const remaining_hours = document.getElementById("remaining_hours").value;
    const payment_Status = document.getElementById("payment_Status").value;
    const amount_Paid = document.getElementById("amount_paid").value;

    // Run field validation
    validateIndicatorName();
    validateTradingId();
    validateReferralId();

    const indicatorError = document.getElementById("indicatorError").textContent;
    const tradingIdError = document.getElementById("tradingIdError").textContent;
    const referralIdError = document.getElementById("referralIdError").textContent;

    if (!indicator_Name || !date || !trading_View_Id || !referal_Id || !plan || !remaining_hours || !payment_Status || !amount_Paid) {
        alert("Please fill all fields.");
        return false;
    }

    if (indicatorError || tradingIdError || referralIdError) {
        return false;
    }

    closeModal();
    return true; // ✅ Let the form submit to the backend
}


let rowCount = 1;

function addTableRow(indicator_Name, date, trading_View_Id, referal_Id, plan, remaining_hours, payment_Status, amount_Paid) {
    const tableBody = document.getElementById("tableBody");

    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${rowCount++}</td>
        <td>${indicator_Name}</td>
        <td>${date}</td>
        <td>${trading_View_Id}</td>
        <td>${referal_Id}</td>
        <td>${plan}</td>
        <td>${remaining_hours}</td>
        <td class="${payment_Status === 'Paid' ? 'paid' : 'pending'}">${payment_Status}</td>
        <td>₹${amount_Paid}</td>
    `;

    tableBody.appendChild(newRow);
    updateNotFound(); // hide "not found" if new entry added
}

function searchReferralId() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const rows = document.querySelectorAll("#tableBody tr");
    let found = false;

    rows.forEach(row => {
        const referralCell = row.cells[4];
        if (referralCell && referralCell.textContent.toLowerCase().includes(input)) {
            row.style.display = "";
            found = true;
        } else {
            row.style.display = "none";
        }
    });

    document.getElementById("notFound").style.display = found ? "none" : "block";
}

function updateNotFound() {
    const visibleRows = Array.from(document.querySelectorAll("#tableBody tr")).filter(
        row => row.style.display !== "none"
    );
    document.getElementById("notFound").style.display = visibleRows.length === 0 ? "block" : "none";
}


window.addEventListener("DOMContentLoaded", loadSubscriptions);

function loadSubscriptions() {
  fetch("/subscriptions")
    .then((response) => response.json())
    .then((data) => {
      if (data.length === 0) {
        updateNotFound();
        return;
      }
data.forEach((item) => {
        // Format date to YYYY-MM-DD
        const formattedDate = new Date(item.date).toISOString().split('T')[0];
        addTableRow(
          item.indicator_name,
         formattedDate,
          item.trading_view_id,
          item.referal_id,
          item.plan,
          item.remaining_hours,
          item.payment_status,
          item.amount_paid
        );
      });
    })
    .catch((error) => {
      console.error("Error loading subscriptions:", error);
    });
}

// Close modal if clicked outside content
window.addEventListener("click", function (e) {
    const modal = document.getElementById("modal");
    if (e.target === modal) {
        closeModal();
    }
});