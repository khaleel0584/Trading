function addNewEntry() {
    const indicatorName = document.getElementById("indicatorName").value;
    const date = document.getElementById("date").value;
    const tradingViewID = document.getElementById("tradingViewID").value;
    const referralID = document.getElementById("referralID").value;
    const plan = document.getElementById("plan").value;
    const remainingDays = document.getElementById("remainingDays").value;
    const paymentStatus = document.getElementById("paymentStatus").value;
    const amountPaid = document.getElementById("amountPaid").value;

    const data = {
        indicatorName, date, tradingViewID, referralID, plan, remainingDays, paymentStatus, amountPaid
    };

    fetch("http://localhost:3000/add-subscription", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch(error => {
        console.error("Error adding subscription:", error);
        alert("Error adding subscription.");
    });
}
// JavaScript to toggle language menu
// Toggle Language Menu
// Toggle Language Menu
document.getElementById("globe-icon").addEventListener("click", function () {
  document.getElementById("language-menu").classList.toggle("show");
});

// Apply selected language via Google Translate
document.querySelectorAll("#language-menu li").forEach(item => {
  item.addEventListener("click", function () {
    const lang = this.getAttribute("data-lang");
    
    // Get the Google Translate dropdown and set the language
    const select = document.querySelector("select.goog-te-combo");
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change")); // Trigger the language change
    }

    document.getElementById("language-menu").classList.remove("show");
  });
});

// Google Translate Init
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',  // Default language of the page
    includedLanguages: 'en,fr,es,de,hi,ur,ar', // List of languages to include
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    autoDisplay: false // Prevent auto-display of the translator
  }, 'google_translate_element');
}

// Call Google Translate Initialization Script
function loadGoogleTranslate() {
  var script = document.createElement('script');
  script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  document.body.appendChild(script);
}

loadGoogleTranslate();

function toggleDarkMode() {
      document.body.classList.toggle("dark-mode");
      var toggleIcon = document.getElementById("dark-mode-toggle");
      if (document.body.classList.contains("dark-mode")) {
        toggleIcon.textContent = "☾"; // Show light mode icon when dark mode is active
      } else {
        toggleIcon.textContent = "☀"; // Show dark mode icon when in light mode
      } 
    }
        document.addEventListener("DOMContentLoaded", function () {
            const menu = document.getElementById("menu");
            const hamburger = document.getElementById("hamburger");
            const content = document.getElementById("content");
            const overlay = document.getElementById("overlay");
           
            // Toggle Menu
            function toggleMenu() {
                menu.classList.toggle("active");
                content.classList.toggle("shifted");
                overlay.classList.toggle("active");
            }

            // Click Hamburger to Open Menu
            hamburger.addEventListener("click", function (event) {
                event.stopPropagation();
                toggleMenu();
            });

            // Click Anywhere to Close Menu
            overlay.addEventListener("click", function () {
                menu.classList.remove("active");
                content.classList.remove("shifted");
                overlay.classList.remove("active");
            });

            // Close Menu When Clicking Outside
            document.addEventListener("click", function (event) {
                if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
                    menu.classList.remove("active");
                    content.classList.remove("shifted");
                    overlay.classList.remove("active");
                }
            });
        });

        // Upload Image Function
       


        function showContent(title, message) {
            document.getElementById("content-display").innerHTML = `<h2>${title}</h2><p>${message}</p>`;
        }

        document.addEventListener("DOMContentLoaded", function () {
    // Bar Chart
   // Bar Chart
   var barCtx = document.getElementById("barChart").getContext("2d");
new Chart(barCtx, {
    type: "bar",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
            label: "Trade Volume",
            data: [10000, 15000, 12000, 18000, 22000, 17000, 20000, 12465, 23456, 14352, 15673, 25673],
            backgroundColor: [
                "#FF5733",  // Jan - Red
                "#33FF57",  // Feb - Green
                "#3357FF",  // Mar - Blue
                "#FF33A8",  // Apr - Pink
                "#FF9C33",  // May - Amber (Changed)
                "#33FFA1",  // Jun - Mint Green
                "#FF8633",  // Jul - Orange
                "#FFD633",  // Aug - Yellow
                "#33FFDD",  // Sep - Teal
                "#A833FF",  // Oct - Purple (Changed)
                "#FF3333",  // Nov - Bright Red
                "#33A8FF"   // Dec - Sky Blue
            ]
        }]
    },
    options: {
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    }
});




// Line Chart
var lineCtx = document.getElementById("lineChart").getContext("2d");
new Chart(lineCtx, {
    type: "line",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],

        datasets: [{
            label: "Price Movement",
            data: [320, 340, 330, 876, 370, 360,976,678,567,907,678,879,],
            borderColor: "#544a7d",
            fill: false
        }]
    },
    options: {
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    }
});

// Ribbon Graph (Area Chart)
var ribbonCtx = document.getElementById("ribbonChart").getContext("2d");
new Chart(ribbonCtx, {
    type: "line",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],

        datasets: [{
            label: "Market Trends",
            data: [50, 60, 55, 70, 80, 75,89,53,78,56,23,90],
            backgroundColor: "rgba(231, 76, 60, 0.3)",
            borderColor: "#e74c3c",
            fill: true
        }]
    },
    options: {
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    }
});

// Pie Chart
var pieCtx = document.getElementById("pieChart").getContext("2d");
new Chart(pieCtx, {
    type: "pie",
    data: {
        labels: ["RSI", "Ethereum", "Ripple", "Others"],
        datasets: [{
            label: "Market Share",
            data: [50, 30, 10, 10],
            backgroundColor: ["#f39c12", "#3498db", "#2ecc71", "#95a5a6"]
        }]
    },
    options: {
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    }
});

// Donut Chart
var donutCtx = document.getElementById("donutChart").getContext("2d");
new Chart(donutCtx, {
    type: "doughnut",
    data: {
        labels: ["Stocks", "Crypto", "Gold", "Real Estate"],
        datasets: [{
            label: "Asset Distribution",
            data: [40, 35, 15, 10],
            backgroundColor: ["#e74c3c", "#9b59b6", "#f1c40f", "#34495e"]
        }]
    },
    options: {
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    }
});

});

function showTable(type) {
    let data = {
        monthly: [
        ["1", "Indicator A", "2024-03-01", "TV123", "ATS0AK012", "Plan 1", "30", "Paid", "500"],
  ["2", "Indicator B", "2024-03-02", "TV124", "ATS0AK013", "Plan 2", "25", "Pending", "400"],
  ["3", "Indicator C", "2024-03-03", "TV125", "ATS0AK014", "Plan 1", "22", "Paid", "600"],
  ["4", "Indicator D", "2024-03-04", "TV126", "ATS0AK015", "Plan 3", "18", "Paid", "700"],
  ["5", "Indicator E", "2024-03-05", "TV127", "ATS0AK013", "Plan 2", "15", "Pending", "450"],
  ["6", "Indicator F", "2024-03-06", "TV128", "ATS0AK015", "Plan 1", "12", "Paid", "550"],
  ["7", "Indicator G", "2024-03-07", "TV129", "ATS0AK018", "Plan 3", "10", "Paid", "650"],
  ["8", "Indicator H", "2024-03-08", "TV130", "ATS0AK019", "Plan 2", "8", "Pending", "500"],
  ["9", "Indicator I", "2024-03-09", "TV131", "ATS0AK020", "Plan 1", "5", "Paid", "300"],
  ["10", "Indicator J", "2024-03-10", "TV132", "ATS0AK014", "Plan 3", "3", "Paid", "800"],
  ["11", "Indicator K", "2024-03-11", "TV133", "ATS0AK016", "Plan 2", "1", "Pending", "200"]
],

daily: [
["1", "Indicator X", "2024-03-10", "TV223", "ATS0AK015", "Plan A", "15", "Paid", "300"],
  ["2", "Indicator Y", "2024-03-11", "TV224", "ATS0AK013", "Plan B", "10", "Pending", "200"],
  ["3", "Indicator Z", "2024-03-12", "TV225", "ATS0AK014", "Plan A", "9", "Paid", "350"],
  ["4", "Indicator M", "2024-03-13", "TV226", "ATS0AK016", "Plan C", "7", "Paid", "450"],
  ["5", "Indicator N", "2024-03-14", "TV227", "ATS0AK015", "Plan B", "6", "Pending", "250"],
  ["6", "Indicator O", "2024-03-15", "TV228", "ATS0AK018", "Plan A", "5", "Paid", "500"],
  ["7", "Indicator P", "2024-03-16", "TV229", "ATS0AK016", "Plan C", "4", "Paid", "600"],
  ["8", "Indicator Q", "2024-03-17", "TV230", "ATS0AK020", "Plan B", "3", "Pending", "400"],
  ["9", "Indicator R", "2024-03-18", "TV231", "ATS0AK013", "Plan A", "2", "Paid", "700"],
  ["10", "Indicator S", "2024-03-19", "TV232", "ATS0AK015", "Plan C", "1", "Paid", "800"]
],

demo: [
["1", "Demo Indicator A", "2024-03-15", "TV323", "ATS0AK014", "Trial", "5", "Free", "0"],
  ["2", "Demo Indicator B", "2024-03-16", "TV324", "ATS0AK014", "Trial", "4", "Free", "0"],
  ["3", "Demo Indicator C", "2024-03-17", "TV325", "ATS0AK016", "Trial", "3", "Free", "0"],
  ["4", "Demo Indicator D", "2024-03-18", "TV326", "ATS0AK017", "Trial", "2", "Free", "0"],
  ["5", "Demo Indicator E", "2024-03-19", "TV327", "ATS0AK016", "Trial", "1", "Free", "0"],
  ["6", "Demo Indicator F", "2024-03-20", "TV328", "ATS0AK019", "Trial", "6", "Free", "0"],
  ["7", "Demo Indicator G", "2024-03-21", "TV329", "ATS0AK020", "Trial", "7", "Free", "0"],
  ["8", "Demo Indicator H", "2024-03-22", "TV330", "ATS0AK019", "Trial", "8", "Free", "0"],
  ["9", "Demo Indicator I", "2024-03-23", "TV331", "ATS0AK022", "Trial", "9", "Free", "0"],
  ["10", "Demo Indicator J", "2024-03-24", "TV332", "ATS0AK015", "Trial", "10", "Free", "0"],
  ["11", "Demo Indicator K", "2024-03-25", "TV333", "ATS0AK020", "Trial", "11", "Free", "0"]
]

    };

    let tableContent = `
    <div class="banner">${type.charAt(0).toUpperCase() + type.slice(1)} List</div>
    <div class="search-container">
        <input type="text" id="searchInput" onkeyup="searchReferral()" placeholder="Search Referral ID                       🔍">
        <button class="add-new-btn" onclick="openPopup()">Add New</button>
    </div>
    <table id="referralTable">
        <tr>
            <th>SI No</th>
            <th>Indicator Name</th>
            <th>Date</th>
            <th>Trading View ID</th>
            <th>Referral ID</th>
            <th>Plan</th>
            <th>Remaining Days</th>
            <th>Payment Status</th>
            <th>Amount Paid (₹)</th>
        </tr>`;

data[type].forEach(row => {
    tableContent += `<tr>`;
    row.forEach((cell, index) => {
        if (index === 7) { // Payment Status
            const statusClass = cell.toLowerCase() === 'paid' ? 'paid' : 'pending';
            tableContent += `<td><span class="payment-status ${statusClass}">${cell}</span></td>`;
        } else {
            tableContent += `<td>${cell}</td>`;
        }
    });
    tableContent += `</tr>`;
});

tableContent += `</table>
<p id="notFoundMessage" style="
    display: none; 
    color: red; 
    font-weight: bold; 
    text-align: center; 
    font-size: 20px;
    margin-top: 50px;
">
    Referral ID Not Found<br>
    <img src="unnamed.png" style="display: block; margin: 20px auto; max-width: 200px;">
</p>
`;

document.getElementById("main-content").innerHTML = tableContent;

}

// Function to search referral ID
function searchReferral() {
    let input = document.getElementById("searchInput").value.toUpperCase();
    let table = document.getElementById("referralTable");
    let tr = table.getElementsByTagName("tr");
    let found = false;

    for (let i = 1; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[4];
        if (td) {
            let textValue = td.textContent || td.innerText;
            if (textValue.toUpperCase().includes(input)) {
                tr[i].style.display = "";
                found = true;
            } else {
                tr[i].style.display = "none";
            }
        }
    }

    document.getElementById("notFoundMessage").style.display = found ? "none" : "block";
}

// Function to Open Popup and Inject HTML Dynamically
// JavaScript validation for Trading View ID and Referral ID



function openPopup() {
            let existingPopup = document.getElementById("popupContainer");
            if (existingPopup) existingPopup.remove();
            document.getElementById("main-content").classList.add("blurred");

            let popupContainer = document.createElement("div");
            popupContainer.id = "popupContainer";
            popupContainer.className = "popup";

            popupContainer.innerHTML = `
                <div class="popup-header">
                    <h2 class="popup-title">Add New Subscription</h2>
                    <span class="close-btn" onclick="closePopup()">×</span>
                </div>
                <div class="field-group1">
                    <label for="indicatorName">Indicator Name</label>
                    <select id="indicatorName">
                        <option value="">Select an Indicator</option>
                        <option value="A">Indicator A</option>
                        <option value="B">Indicator B</option>
                        <option value="C">Indicator C</option>
                        <option value="D">Indicator D</option>
                        <option value="E">Indicator E</option>
                        <option value="F">Indicator F</option>
                        <option value="G">Indicator G</option>
                        <option value="H">Indicator H</option>
                        <option value="I">Indicator I</option>
                        <option value="J">Indicator J</option>
                        <option value="K">Indicator K</option>
                        <option value="L">Indicator L</option>
                        <option value="M">Indicator M</option>
                        <option value="N">Indicator N</option>
                        <option value="O">Indicator O</option>
                        <option value="P">Indicator P</option>
                        <option value="Q">Indicator Q</option>
                        <option value="R">Indicator R</option>
                        <option value="S">Indicator S</option>
                        <option value="T">Indicator T</option>
                        <option value="U">Indicator U</option>
                        <option value="V">Indicator V</option>
                        <option value="W">Indicator W</option>
                        <option value="X">Indicator X</option>
                        <option value="Y">Indicator Y</option>
                        <option value="Z">Indicator Z</option>
                    </select>
                </div>
                <div class="field-group1">
                    <label>Date</label>
                    <input type="date" id="date">
                </div>
                <div class="field-group1">
                    <label>Trading View ID</label>
                    <input type="text" id="tradingViewID">
                    <div id="tradingViewError" style="color: red; font-size: 12px;"></div>
                </div>
                <div class="field-group1">
                    <label>Referral ID</label>
                    <input type="text" id="referralID">
                    <div id="referralError" style="color: red; font-size: 12px;"></div>
                </div>
                <div class="field-group1">
                    <label>Plan</label>
                    <select id="plan">
                        <option>Plan 1</option>
                        <option>Plan 2</option>
                    </select>
                </div>
                <div class="field-group1">
                    <label>Remaining Days</label>
                    <input type="number" id="remainingDays">
                </div>
                <div class="field-group1">
                    <label>Payment Status</label>
                    <select id="paymentStatus">
                        <option>Paid</option>
                        <option>Pending</option>
                    </select>
                </div>
                <div class="field-group1">
                    <label>Amount Paid (₹)</label>
                    <input type="number" id="amountPaid">
                </div>
                <button class="popup-button" onclick="addNewEntry()">Add Entry</button>
            `;

            document.body.appendChild(popupContainer);

            // Add input event listeners for real-time validation
            document.getElementById("tradingViewID").addEventListener("input", validateTradingViewID);
            document.getElementById("referralID").addEventListener("input", validateReferralID);
        }

        function closePopup() {
            let popup = document.getElementById("popupContainer");
            if (popup) popup.remove();
            document.getElementById("main-content").classList.remove("blurred");
        }

        function validateTradingViewID() {
            const tradingViewID = document.getElementById("tradingViewID").value.trim();
            const tradingViewError = document.getElementById("tradingViewError");
            const tradingViewPattern =/^TV\d{1,4}$/;

            if (!tradingViewPattern.test(tradingViewID)) {
                tradingViewError.textContent = "Invalid Trading View ID. Format: TV1234";
                document.getElementById("tradingViewID").style.border = "1px solid red";
            } else {
                tradingViewError.textContent = "";  // Remove error when valid
                document.getElementById("tradingViewID").style.border = "1px solid green"; // Valid input
            }
        }

        function validateReferralID() {
            const referralID = document.getElementById("referralID").value.trim();
            const referralError = document.getElementById("referralError");
            const referralPattern = /^ATS0AK\d{1,4}$/

            if (!referralPattern.test(referralID)) {
                referralError.textContent = "Invalid Referral ID. Format: ATS0AK1234";
                document.getElementById("referralID").style.border = "1px solid red";
            } else {
                referralError.textContent = ""; // Remove error when valid
                document.getElementById("referralID").style.border = "1px solid green"; // Valid input
            }
        }

        function addNewEntry() {
            const indicatorName = document.getElementById("indicatorName").value.trim();
            const date = document.getElementById("date").value;
            const tradingViewID = document.getElementById("tradingViewID").value.trim();
            const referralID = document.getElementById("referralID").value.trim();
            const plan = document.getElementById("plan").value;
            const remainingDays = document.getElementById("remainingDays").value.trim();
            const paymentStatus = document.getElementById("paymentStatus").value;
            const amountPaid = document.getElementById("amountPaid").value.trim();

            const tradingViewPattern = /^TV\d{1,4}$/;
            const referralPattern = /^ATS0AK\d{1,4}$/

            let valid = true;

            // Validate Trading View ID
            const tradingViewError = document.getElementById("tradingViewError");
            if (!tradingViewPattern.test(tradingViewID)) {
                tradingViewError.textContent = "Invalid Trading View ID. Format: TV1234";
                document.getElementById("tradingViewID").style.border = "1px solid red";
                valid = false;
            }

            // Validate Referral ID
            const referralError = document.getElementById("referralError");
            if (!referralPattern.test(referralID)) {
                referralError.textContent = "Invalid Referral ID. Format: ATS0AK1234";
                document.getElementById("referralID").style.border = "1px solid red";
                valid = false;
            }

            // Check for missing fields
            let missingFields = [];
            if (!indicatorName) missingFields.push("Indicator Name");
            if (!date) missingFields.push("Date");
            if (!plan) missingFields.push("Plan");
            if (!remainingDays) missingFields.push("Remaining Days");
            if (!paymentStatus) missingFields.push("Payment Status");
            if (!amountPaid) missingFields.push("Amount Paid");

            if (missingFields.length > 0) {
                alert(`Please fill in the following fields: ${missingFields.join(", ")}`);
                return;
            }

            if (!valid) {
                alert("Please correct the highlighted fields.");
                return;
            }

            // Add new row to the table if all validations pass
            const table = document.getElementById("referralTable");
            const newRow = table.insertRow(-1);
            const siNo = table.rows.length - 1;

            newRow.innerHTML = `
                <td>${siNo}</td>
                <td>${indicatorName}</td>
                <td>${date}</td>
                <td>${tradingViewID}</td>
                <td>${referralID}</td>
                <td>${plan}</td>
                <td>${remainingDays}</td>
                <td>
                    <span class="status-badge ${paymentStatus === 'Paid' ? 'paid' : 'pending'}">
                        ${paymentStatus}
                    </span>
                </td>
                <td>₹${amountPaid}</td>
            `;

            closePopup();
        }


        
function closePopup() {
    let popup = document.getElementById("popupContainer");
    if (popup) popup.remove();
    document.getElementById("main-content").classList.remove("blurred");
}

    
// 1. Upload and Save Image
function uploadImage(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const imageData = e.target.result;
      localStorage.setItem("profileImage", imageData); // Save to localStorage
      setProfileImages(imageData); // Apply image to all places
    };
    reader.readAsDataURL(file);
  }
}

// 2. Apply the image to both sidebar and profile setting
function setProfileImages(imageData) {
  const imageHTML = `<img src="${imageData}" style="width: 100%; height: 100%; border-radius: 50%;">`;

  const sidebarProfile = document.getElementById("sidebarProfile");
  const profilePage = document.getElementById("profilePage");

  if (sidebarProfile) sidebarProfile.innerHTML = imageHTML;
  if (profilePage) profilePage.innerHTML = imageHTML;
}

// 3. Load image from localStorage
function loadProfileImage() {
  const savedImage = localStorage.getItem("profileImage");
  if (savedImage) {
    setProfileImages(savedImage);
  }
}

// 4. Profile Settings Module
function showProfile() {
  const profileContent = `
    <div class="banner"
      <h2>PROFILE SETTINGS</h2>
    </div>

    <div class="profile-wrapper">
      <h2 class="welcome-text">Welcome, <span id="welcome-name">Khaleel</span></h2>
       <p class="date-text" id="date-text"></p>

      <div class="profile-card">
        <div class="profile-header">
          <div class="profile-user">
            <div class="profile" id="profilePage" onclick="document.getElementById('fileInput').click();">
              👤
            </div>
            <input type="file" id="fileInput" accept="image/*" onchange="uploadImage(event)">
            <div>
              <h3 id="display-name">Khaleel Shaik</h3>
              <p id="display-email">khaleel123@gmail.com</p>
            </div>
          </div>
          <button class="edit-btn">Edit</button>
        </div>

        <div class="profile-grid">
          <div class="form-group">
            <label>First Name</label>
            <input type="text" id="first-name" value="Khaleel" disabled />
            <span class="error" id="fname-error" style="color:red; font-size: 12px;"></span>
          </div>
          <div class="form-group">
            <label>Last Name</label>
            <input type="text" id="last-name" value="Shaik" disabled />
            <span class="error" id="lname-error" style="color:red; font-size: 12px;"></span>
          </div>
          <div class="form-group">
            <label>Gender</label>
            <select id="gender" disabled>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div class="form-group">
            <label>Mobile Number</label>
            <input type="text" id="mobile" value="7893535047" disabled />
            <span class="error" id="mobile-error" style="color:red; font-size: 12px;"></span>
          </div>
          <div class="form-group">
            <label>Place</label>
            <input type="text" id="place" value="Hyderabad" disabled />
          </div>
          <div class="form-group">
            <label>D-O-B</label>
            <input type="text" id="dob" value="1990-01-01" disabled />
          </div>
        </div>

        <div class="email-section">
          <h4>My Email Address</h4>
          <p><i class="fas fa-envelope"></i> <span id="email-display">khaleel123@gmail.com</span></p>
          <button class="add-email-btn">+ Add Email Address</button>
          <span class="error" id="email-error" style="color:red; font-size: 12px;"></span>
        </div>

        <div class="password-section">
          <h4>Change Password</h4>
          <div class="form-group"><label>Old Password</label><input type="password" placeholder="Old Password" disabled /></div>
          <div class="form-group"><label>New Password</label><input type="password" placeholder="New Password" disabled /></div>
          <div class="form-group"><label>Confirm Password</label><input type="password" placeholder="Confirm Password" disabled /></div>
          <button class="update-password-btn">Update Password</button>
        </div>
      </div>
    </div>
  `;

  document.getElementById("main-content").innerHTML = profileContent;
  
  // Display current date and time
  function updateDateTime() {
    const dateEl = document.getElementById("date-text");
    const now = new Date();
    const options = {
      weekday: 'short',
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    };
    dateEl.textContent = now.toLocaleString('en-US', options);
  }

  updateDateTime(); 

  let isEditable = false;

  const editBtn = document.querySelector(".edit-btn");
  editBtn.addEventListener("click", () => {
    isEditable = !isEditable;
    document.querySelectorAll("input, select").forEach(el => el.disabled = !isEditable);
    editBtn.textContent = isEditable ? "Save" : "Edit";

    if (!isEditable) {
      // On Save, validate all fields
      const nameRegex =/^[A-Za-z]+$/; // No space or period at the start
      const mobileRegex = /^[6-9]\d{9}$/;
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

      const firstName = document.getElementById("first-name").value.trim();
      const lastName = document.getElementById("last-name").value.trim();
      const mobile = document.getElementById("mobile").value.trim();
      const emailInput = document.querySelector(".new-email");
      const email = emailInput ? emailInput.value.trim() : document.getElementById("display-email").textContent;

      let valid = true;

      if (!nameRegex.test(firstName)) {
        document.getElementById("fname-error").textContent = "Invalid first name format.";
        valid = false;
      }
      if (!nameRegex.test(lastName)) {
        document.getElementById("lname-error").textContent = "Invalid last name format.";
        valid = false;
      }
      if (!mobileRegex.test(mobile)) {
        document.getElementById("mobile-error").textContent = "Mobile number must start with 6-9 and be 10 digits.";
        valid = false;
      }
      if (!emailRegex.test(email)) {
        document.getElementById("email-error").textContent = "Invalid email address.";
        valid = false;
      }

      if (!valid) {
        isEditable = true;
        editBtn.textContent = "Save";
        return;
      }

      document.getElementById("display-name").textContent = `${firstName} ${lastName}`;
      document.getElementById("welcome-name").textContent = firstName;
      document.getElementById("display-email").textContent = email;
      document.getElementById("email-display").textContent = email;
      if (emailInput) emailInput.remove();
    }
  });

  document.querySelectorAll("input, select").forEach(el => {
    el.addEventListener("focus", function () {
      if (!isEditable) {
        alert("Please click 'Edit' to make changes.");
        el.blur();
      }
    });
  });

  document.querySelector(".add-email-btn").addEventListener("click", () => {
    if (!document.querySelector(".new-email")) {
      const newEmailInput = document.createElement("input");
      newEmailInput.type = "email";
      newEmailInput.placeholder = "Enter new email address";
      newEmailInput.className = "form-group new-email";
      newEmailInput.style.marginTop = "10px";
      newEmailInput.style.padding = "10px";
      newEmailInput.style.border = "1px solid #ccc";
      newEmailInput.style.borderRadius = "6px";
      newEmailInput.style.width = "100%";

      document.querySelector(".email-section").appendChild(newEmailInput);
    }
  });

  setupLiveValidation();
  loadProfileImage();
}

function setupLiveValidation() {
  const nameRegex = /^[A-Za-z]+$/;
  const mobileRegex = /^[6-9]\d{9}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

  const preventSpace = (field) => {
    field.addEventListener("keydown", (e) => {
      if (e.key === " ") {
        e.preventDefault(); // block space key
      }
    });
  };

  const validateInput = (field, regex, errorId, message) => {
    field.addEventListener("input", () => {
      const value = field.value.trim();
      if (!regex.test(value)) {
        document.getElementById(errorId).textContent = message;
        field.style.border = "1px solid red";
      } else {
        document.getElementById(errorId).textContent = "";
        field.style.border = "";
      }
    });
  };

  const fnameField = document.getElementById("first-name");
  const lnameField = document.getElementById("last-name");

  validateInput(fnameField, nameRegex, "fname-error", "Only letters. No space or period allowed.");
  validateInput(lnameField, nameRegex, "lname-error", "Only letters. No space or period allowed.");
  preventSpace(fnameField);
  preventSpace(lnameField);

  validateInput(document.getElementById("mobile"), mobileRegex, "mobile-error", "Must be 10 digits and start with 6, 7, 8, or 9.");

  document.addEventListener("input", (e) => {
    if (e.target.classList.contains("new-email")) {
      const email = e.target.value.trim();
      if (!emailRegex.test(email)) {
        document.getElementById("email-error").textContent = "Invalid email address.";
        e.target.style.border = "1px solid red";
      } else {
        document.getElementById("email-error").textContent = "";
        e.target.style.border = "";
      }
    }
  });
}


window.addEventListener("DOMContentLoaded", loadProfileImage);






// Function to load Live Chat Page in Main Content
function showLiveChat() {
    let chatPageContent = `
       <div class="banner"
  <h2>Live Chat for Customer Support</h2>
</div>

<div class="chat-wrapper">
  <div class="chat-image-left">
    <img src="78935.png" alt="Live Chat Illustration" />
  </div>
  <div class="chat-content-right" id="chatText">
    <p>
      Provide live chat support, make it easy for customers to find help center articles...
    </p>
    <button onclick="toggleChart()">Try for Free</button>
  </div>
</div>

<div id="chat-icon" onclick="toggleChart()">💬</div>

<div id="chartContainer" class="chart-container" style="display: none;">
  <h3>Your Chart Will Appear Here</h3>
</div>

`;

    document.getElementById("main-content").innerHTML = chatPageContent;
}

function toggleChart() {
    let chartPopup = document.getElementById("chart-popup");
    let chatImage = document.getElementById("chatImage");
    let mainContent = document.getElementById("main-content");

    if (!chartPopup) {
        let chartContainer = document.createElement("div");
        chartContainer.id = "chart-popup";
        chartContainer.innerHTML = `
            <div id="chart-container">
                <div id="chart-header">
                    <span>Support Chat</span>
                    <button onclick="closeChart()">✖</button>
                </div>
                <div id="chart-content">
                    <div class="bot-message">
                        <span class="bot-icon">🤖</span>
                        <p>Welcome! How can I assist you today?</p>
                    </div>
                </div>
                <div id="chat-input">
                    <input type="text" id="message-input" placeholder="Type your message...">
                    <button class="icon-button">📎</button>
                    <button class="icon-button">😊</button>
                    <button class="send-button" onclick="sendMessage()">➤</button>
                </div>
            </div>
        `;
        document.body.appendChild(chartContainer);

        if (chatImage) chatImage.style.display = "none";
        if (mainContent) mainContent.classList.add("blurred");
    } else {
        let isVisible = chartPopup.style.display !== "none";
        chartPopup.style.display = isVisible ? "none" : "block";

        if (chatImage) chatImage.style.display = isVisible ? "flex" : "none";
        if (mainContent) {
            if (isVisible) {
                mainContent.classList.remove("blurred");
            } else {
                mainContent.classList.add("blurred");
            }
        }
    }
}

function closeChart() {
    let chartPopup = document.getElementById("chart-popup");
    let chatImage = document.getElementById("chatImage");
    let mainContent = document.getElementById("main-content");

    if (chartPopup) chartPopup.style.display = "none";
    if (chatImage) chatImage.style.display = "flex";
    if (mainContent) mainContent.classList.remove("blurred");
}

function sendMessage() {
    let messageInput = document.getElementById("message-input").value;
    if (messageInput.trim() !== "") {
        let chatContent = document.getElementById("chart-content");

        // User message
        let userMessage = `<div class="user-message"><p>${messageInput}</p></div>`;
        chatContent.innerHTML += userMessage;

        // Clear input
        document.getElementById("message-input").value = "";

        // Scroll to bottom
        chatContent.scrollTop = chatContent.scrollHeight;

        // Add system message after a short delay
        setTimeout(() => {
            let systemMessage = `<div class="system-message"><p>Thank you for your message. Our team will respond shortly.</p></div>`;
            chatContent.innerHTML += systemMessage;
            chatContent.scrollTop = chatContent.scrollHeight;
        }, 500); // 500ms delay to mimic a response
    }
}


function showSignOut() {
  const popupHTML = `
    <div class="popup-overlay" id="signoutPopup">
      <div class="signout-confirm-box">
        <h3>Are you sure you want to sign out?</h3>
        <div class="signout-buttons">
          <button class="yes-button" onclick="confirmSignOut()">Yes</button>
          <button class="no-button" onclick="cancelSignOut()">No</button>
        </div>
      </div>
    </div>
  `;

  // Inject popup HTML
  document.getElementById("popup-container").innerHTML = popupHTML;

  // Blur background
  document.getElementById("main-content").classList.add("blurred");
}

function confirmSignOut() {
  // Refresh the page
  window.location.href = "login.html";
}

function cancelSignOut() {
  // Close popup and remove blur
  clearSignOutUI();
}

function clearSignOutUI() {
  document.getElementById("popup-container").innerHTML = "";
  document.getElementById("main-content").classList.remove("blurred");
}


function showMonthlyCommission() {
    let monthlyContent = `
      
           <div class="banner" <h2>Monthly Commission</h2></div>

            <div class="filter-section">
                <label for="month">Select Month:</label>
                <select id="month" onchange="updateGraphsAndTable()">
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                </select>
            </div>

            <div class="charts-container">
                <div class="chart-box">
                    <h3>Monthly Bar Chart</h3>
                    <canvas id="barChart"></canvas>
                </div>
                <div class="chart-box">
                    <h3>Weekly Pie Chart</h3>
                    <canvas id="pieChart"></canvas>
                </div>
            </div>

            <h3>Commission Data</h3>
            <table>
                <thead>
                    <tr>
                        <th>WEEKS</th>
                        <th>Commission Earned</th>
                    </tr>
                </thead>
                <tbody id="commissionTable">
                    <!-- Data updates dynamically -->
                </tbody>
            </table>
       
    `;

    document.getElementById("main-content").innerHTML = monthlyContent;

    // Render the initial charts and table
    renderGraphs();
    updateTable("January");
}

// Sample commission data (random values for demo)
const commissionData = {
    January: [500, 700, 800, 1000],
    February: [550, 750, 900, 1100],
    March: [600, 850, 950, 1200],
    April: [650, 900, 1000, 1300],
    May: [700, 950, 1100, 1400],
    June: [750, 1000, 1150, 1500],
    July: [800, 1050, 1200, 1600],
    August: [850, 1100, 1250, 1700],
    September: [900, 1150, 1300, 1800],
    October: [950, 1200, 1350, 1900],
    November: [1000, 1250, 1400, 2000],
    December: [1050, 1300, 1450, 2100]
};


// Function to render graphs
function renderGraphs() {
    let barCtx = document.getElementById("barChart").getContext("2d");
    let pieCtx = document.getElementById("pieChart").getContext("2d");

    window.barChart = new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
            datasets: [{
                label: 'Commission (USD)',
                data: commissionData["January"],
                backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

    window.pieChart = new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
            datasets: [{
                data: commissionData["January"],
                backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

// Function to update graphs and table based on selected month
function updateGraphsAndTable() {
    let selectedMonth = document.getElementById("month").value;

    window.barChart.data.datasets[0].data = commissionData[selectedMonth];
    window.barChart.update();
    window.pieChart.data.datasets[0].data = commissionData[selectedMonth];
    window.pieChart.update();

    updateTable(selectedMonth);
}

// Function to update table
function updateTable(month) {
    let tableBody = document.getElementById("commissionTable");

    let data = commissionData[month];
    tableBody.innerHTML = `
        <tr><td>Week 1</td><td>₹${data[0]}</td></tr>
        <tr><td>Week 2</td><td>₹${data[1]}</td></tr>
        <tr><td>Week 3</td><td>₹${data[2]}</td></tr>
        <tr><td>Week 4</td><td>₹${data[3]}</td></tr>
    `;
}


function showDailyCommission() {
    const dailyContent = `
        <div class="banner"<h2>Daily Commission</h2></div>

        <div class="filter-section">
            <label for="week">Select Week:</label>
            <select id="week" onchange="updateDailyGraphsAndTable()">
                <option value="week1">Week 1</option>
                <option value="week2">Week 2</option>b
                <option value="week3">Week 3</option>
                <option value="week4">Week 4</option>
            </select>
        </div>

        <div class="charts-container">
            <div class="chart-box">
                <h3>Daily Bar Chart</h3>
                <canvas id="dailyBarChart"></canvas>
            </div>
            <div class="chart-box">
                <h3>Daily Pie Chart</h3>
                <canvas id="dailyPieChart"></canvas>
            </div>
        </div>

        <h3>Commission Data</h3>
        <table>
            <thead>
                <tr>
                    <th>Day</th>
                    <th>Commission Earned</th>
                </tr>
            </thead>
            <tbody id="dailyCommissionTable">
                <!-- Data will be inserted here -->
            </tbody>
        </table>
    `;

    document.getElementById("main-content").innerHTML = dailyContent;

    renderDailyGraphs();
    updateDailyTable("week1");
}

// Sample data for weeks
const dailyCommissionData = {
    week1: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        data: [500, 400, 300, 200, 250, 180, 100]
    },
    week2: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        data: [600, 500, 450, 300, 400, 350, 200]
    },
    week3: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        data: [300, 200, 150, 100, 80, 120, 90]
    },
    week4: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        data: [250, 310, 290, 330, 400, 450, 500]
    }
};

function renderDailyGraphs() {
    const barCtx = document.getElementById("dailyBarChart").getContext("2d");
    const pieCtx = document.getElementById("dailyPieChart").getContext("2d");

    window.dailyBarChart = new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: dailyCommissionData.week1.labels,
            datasets: [{
                label: 'Commission (₹)',
                data: dailyCommissionData.week1.data,
                backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff', '#ff9f40', '#00c9a7']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: { beginAtZero: true }
            }
        }
    });

    window.dailyPieChart = new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: dailyCommissionData.week1.labels,
            datasets: [{
                data: dailyCommissionData.week1.data,
                backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff', '#ff9f40', '#00c9a7']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'bottom' }
            }
        }
    });
}

function updateDailyGraphsAndTable() {
    const selectedWeek = document.getElementById("week").value;
    const weekData = dailyCommissionData[selectedWeek];

    // Update Bar Chart
    window.dailyBarChart.data.labels = weekData.labels;
    window.dailyBarChart.data.datasets[0].data = weekData.data;
    window.dailyBarChart.update();

    // Update Pie Chart
    window.dailyPieChart.data.labels = weekData.labels;
    window.dailyPieChart.data.datasets[0].data = weekData.data;
    window.dailyPieChart.update();

    updateDailyTable(selectedWeek);
}

function updateDailyTable(weekKey) {
    const tableBody = document.getElementById("dailyCommissionTable");
    const week = dailyCommissionData[weekKey];

    tableBody.innerHTML = week.labels.map((day, i) => {
        return `<tr><td>${day}</td><td>₹${week.data[i]}</td></tr>`;
    }).join('');
}



function showSubscription() {
    let content = `
      <div class="banner" <h2>Choose Your Plan</h2></div>
<div class="plan-container">

    <!-- Daily Plans -->
    <div class="plan daily">
        <h3>Daily Basic</h3>
        <h4 class="price">₹19 / day</h4>
        <button class="subscribe-btn">Get Started</button>
        <ul>
            <li>✔ Live market data</li>
            <li>✔ AI trade signals</li>
            <li>✔ 24-hour access</li>
        </ul>
    </div>

    <div class="plan daily">
        <h3>Daily Pro</h3>
        <h4 class="price">₹29 / day</h4>
        <button class="subscribe-btn">Get Started</button>
        <ul>
            <li>✔ All Daily Basic features</li>
            <li>✔ Advanced market insights</li>
            <li>✔ Personalized trade alerts</li>
        </ul>
    </div>

    <div class="plan daily">
        <h3>Daily Premium</h3>
        <h4 class="price">₹39 / day</h4>
        <button class="subscribe-btn">Get Started</button>
        <ul>
            <li>✔ All Daily Pro features</li>
            <li>✔ Priority customer support</li>
            <li>✔ Access to premium indicators</li>
        </ul>
    </div>

    <!-- Monthly Plans -->
    <div class="plan free">
        <h3>Free</h3>
        <h4 class="price">₹0</h4>
        <button class="subscribe-btn">Get Started</button>
        <ul>
            <li>✔ Basic market data</li>
            <li>✔ Community support</li>
            <li>✔ Limited trade signals</li>
        </ul>
    </div>

    <div class="plan basic">
        <h3>Basic</h3>
        <h4 class="price">₹199 / month</h4>
        <button class="subscribe-btn">Get Started</button>
        <ul>
            <li>✔ Live market data</li>
            <li>✔ AI-based trade signals</li>
            <li>✔ Risk management tools</li>
        </ul>
    </div>

    <div class="plan standard">
        <h3>Standard <span class="star">★</span></h3>
        <h4 class="price">₹399 / month</h4>
        <button class="subscribe-btn">Get Started</button>
        <ul>
            <li>✔ Advanced trade analytics</li>
            <li>✔ Exclusive strategy sessions</li>
            <li>✔ Premium support</li>
        </ul>
    </div>

    <div class="plan business">
        <h3>Business</h3>
        <h4 class="price">₹699 / month</h4>
        <button class="subscribe-btn">Get Started</button>
        <ul>
            <li>✔ All features included</li>
            <li>✔ API access for automation</li>
            <li>✔ Dedicated account manager</li>
        </ul>
    </div>

    <!-- Yearly Plans -->
    <div class="plan yearly">
        <h3>Yearly Standard</h3>
        <h4 class="price">₹4,599 / year</h4>
        <button class="subscribe-btn">Get Started</button>
        <ul>
            <li>✔ All Standard features</li>
            <li>✔ Discounted pricing</li>
            <li>✔ Year-round premium access</li>
        </ul>
    </div>

    <div class="plan yearly">
        <h3>Yearly Business</h3>
        <h4 class="price">₹7,999 / year</h4>
        <button class="subscribe-btn">Get Started</button>
        <ul>
            <li>✔ All Business features</li>
            <li>✔ API Access & automation</li>
            <li>✔ Exclusive yearly trade insights</li>
        </ul>
    </div>

</div>


    `;

    document.getElementById("main-content").innerHTML = content;
}


function togglePopup(show) {
    const mainContent = document.getElementById("main-content");
    if (show) {
        mainContent.classList.add("blurred"); // Add blur
    } else {
        mainContent.classList.remove("blurred"); // Remove blur
    }
}



