const modal = document.getElementById("modal");

const showLoader = (loaderState) => {
  if (loaderState) {
    modal.innerHTML = `<div class="modal_content">
    <div class="loader_container">
      <img src="./loader.gif" class="loader_img"/>
    </div>
  </div>`;
  } else {
    modal.innerHTML = `<div class="modal_content">
    <div class="loader_container">
      Data
    </div>
  </div>`;
  }
};

showLoader(true);

setTimeout(()=> {
    showLoader(false);
}, 2000);