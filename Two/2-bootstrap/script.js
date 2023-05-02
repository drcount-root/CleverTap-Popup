const STATUS = "development";
const hashKey = "tVbC5agTaQ5YmXraq";
const salt = "$2a$08$b0MHMsT3ErLoTRjpjzsCie";
const DEV_BASE_URL = "https://dnestapi.docquity.com/4.3";
const PROD_BASE_URL = "https://nestapi.docquity.com/4.3";

const modal = document.querySelector(".modal-body");
const modalContent = document.querySelector(".modal-content");

// ******* GET Doctor's Educational Data In Array Of Objects Format *******

const trackId = "980981678778719641021600c83f";
const rounds = 10;
let hashedKey;

function crypt() {
  hashpw(hashKey, salt, (newhash) => {
    hashedKey = newhash;

    sessionStorage.setItem("hashedKey", hashedKey);

    hass = sessionStorage.getItem("hashedKey");
    console.log("hass", hass);

    fetchDoctorsData(hass);
  });
}

let apiUrl =
  location.hostname === "docquity.com" ? PROD_BASE_URL : DEV_BASE_URL;

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
    console.log(data);

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

      if (doctorsData.length >= 1) {
        const html = `
        <div class="d-flex flex-column" style="gap: 8px; height: 280px; overflow-y: scroll;">
            <div class="pb-2" style="background-color: #D9F4F9; border-radius: 8px; border: 1px solid #C9C9C9">
                  
                  <div class="px-2 pt-2 d-flex gap-2 align-items-center" style="line-height: 0px">
                    <div>
                      <img src="./assets/Edu.svg" width=24px/>
                    </div>
                    <div style="font-family: 'Manrope', sans-serif; font-weight: 500; font-size: 14px; color: #444242">Education 01</div>
                  </div>

                  <div>
                    <hr class="mt-2 pb-2" style="margin: 0rem"/>
                  </div>

                  <div class="px-2 pb-2" style="${deg1}">
                    <div class="tag">${Object.keys(edu)[0]}</div>
                    <div class="tag_content degree">${
                      Object.values(edu)[0]
                    }</div>
                  </div>
                  <div  class="px-2 pb-2" style="${lvl1}">
                      <div class="tag">${Object.keys(edu)[1]}</div>
                      <div class="tag_content level">${
                        Object.values(edu)[1]
                      }</div>
                  </div>
                  <div  class="px-2 pb-2" style="${inst1}">
                      <div class="tag">${Object.keys(edu)[2]}</div>
                      <div class="tag_content inst">${
                        Object.values(edu)[2]
                      }</div>
                  </div>
                  <div  class="px-2" style="${yoc1}">
                      <div class="tag">${Object.keys(edu)[3]}</div>
                      <div class="tag_content yoc">${
                        Object.values(edu)[3]
                      }</div>
                  </div>
            </div>
            
            <div  class="pb-2" style="background-color: #D9F4F9; border-radius: 8px; border: 1px solid #C9C9C9">
                
                <div class="px-2 pt-2 d-flex gap-2 align-items-center" style="line-height: 0px">
                  <div>
                    <img src="./assets/Edu.svg" width=24px/>
                  </div>
                  <div style="font-family: 'Manrope', sans-serif; font-weight: 500; font-size: 14px; color: #444242">Education 02</div>
                </div>

                <div>
                  <hr class="mt-2 pb-2" style="margin: 0rem"/>
                </div>
            
                <div class="px-2 pb-2" style="${deg2}">
                  <div class="tag">${Object.keys(edu)[4]}</div>
                  <div class="tag_content degree">
                    ${Object.values(edu)[4]}
                  </div>
                </div>
                <div class="px-2 pb-2" style="${lvl2}">
                  <div class="tag">${Object.keys(edu)[5]}</div>
                  <div class="tag_content level">${Object.values(edu)[5]}</div>
                </div>
                <div class="px-2 pb-2" style="${inst2}">
                  <div class="tag">${Object.keys(edu)[6]}</div>
                  <div class="tag_content inst">${Object.values(edu)[6]}</div>
                </div>
                <div class="px-2" style="${yoc2}">
                  <div class="tag">${Object.keys(edu)[7]}</div>
                  <div class="tag_content yoc">${Object.values(edu)[7]}</div>
                </div>
            </div>

            <div  class="pb-2" style="background-color: #D9F4F9; border-radius: 8px; border: 1px solid #C9C9C9">
                
                <div class="px-2 pt-2 d-flex gap-2 align-items-center" style="line-height: 0px">
                  <div>
                    <img src="./assets/Edu.svg" width=24px/>
                  </div>
                  <div style="font-family: 'Manrope', sans-serif; font-weight: 500; font-size: 14px; color: #444242">Education 03</div>
                </div>

                <div>
                  <hr class="mt-2 pb-2" style="margin: 0rem"/>
                </div>
            
                <div class="px-2 pb-2" style="${deg3}">
                  <div class="tag">${Object.keys(edu)[8]}</div>
                  <div class="tag_content degree">
                    ${Object.values(edu)[8]}
                  </div>
                </div>
                <div class="px-2 pb-2" style="${lvl3}">
                    <div class="tag">${Object.keys(edu)[9]}</div>
                    <div class="tag_content level">${
                      Object.values(edu)[9]
                    }</div>
                </div>
                <div class="px-2 pb-2" style="${inst3}">
                    <div class="tag">${Object.keys(edu)[10]}</div>
                    <div class="tag_content inst">${
                      Object.values(edu)[10]
                    }</div>
                </div>
                <div class="px-2" style="${yoc3}">
                    <div class="tag">${Object.keys(edu)[11]}</div>
                    <div class="tag_content yoc">${Object.values(edu)[11]}</div>
                </div>
            </div>
            
            <div  class="pb-2" style="background-color: #D9F4F9; border-radius: 8px; border: 1px solid #C9C9C9">
                
                <div class="px-2 pt-2 d-flex gap-2 align-items-center" style="line-height: 0px">
                  <div>
                    <img src="./assets/Edu.svg" width=24px/>
                  </div>
                  <div style="font-family: 'Manrope', sans-serif; font-weight: 500; font-size: 14px; color: #444242">Education 04</div>                </div>

                <div>
                  <hr class="mt-2 pb-2" style="margin: 0rem"/>
                </div>
            
                <div class="px-2 pb-2" style="${deg4}">
                    <div class="tag">${Object.keys(edu)[12]}</div>
                    <div class="tag_content degree">
                        ${Object.values(edu)[12]}
                    </div>
                </div>
                <div class="px-2 pb-2" style="${lvl4}">
                    <div class="tag">${Object.keys(edu)[13]}</div>
                    <div class="tag_content level">${
                      Object.values(edu)[13]
                    }</div>
                </div>
                <div class="px-2 pb-2" style="${inst4}">
                    <div class="tag">${Object.keys(edu)[14]}</div>
                    <div class="tag_content inst">${
                      Object.values(edu)[14]
                    }</div>
                </div>
                <div class="px-2" style="${yoc4}">
                    <div class="tag">${Object.keys(edu)[15]}</div>
                    <div class="tag_content yoc">${Object.values(edu)[15]}</div>
                </div>
            </div>
            
            <div  class="pb-2" style="background-color: #D9F4F9; border-radius: 8px; border: 1px solid #C9C9C9">
                
                <div class="px-2 pt-2 d-flex gap-2 align-items-center" style="line-height: 0px">
                  <div>
                    <img src="./assets/Edu.svg" width=24px/>
                  </div>
                  <div style="font-family: 'Manrope', sans-serif; font-weight: 500; font-size: 14px; color: #444242">Education 05</div>
                </div>

                <div>
                  <hr class="mt-2 pb-2" style="margin: 0rem"/>
                </div>
            
                <div class="px-2 pb-2" style="${deg5}">
                    <div class="tag">${Object.keys(edu)[16]}</div>
                    <div class="tag_content degree">
                        ${Object.values(edu)[16]}
                    </div>
                </div>
                <div class="px-2 pb-2" style="${lvl5}">
                    <div class="tag">${Object.keys(edu)[17]}</div>
                    <div class="tag_content level">${
                      Object.values(edu)[17]
                    }</div>
                </div>
                <div class="px-2 pb-2" style="${inst5}">
                        <div class="tag">${Object.keys(edu)[18]}</div>
                        <div class="tag_content inst">${
                          Object.values(edu)[18]
                        }</div>
                </div>
                <div class="px-2" style="${yoc5}">
                  <div class="tag">${Object.keys(edu)[19]}</div>
                  <div class="tag_content yoc">${Object.values(edu)[19]}</div>
                </div>
            </div>
        </div>
          `;
        modal.innerHTML += html;
      }
    }
  } catch (error) {
    if (error) {
      modalContent.innerHTML = `<div class="d-flex justify-content-center p-3 m-5">Record Not Found</div>`;
    }
  }
}

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
