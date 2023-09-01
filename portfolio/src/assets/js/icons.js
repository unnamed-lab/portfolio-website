"use strict";

console.log("Icons Imported!")
const addIcons = () => {
  const wW = window.innerWidth;
  const wH = window.innerHeight;
  const navBar = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
    const sPosition = window.scrollY; 
    if (sPosition >= wH * 0.5 && wW >= 768) navBar.classList.add("sidebar");
    else
      navBar.classList.contains("sidebar") === true
        ? navBar.classList.remove("sidebar")
        : null;
  });

  const homeIcon = `
<svg
    data-name="Layer 2"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30 15a1 1 0 0 1-.58-.19L16 5.23 2.58 14.81a1 1 0 0 1-1.16-1.62l14-10a1 1 0 0 1 1.16 0l14 10A1 1 0 0 1 30 15ZM5 9a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2H6v3a1 1 0 0 1-1 1Z"
      fill="#ffffff"
      class="icon fill-101820"
    ></path>
    <path
      d="M25 29h-5a1 1 0 0 1-1-1v-7h-6v7a1 1 0 0 1-1 1H7a3 3 0 0 1-3-3V16a1 1 0 0 1 2 0v10a1 1 0 0 0 1 1h4v-7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v7h4a1 1 0 0 0 1-1V16a1 1 0 0 1 2 0v10a3 3 0 0 1-3 3Z"
      fill="#ffffff"
      class="icon fill-101820">
    </path>
</svg>`;
  const aboutIcon = `
<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <g data-name="user people person users man">
      <path
        d="M23.74 16.18a1 1 0 1 0-1.41 1.42A9 9 0 0 1 25 24c0 1.22-3.51 3-9 3s-9-1.78-9-3a9 9 0 0 1 2.63-6.37 1 1 0 0 0 0-1.41 1 1 0 0 0-1.41 0A10.92 10.92 0 0 0 5 24c0 3.25 5.67 5 11 5s11-1.75 11-5a10.94 10.94 0 0 0-3.26-7.82Z"
        fill="#ffffff"
        class="icon fill-000000"
      ></path>
      <path
        d="M16 17a7 7 0 1 0-7-7 7 7 0 0 0 7 7Zm0-12a5 5 0 1 1-5 5 5 5 0 0 1 5-5Z"
        fill="#ffffff"
        class="icon fill-000000"
      ></path>
    </g>
</svg>`;
  const workIcon = `
<svg
  viewBox="0 0 32 32"
  xml:space="preserve"
  xmlns="http://www.w3.org/2000/svg"
  enable-background="new 0 0 32 32"
>
  <path
    d="M28 20.6V25c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-4.4"
    fill="none"
    stroke="#ffffff"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="10"
    class="icon stroke-000000"
  ></path>
  <path
    d="M16 24h0c-1.1 0-2-.9-2-2v-3h4v3c0 1.1-.9 2-2 2z"
    fill="none"
    stroke="#ffffff"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="10"
    class="icon stroke-000000"
  ></path>
  <path
    d="M14 22H7c-2.2 0-4-1.8-4-4v-8c0-1.1.9-2 2-2h22c1.1 0 2 .9 2 2v8c0 2.2-1.8 4-4 4h-7M20 8h-8V6c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2zM7 28v-1M25 28v-1"
    fill="none"
    stroke="#ffffff"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="10"
    class="icon stroke-000000"
  ></path>
</svg>`;
  const skillIcon = `
<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
<path
  d="M325.998 431h-140a14 14 0 1 0 0 28h30.444a41.945 41.945 0 0 0 79.118 0h30.438a14 14 0 0 0 0-28ZM325.998 389h-140a14 14 0 1 0 0 28h140a14 14 0 0 0 0-28ZM346.687 289.637a113.084 113.084 0 1 0-181.369 0l42.7 57.33.04.033h-22.06a14 14 0 0 0 0 28h140a14 14 0 1 0 0-28H303.94l.049-.033ZM270.017 347h-28.089l.04-.033v-84h-21a14 14 0 0 1 0-28h70a14 14 0 1 1 0 28h-21v84ZM421.572 301.528l-24.25-14a14 14 0 1 0-14 24.247l24.25 14a14 14 0 1 0 14-24.247ZM390.335 158.554a13.914 13.914 0 0 0 6.986-1.88l24.25-14a14 14 0 1 0-14-24.247l-24.25 14a14.002 14.002 0 0 0 7.014 26.127ZM255.998 81a14 14 0 0 0 14-14V39a14 14 0 1 0-28 0v28a14 14 0 0 0 14 14ZM128.679 132.427l-24.25-14a14 14 0 1 0-14 24.247l24.25 14a14 14 0 0 0 14-24.247ZM114.679 287.528l-24.25 14a14 14 0 1 0 14 24.247l24.25-14a14 14 0 0 0-14-24.247Z"
  fill="#ffffff"
  class="icon fill-000000"
></path>
</svg>`;
  const projectIcon = `
<svg
data-name="Layer 27"
viewBox="0 0 50 50"
xmlns="http://www.w3.org/2000/svg"
>
<path
  d="M48 25a2 2 0 0 0-1-1.7L43 21l4-2.3a2 2 0 0 0 .1-3.4l-21-13a2 2 0 0 0-2.1 0l-21 13a2 2 0 0 0 0 3.4L7 21l-4 2.3a2 2 0 0 0 0 3.5L7 29l-4 2.3a2 2 0 0 0-.1 3.4l21 13a2 2 0 0 0 2.1 0l21-13a2 2 0 0 0-.1-3.4L43 29l4-2.3a2 2 0 0 0 1-1.7ZM25 6.4l17.1 10.5L25 26.7 7.9 16.9Zm-1 24.3 1 .3 1-.3 13-7.4 3 1.7-17 9.7L8 25l3-1.7ZM42.1 33 25 43.6 7.9 33.1l3.1-1.8 13 7.4 1 .3 1-.3 13-7.4Z"
  fill="#ffffff"
  class="icon fill-010101"
></path>
</svg>`;
  const reviewIcon = `
<svg
  viewBox="0 0 32 32"
  xml:space="preserve"
  xmlns="http://www.w3.org/2000/svg"
>
  <g
    fill="none"
    stroke="#FFFFFF"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="10"
    stroke-width="2"
    class="stroke-ffffff"
  ></g>
  <path
    d="M24.034 30a.988.988 0 0 1-.483-.125L16 25.701l-7.55 4.174a1 1 0 0 1-1.471-1.037l1.452-8.904-3.169-3.204a1 1 0 1 1 1.422-1.406l3.527 3.566a.999.999 0 0 1 .276.864l-1.203 7.375 6.232-3.445c.301-.166.667-.166.968 0l6.232 3.445-1.203-7.375a1 1 0 0 1 .271-.859l5.141-5.269-7.059-1.078a1.003 1.003 0 0 1-.754-.564L16 5.354l-3.112 6.63a1.003 1.003 0 0 1-.754.564L3.151 13.92a1 1 0 1 1-.302-1.978l8.455-1.291 3.791-8.076a.998.998 0 0 1 1.81 0l3.791 8.076 8.455 1.291a1.002 1.002 0 0 1 .565 1.687l-6.147 6.3 1.453 8.909A1.003 1.003 0 0 1 24.034 30z"
    fill="#ffffff"
    class="icon fill-000000"
  ></path>
</svg>`;
  const contactIcon = `
<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <path
    d="m27.36 6.15-2.27-2.27a3 3 0 0 0-4.54.35l-2.21 3a3 3 0 0 0-.44 2.66l.13.38c.27.89.62 2 .84 2.74a1 1 0 0 1-.05.7 12.44 12.44 0 0 1-2.08 3 1 1 0 0 0 0 1.42 1 1 0 0 0 1.41 0 14.14 14.14 0 0 0 2.46-3.51 2.92 2.92 0 0 0 .17-2.17c-.21-.72-.57-1.86-.85-2.75l-.12-.39a1 1 0 0 1 .19-.87l2.21-3a1 1 0 0 1 1.51-.12l.67.67-2 3.1a1 1 0 0 0 .84 1.54 1 1 0 0 0 .84-.45l1.77-2.74.16.15a2.59 2.59 0 0 1 .68 1.88c0 1.76-1.19 5-6.73 10.44-5.81 5.7-10.42 8-12.33 6.07l-2.33-2.3A1 1 0 0 1 5 22.9a1 1 0 0 1 .41-.73l3-2.21a1 1 0 0 1 .88-.15l1.89.59-2.13 1.51a1 1 0 0 0-.24 1.4 1 1 0 0 0 .82.42 1 1 0 0 0 .57-.18l3.8-2.67a1 1 0 0 0 .25-1.4 1 1 0 0 0-.53-.36l-3.8-1.22a3 3 0 0 0-2.66.44l-3 2.21a3 3 0 0 0-.35 4.54l2.27 2.28a4.31 4.31 0 0 0 3.12 1.26c2.52 0 6.32-1.75 12-7.32 4.84-4.75 7.31-8.74 7.33-11.86a4.46 4.46 0 0 0-1.27-3.3Z"
    data-name="phone celuler contact call"
    fill="#ffffff"
    class="icon fill-000000"
  ></path>
</svg>`;
  const twitterIcon = `
<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M28.77 8.11a.87.87 0 0 0-.23-.2A4.69 4.69 0 0 0 29 6.54a1 1 0 0 0-.44-1 1 1 0 0 0-1.1 0 6.42 6.42 0 0 1-2.28.92 6.21 6.21 0 0 0-7.08-1A6.07 6.07 0 0 0 15 12.2a1 1 0 0 0 2-.4 4.08 4.08 0 0 1 2-4.52 4.24 4.24 0 0 1 5.12 1 1 1 0 0 0 .88.28h.25a1 1 0 0 0 .34 1.62 1 1 0 0 0-.36.88 13.07 13.07 0 0 1-4.89 11.24 12.75 12.75 0 0 1-12.65 2.31 9.06 9.06 0 0 0 4.54-2.18 1 1 0 0 0 .15-1.09 1 1 0 0 0-.93-.57 4 4 0 0 1-3-1.39 3.63 3.63 0 0 0 1-.35A1 1 0 0 0 10 18a1 1 0 0 0-.76-.84 4.42 4.42 0 0 1-3-2.48c.24 0 .48.05.74.06a1 1 0 0 0 1-.62A1 1 0 0 0 7.67 13C6 11.48 5.59 9.85 5.83 8.7a13.88 13.88 0 0 0 7 4 1 1 0 1 0 .38-2 12.1 12.1 0 0 1-6.82-4.39 1 1 0 0 0-.75-.38 1 1 0 0 0-.78.33 5.34 5.34 0 0 0-.31 6h-.09a1 1 0 0 0-.52.81 5.84 5.84 0 0 0 1.95 4.47 1 1 0 0 0-.18 1 6.63 6.63 0 0 0 3.18 3.57A13.89 13.89 0 0 1 4 23a1 1 0 0 0-.5 1.86 16.84 16.84 0 0 0 8.5 2.49 15.16 15.16 0 0 0 9.6-3.57 15.12 15.12 0 0 0 5.69-12.42 4.62 4.62 0 0 0 1.62-2.25 1 1 0 0 0-.14-1Z" data-name="twitter bird social media trending" fill="#ffffff" class="fill-000000"></path>
</svg>`;
  const linkedInIcon = `
<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g data-name="in linkedin portfolio social media"><path d="M6.5 3A3.5 3.5 0 1 0 10 6.5 3.5 3.5 0 0 0 6.5 3Zm0 5A1.5 1.5 0 1 1 8 6.5 1.5 1.5 0 0 1 6.5 8ZM9 11H4a1 1 0 0 0 0 2h4v14H5V16a1 1 0 0 0-2 0v12a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V12a1 1 0 0 0-1-1ZM27.34 12.68A5.94 5.94 0 0 0 23 11h-1a7.84 7.84 0 0 0-4 .89 1 1 0 0 0-1-.89h-5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-9a2 2 0 0 1 4 0v9a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V17a5.9 5.9 0 0 0-1.66-4.32ZM27 27h-3v-8a4 4 0 0 0-8 0v8h-3V13h3v1a1 1 0 0 0 .62.92 1 1 0 0 0 1.09-.21c.95-1 1.7-1.71 4.29-1.71h1a4 4 0 0 1 2.92 1.09A4 4 0 0 1 27 17Z" fill="#ffffff" class="fill-000000"></path></g>
</svg>`;
  const fbIcon = `
<svg viewBox="0 0 100 100" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 100 100"><g id="Layer_2"><path d="M96.106 48.881c-.77 0-1.394.626-1.394 1.399 0 21.747-15.13 40.061-36.21 44.154V65.087h9.376c.688 0 1.273-.504 1.378-1.187l2.049-13.408c.144-.82-.548-1.631-1.378-1.611H58.502V41.58c.033-7.334 6.8-5.65 11.967-5.844.77 0 1.394-.626 1.394-1.399V22.922c0-.682-.49-1.264-1.16-1.379-10.045-1.739-23.925-2.366-28.31 10.912-.535 1.77 2.047 2.602 2.648.872 3.489-10.805 14.71-10.674 24.034-9.203v8.814h-4.434c-5.589 0-8.926 3.231-8.926 8.642v8.7c0 .773.624 1.399 1.394 1.399h11.194l-1.621 10.61h-9.573c-.77 0-1.394.626-1.394 1.399v32.411c0 .409.178.797.488 1.063 23.524-1.523 41.39-23.436 41.297-46.881 0-.774-.625-1.4-1.394-1.4z" fill="#ffffff" class="fill-000000"></path><path d="M42.665 38.663c-.77 0-1.394.626-1.394 1.399v8.819H30.929c-.77 0-1.394.626-1.394 1.399v13.408c0 .773.624 1.399 1.394 1.399H41.27v29.347C-11.554 82.852-4.204 6.699 49.886 5.298c21.636 0 40.176 15.473 44.084 36.791.14.76.864 1.263 1.624 1.122a1.4 1.4 0 0 0 1.119-1.629C92.561 18.937 72.867 2.5 49.886 2.5c-58.451 1.627-65.011 84.401-7.437 94.981.815.145 1.63-.545 1.609-1.382V63.688c0-.773-.624-1.399-1.394-1.399H32.323v-10.61h10.341c.77 0 1.394-.626 1.394-1.399V40.062a1.395 1.395 0 0 0-1.393-1.399z" fill="#ffffff" class="fill-000000"></path></g>
</svg>`;
  const twitterBoxIcon = `
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 6"><path d="M50.47 17.15v29.08a4.64 4.64 0 0 1-4.62 4.63H17.27a4.64 4.64 0 0 1-4.62-4.62V17.15a4.64 4.64 0 0 1 4.62-4.62h28.58" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2px" class="stroke-000000"></path><circle cx="50.52" cy="13.82" r="1" fill="#ffffff" class="fill-000000"></circle><path d="M25.49 32.72a12.24 12.24 0 0 1-3.36-1.85 5.4 5.4 0 0 1-1.82-3.77c0-.58-.2-3.5.78-3.43.16 0 .3.15.4.27a11 11 0 0 0 .81.87h0a12 12 0 0 0 8.89 3.36A4.94 4.94 0 0 1 38.42 23a6.15 6.15 0 0 0 1.58.79 3.9 3.9 0 0 0 1.23 0l3-.34a18.05 18.05 0 0 0-2.56 3.93 18.35 18.35 0 0 0-.93 4.15 12.2 12.2 0 0 1-5.16 7.79s0 0 0 0a9.7 9.7 0 0 1-1.18.68h0a11.07 11.07 0 0 1-1.72.78h0l-.55.19-.61.17a18.33 18.33 0 0 1-8.61-.14l-1.17-.27-1.37-.38a10.48 10.48 0 0 0 4.76-1.46c.29-.17.59-.41.55-.73a.83.83 0 0 0-.38-.56 13.92 13.92 0 0 1-2.67-3.16" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2px" class="stroke-000000"></path></g>
</svg>`;
  const linkedInBoxIcon = `
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 6"><path d="M50.43 17.31v29.08A4.64 4.64 0 0 1 45.81 51H17.22a4.64 4.64 0 0 1-4.62-4.62V17.31a4.64 4.64 0 0 1 4.63-4.63h28.58" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2px" class="stroke-000000"></path><circle cx="50.48" cy="13.98" r="1" fill="#ffffff" class="fill-000000"></circle><path d="M28.92 28.08h5v1.64h.1c.64-1 1.7-2 4.31-2 3.23 0 5.64 2.13 5.64 6.77v9.35h-4.9v-8.73c0-2-.71-3.42-2.48-3.42a2.62 2.62 0 0 0-2.48 1.84 3.5 3.5 0 0 0-.11 1.22v9.1h-4.9V32M25.2 32.08v11.9h-4.89v-15.9h4.89M25.52 22.75A2.77 2.77 0 1 1 22.75 20" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2px" class="stroke-000000"></path></g>
</svg>`;
  const fbBoxIcon = `
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 6"><path d="M30.54 51H17.22a4.64 4.64 0 0 1-4.63-4.62v-29.1a4.64 4.64 0 0 1 4.63-4.63H45.8M50.43 17.28v29.08A4.64 4.64 0 0 1 45.8 51h-9" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2px" class="stroke-000000"></path><circle cx="50.48" cy="13.95" r="1" fill="#ffffff" class="fill-000000"></circle><path d="M30.54 51V38.51h-4.4v-5.94h4.4v-5.73a6 6 0 0 1 6-6h6.23v5.65h-4.56A1.47 1.47 0 0 0 36.74 28v4.54h6v6h-6V51" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2px" class="stroke-000000"></path></g>
</svg>`;
  const langIcon = `
<svg viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"><path d="M17 20H2.5A2.503 2.503 0 0 1 0 17.5v-15C0 1.122 1.122 0 2.5 0h8a.5.5 0 0 1 .473.338l6.5 19A.502.502 0 0 1 17 20zM2.5 1C1.673 1 1 1.673 1 2.5v15c0 .827.673 1.5 1.5 1.5h13.8L10.143 1H2.5z" fill="#ffffff" class="fill-000000"></path><path d="M21.5 24h-8a.5.5 0 0 1-.468-.324l-1.5-4a.5.5 0 0 1 .936-.352L13.847 23H21.5c.827 0 1.5-.673 1.5-1.5v-15c0-.827-.673-1.5-1.5-1.5H12a.5.5 0 0 1 0-1h9.5C22.878 4 24 5.122 24 6.5v15c0 1.378-1.122 2.5-2.5 2.5z" fill="#ffffff" class="fill-000000"></path><path d="M13.5 24a.5.5 0 0 1-.376-.83l3.5-4a.5.5 0 1 1 .753.659l-3.5 4A.502.502 0 0 1 13.5 24zM9.5 14a.499.499 0 0 1-.471-.332L7 7.987l-2.029 5.681a.5.5 0 0 1-.942-.336l2.5-7c.142-.398.8-.398.941 0l2.5 7A.5.5 0 0 1 9.5 14z" fill="#ffffff" class="fill-000000"></path><path d="M8 11H6a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1zM21.5 11h-7a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1z" fill="#ffffff" class="fill-000000"></path><path d="M17.5 11a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 1 0v1a.5.5 0 0 1-.5.5zM16 17a.498.498 0 0 1-.29-.907c2.189-1.555 3.79-4.727 3.79-5.592a.5.5 0 0 1 1 0c0 1.318-1.927 4.785-4.21 6.408A.507.507 0 0 1 16 17z" fill="#ffffff" class="fill-000000"></path><path d="M20 18a.494.494 0 0 1-.337-.131c-.363-.332-3.558-3.283-4.126-4.681a.5.5 0 0 1 .926-.376c.409 1.007 2.936 3.459 3.875 4.319A.5.5 0 0 1 20 18z" fill="#ffffff" class="fill-000000"></path>
</svg>`;
  const globeIcon = `
<svg id="Layer_1" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"><path d="M23.3 12H.8" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" class="stroke-000000"></path><circle cx="12" cy="12" r="11.3" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" class="stroke-000000"></circle><ellipse cx="12" cy="12" rx="5.7" ry="11.3" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" class="stroke-000000"></ellipse><path d="M21.6 6.3H2.4M21.6 17.7H2.4M12 23.3V.8" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" class="stroke-000000"></path>
</svg>`;
  const sexIcon = `
<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h256v256H0z"></path><circle cx="120" cy="108" fill="none" r="60" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" class="stroke-000000"></circle><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M120 168v64M88 204h64M168 24h40v40M164.4 67.6 208 24" class="stroke-000000"></path>
</svg>`;
  const hobbyIcon = `
<svg viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="M22 4.9a6.64 6.64 0 0 0-9.4 0c-.2.2-.5.5-.7.8-.2-.3-.4-.5-.7-.8-2.5-2.5-6.6-2.5-9.2 0a6.64 6.64 0 0 0 0 9.4l10 10 10-10c2.6-2.6 2.6-6.8 0-9.4zM20.7 13 12 21.7S3.8 13.4 3.3 13c-1.8-1.8-1.8-4.8 0-6.7 1.8-1.8 4.8-1.8 6.7 0l2 2 2-2c1.8-1.8 4.8-1.8 6.7 0 1.9 1.8 1.9 4.8 0 6.7z" fill="#ffffff" class="fill-000000"></path><path d="M17 7v1c1.1 0 2 .9 2 2 0 .6-.2 1.1-.6 1.4l.7.7c.5-.5.9-1.3.9-2.1 0-1.7-1.3-3-3-3z" fill="#ffffff" class="fill-000000"></path>
</svg>`;
  const downloadIcon = `
<svg viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"><g id="_icons"><path d="M11.3 15.7c.1.1.2.2.3.2.1.1.3.1.4.1s.3 0 .4-.1c.1-.1.2-.1.3-.2l4-4c.4-.4.4-1 0-1.4s-1-.4-1.4 0L13 12.6V5c0-.6-.4-1-1-1s-1 .4-1 1v7.6l-2.3-2.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l4 4z" fill="#ffffff" class="fill-000000"></path><path d="M19 13c-.6 0-1 .4-1 1v2c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2v-2c0-.6-.4-1-1-1s-1 .4-1 1v2c0 2.2 1.8 4 4 4h8c2.2 0 4-1.8 4-4v-2c0-.6-.4-1-1-1z" fill="#ffffff" class="fill-000000"></path></g></svg>
`;

  const createIcon = function (icon, iconclass) {
    document
      .querySelectorAll(`.${iconclass}`)
      .forEach((item) => (item.innerHTML = icon));
  };
  const iconArr = [
    [homeIcon, "home-icon"],
    [aboutIcon, "about-icon"],
    [workIcon, "work-icon"],
    [skillIcon, "skill-icon"],
    [projectIcon, "project-icon"],
    [reviewIcon, "star-icon"],
    [contactIcon, "contact-icon"],
    [fbIcon, "fb-icon"],
    [fbBoxIcon, "fb-box-icon"],
    [twitterIcon, "tw-icon"],
    [twitterBoxIcon, "tw-box-icon"],
    [linkedInIcon, "lknd-icon"],
    [linkedInBoxIcon, "lknd-box-icon"],
    [langIcon, "lang-icon"],
    [globeIcon, "globe-icon"],
    [sexIcon, "gender-icon"],
    [hobbyIcon, "hobby-icon"],
    [downloadIcon, "download-icon"],
  ];
  
  return iconArr.map((icon) => createIcon(icon[0], icon[1]));
};

export {addIcons};