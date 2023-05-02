const modal = document.querySelector(".modal-body");
const modalContent = document.querySelector(".modal-content");

console.log(experienceData);

modal.innerHTML = experienceData
  .map(
    (exp) => `
    <div class="d-flex flex-column" style="background-color: #FFE9E7; border-radius: 8px; border: 1px solid #C9C9C9">
        <div class="d-flex align-items-center px-1 pt-1">
            <div><img src="./assets//Group 48098561.png" width=35px/></div>
            <div>${exp.key}</div>
        </div>
        <div>
            <hr class="mt-2 pb-2" style="color:#afafaf; margin: 0rem"/>
        </div>
        <div class="px-2 pb-2">
        ${exp.value
          .map(
            (val) =>
              `<div class="tag">${val.key}</div><div class="tag_content">${val.value}</div>`
          )
          .join("")}
        </div>
    </div>
`
  )
  .join("");
