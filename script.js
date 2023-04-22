// ************** Modal Functionality **************

const openModal = document.getElementById("open-modal");
const modal = document.getElementById("modal");
const closeModal = document.getElementsByClassName("close")[0];

openModal.onclick = function () {
  modal.style.display = "block";
};

closeModal.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// ******* GET Doctor's Educational Data In Array Of Objects Format *******

async function fetchDoctorsData() {
  try {
    const response = await fetch(
      "https://dnestapi.docquity.com/4.3/profile-verification",
      {
        method: "POST",
        headers: {
          accept: "*/*",
          udid: "1234",
          lang: "en",
          ver: "4.3",
          version: "4.3",
          devicetype: "web",
          appversion: "123",
          hashKey:
            "$2a$10$FiNqN6Y0akzoheI3MECVgeg/sdfaQyPAdDdJP0dPKeVUW1T/clyzm",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          track_id: "70006168129599464368a7a8cef6",
        }),
      }
    );

    const data = await response.json();

    const doctorsData = [data.data];

    const container = document.getElementById("edu_container");

    for (let i = 0; i < doctorsData.length; i++) {
      const edu = doctorsData[i];

      if (doctorsData.length >= 1) {
        const html = `
        <div class="edu">
              <span><img src="./assets/CME Credits.svg" /></span>
              <span>Education ${i + 1}</span>
        </div>
        <div class="dividers">
            <div>
                <div class="tag degree_label">${Object.keys(edu)[0]}</div>
                <div class="tag_content degree">
                    ${Object.values(edu)[0]}
                </div>
            </div>

            <div>
                <div class="tag">Level of Degree</div>
                <div class="tag_content level">Add Level of Degree</div>
            </div>

            <div>
                <div class="tag">${Object.keys(edu)[1]}</div>
                <div class="tag_content inst">${Object.values(edu)[1]}</div>
            </div>

            <div>
                <div class="tag">Year Of Complition</div>
                <div class="tag_content yoc">2012 - 2016</div>
            </div>
        </div>
          `;
        container.innerHTML += html;
      }
    }
  } catch (error) {
    console.error(error);
  }
}

fetchDoctorsData();

// ***************** API to verify or deny doctor data *****************



//
//
//
//
//
//

// const doctorsData = [
//   {
//     "1st Degree": "BACHELOR OF MEDICINE AND BACHELOR OF SURGERY",
//     "1st Degree Awarding Institute": "UNIVERSITY MALAYA",
//   },
//   {
//     "2nd Degree": "BACHELOR OF MEDICINE",
//     "2nd Degree Awarding Institute": "UNIVERSITY OF UK",
//   },
//   {
//     "3rd Degree": "BACHELOR OF SURGERY",
//     "3rd Degree Awarding Institute": "UNIVERSITY OF BANGKOK",
//   },
// ];

// const container = document.getElementById("edu_container");

// for (let i = 0; i < doctorsData.length; i++) {
//   const edu = doctorsData[i];

//   const html = `
//         <div class="card">
//           <h2>Degree: ${Object.values(edu)[0]}</h2>
//           <p>From: ${Object.values(edu)[1]}</p>
//         </div>
//       `;
//   container.innerHTML += html;
// }

// ************** GET Doctor's Educational Data **************

// const doctorsData = [];

// const doctorsDataFetcher = async (URL) => {
//   const response = await fetch(URL, {
//     method: "POST",
//     headers: {
//       accept: "*/*",
//       udid: "1234",
//       lang: "en",
//       ver: "4.3",
//       version: "4.3",
//       devicetype: "web",
//       appversion: "123",
//       hashKey: "$2a$10$FiNqN6Y0akzoheI3MECVgeg/sdfaQyPAdDdJP0dPKeVUW1T/clyzm",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       track_id: "70006168129599464368a7a8cef6",
//     }),
//   });

//   const data = await response.json();
//     // console.log(data.data)
//   doctorsData.push(data.data);
// };

// doctorsDataFetcher("https://dnestapi.docquity.com/4.3/profile-verification");

// console.log(doctorsData);

//
//
//
//
//
//
// *************************** Example ***************************

// JavaScript
// const apiUrl = "https://jsonplaceholder.typicode.com/posts";

// async function fetchPosts() {
//   try {
//     const response = await fetch(apiUrl);
//     const posts = await response.json();
//     const container = document.getElementById("edu_container");

//     for (let i = 0; i < posts.length; i++) {
//       const post = posts[i];
//       const html = `
//         <div class="card">
//           <h2>${post.title}</h2>
//           <p>By ${post.userId}</p>
//           <p>${post.body}</p>
//         </div>
//       `;
//       container.innerHTML += html;
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

// fetchPosts();
