// console.log(location.hostname);

// ************** Modal Functionality **************

const openModal = document.getElementById("open-modal");
const modal = document.getElementById("modal");
// const closeModal = document.getElementsByClassName("close")[0];

openModal.onload = function () {
  modal.style.display = "block";
};

// closeModal.onclick = function () {
//   modal.style.display = "none";
// };

// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

// ******* GET Doctor's Educational Data In Array Of Objects Format *******

// track id
// http://127.0.0.1:5500/?trackId=36514167930585464182c7e94fa9
const trackId = window.location.search.slice(9);
// 36514167930585464182c7e94fa9

// const hashKey = "tVbC5agTaQ5YmXraq";
const rounds = 10;

let hashedKey;

function crypt() {
  // const hashKey = "tVbC5agTaQ5YmXraq";
  // const salt = "$2a$08$b0MHMsT3ErLoTRjpjzsCie";

  hashpw(hashKey, salt, (newhash) => {
    hashedKey = newhash;
    // console.log(hashedKey);

    // set hashedKey into session storage
    sessionStorage.setItem("hashedKey", hashedKey);
  });
}

crypt();

const hass = sessionStorage.getItem("hashedKey");
// console.log(hass);

let apiUrl =
  location.hostname === 'docquity.com' ? PROD_BASE_URL : DEV_BASE_URL;

const container = document.getElementById("edu_container");

async function fetchDoctorsData(hass) {
  try {
    const response = await fetch(apiUrl + "/profile-verification", {
      method: "POST",
      headers: {
        accept: "*/*",
        udid: "1234",
        lang: "en",
        ver: "4.3",
        version: "4.3",
        devicetype: "web",
        appversion: "123",
        hashKey: `${hass}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        track_id: `${trackId}`,
      }),
    });

    const data = await response.json();

    const doctorsData = [data.data];

    // console.log(doctorsData);

    for (let i = 0; i < doctorsData.length; i++) {
      const edu = doctorsData[i];

      const deg1 = !Object.keys(edu)[0] ? "display: none" : "display: block";
      const lvl1 = !Object.keys(edu)[1] ? "display: none" : "display: block";
      const inst1 = !Object.keys(edu)[2] ? "display: none" : "display: block";
      const yoc1 = !Object.keys(edu)[3] ? "display: none" : "display: block";

      const deg2 = !Object.keys(edu)[4] ? "display: none" : "display: block";
      const lvl2 = !Object.keys(edu)[5] ? "display: none" : "display: block";
      const inst2 = !Object.keys(edu)[6] ? "display: none" : "display: block";
      const yoc2 = !Object.keys(edu)[7] ? "display: none" : "display: block";

      const deg3 = !Object.keys(edu)[8] ? "display: none" : "display: block";
      const lvl3 = !Object.keys(edu)[9] ? "display: none" : "display: block";
      const inst3 = !Object.keys(edu)[10] ? "display: none" : "display: block";
      const yoc3 = !Object.keys(edu)[11] ? "display: none" : "display: block";

      const deg4 = !Object.keys(edu)[12] ? "display: none" : "display: block";
      const lvl4 = !Object.keys(edu)[13] ? "display: none" : "display: block";
      const inst4 = !Object.keys(edu)[14] ? "display: none" : "display: block";
      const yoc4 = !Object.keys(edu)[15] ? "display: none" : "display: block";

      const deg5 = !Object.keys(edu)[16] ? "display: none" : "display: block";
      const lvl5 = !Object.keys(edu)[17] ? "display: none" : "display: block";
      const inst5 = !Object.keys(edu)[18] ? "display: none" : "display: block";
      const yoc5 = !Object.keys(edu)[19] ? "display: none" : "display: block";

      // console.log(Object.keys(edu));

      if (doctorsData.length >= 1) {
        const html = `

        <div class="dividers">
            
            <div style="${deg1}">
                <div class="tag">${Object.keys(edu)[0]}</div>
                <div class="tag_content degree">
                    ${Object.values(edu)[0]}
                </div>
            </div>

            <div style="${lvl1}">
                <div class="tag">${Object.keys(edu)[1]}</div>
                <div class="tag_content level">${Object.values(edu)[1]}</div>
            </div>

            <div style="${inst1}">
                <div class="tag">${Object.keys(edu)[2]}</div>
                <div class="tag_content inst">${Object.values(edu)[2]}</div>
            </div>

            <div style="${yoc1}">
                <div class="tag">${Object.keys(edu)[3]}</div>
                <div class="tag_content yoc">${Object.values(edu)[3]}</div>
            </div>

            <div class="edu"></div>

            <div style="${deg2}">
                <div class="tag">${Object.keys(edu)[4]}</div>
                <div class="tag_content degree">
                    ${Object.values(edu)[4]}
                </div>
            </div>

            <div style="${lvl2}">
                <div class="tag">${Object.keys(edu)[5]}</div>
                <div class="tag_content level">${Object.values(edu)[5]}</div>
            </div>

            <div style="${inst2}">
                <div class="tag">${Object.keys(edu)[6]}</div>
                <div class="tag_content inst">${Object.values(edu)[6]}</div>
            </div>

            <div style="${yoc2}">
                <div class="tag">${Object.keys(edu)[7]}</div>
                <div class="tag_content yoc">${Object.values(edu)[7]}</div>
            </div>

            <div class="edu"></div>

            <div style="${deg3}">
                <div class="tag">${Object.keys(edu)[8]}</div>
                <div class="tag_content degree">
                    ${Object.values(edu)[8]}
                </div>
            </div>

            <div style="${lvl3}">
                <div class="tag">${Object.keys(edu)[9]}</div>
                <div class="tag_content level">${Object.values(edu)[9]}</div>
            </div>

            <div style="${inst3}">
                <div class="tag">${Object.keys(edu)[10]}</div>
                <div class="tag_content inst">${Object.values(edu)[10]}</div>
            </div>

            <div style="${yoc3}">
                <div class="tag">${Object.keys(edu)[11]}</div>
                <div class="tag_content yoc">${Object.values(edu)[11]}</div>
            </div>

            <div class="edu"></div>

            <div style="${deg4}">
                <div class="tag">${Object.keys(edu)[12]}</div>
                <div class="tag_content degree">
                    ${Object.values(edu)[12]}
                </div>
            </div>

            <div style="${lvl4}">
                <div class="tag">${Object.keys(edu)[13]}</div>
                <div class="tag_content level">${Object.values(edu)[13]}</div>
            </div>

            <div style="${inst4}">
                <div class="tag">${Object.keys(edu)[14]}</div>
                <div class="tag_content inst">${Object.values(edu)[14]}</div>
            </div>

            <div style="${yoc4}">
                <div class="tag">${Object.keys(edu)[15]}</div>
                <div class="tag_content yoc">${Object.values(edu)[15]}</div>
            </div>

            <div class="edu"></div>

            <div style="${deg5}">
                <div class="tag">${Object.keys(edu)[16]}</div>
                <div class="tag_content degree">
                    ${Object.values(edu)[16]}
                </div>
            </div>

            <div style="${lvl5}">
                <div class="tag">${Object.keys(edu)[17]}</div>
                <div class="tag_content level">${Object.values(edu)[17]}</div>
            </div>

            <div style="${inst5}">
                <div class="tag">${Object.keys(edu)[18]}</div>
                <div class="tag_content inst">${Object.values(edu)[18]}</div>
            </div>

            <div style="${yoc5}">
                <div class="tag">${Object.keys(edu)[19]}</div>
                <div class="tag_content yoc">${Object.values(edu)[19]}</div>
            </div>
        </div>
          `;
        container.innerHTML += html;
      }
    }
  } catch (error) {
    // console.error(error);
    if (error) {
      const modal = document.getElementById("modal")
      modal.innerHTML = `
        <div class="modal_content">
          <div class="err_msg">Record Not Found</div>
        </div>
      `;
    }
  }
}

fetchDoctorsData(hass);

// ** API POST req depending on button click to verify or deny doctors data **

async function verifyDoctorsData(action_value) {
  try {
    const response = await fetch(apiUrl + "/profile-verification/action", {
      method: "POST",
      headers: {
        accept: "*/*",
        udid: "1234",
        lang: "en",
        ver: "4.3",
        devicetype: "web",
        appversion: "123",
        hashKey: `${hass}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        track_id: `${trackId}`,
        action: `${action_value}`,
      }),
    });

    const data = await response.json();
    if (data.msg == "Success.") console.log("Checked");
  } catch (error) {
    console.error(error);
  }
}

let action_value = 0;

const noButton = document.getElementsByClassName("button_white");
const yesButton = document.getElementsByClassName("button_black");

function noButtonClicked() {
  action_value = 0;
  console.log(action_value);
  verifyDoctorsData(action_value);
}

function yesButtonClicked() {
  action_value = 1;
  console.log(action_value);
  verifyDoctorsData(action_value);
}
