import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as y,i as d}from"./assets/vendor-651d7991.js";function u(e){const t=new Date;return e.getTime()-t.getTime()}function D(e){const n=Math.floor(e/864e5),m=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:n,hours:m,minutes:f,seconds:h}}function o(e){return e.toString().padStart(2,"0")}const l=document.getElementById("datetime-picker"),s=document.querySelector("[data-start]"),p=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),g=document.querySelector("[data-minutes]"),v=document.querySelector("[data-seconds]"),w={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]<=new Date?(d.error({title:"Error",message:"Please choose a date in the future"}),s.disabled=!0):s.disabled=!1}};y(l,w);let i;s.addEventListener("click",()=>{const e=new Date(l.value);if(u(e)<=0){d.error({title:"Error",message:"Please choose a date in the future"});return}s.disabled=!0,i=setInterval(()=>{const{days:r,hours:a,minutes:c,seconds:n}=D(u(e));p.textContent=o(r),S.textContent=o(a),g.textContent=o(c),v.textContent=o(n),r===0&&a===0&&c===0&&n===0&&(clearInterval(i),d.success({title:"Countdown Finished",message:"The countdown has reached zero!"}))},1e3)});
//# sourceMappingURL=commonHelpers2.js.map
