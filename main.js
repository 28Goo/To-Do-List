(()=>{"use strict";let e=[];class t{constructor(e){this.title=e,this.tasks=[]}addTaskToProject(e){this.tasks.push(e)}}class n{constructor(e,t,n,o){this.title=e,this.description=t,this.dueDate=n,this.priority=o}}function o(){document.querySelectorAll(".project").forEach((e=>{e.addEventListener("click",c)}))}function c(){const t=document.querySelector(".task-container");for(let n=0;n<e.length;n++){const o=document.createElement("div"),c=document.createElement("h2");c.textContent=e[n].tasks.title,t.appendChild(o),o.appendChild(c)}}document.querySelector("#add-project").addEventListener("click",(()=>{const e=document.querySelector(".project-form");e.style.display&&"none"!==e.style.display?e.style.display="none":e.style.display="flex"})),document.querySelector("#add-task").addEventListener("click",(()=>{const e=document.querySelector(".task-form");e.style.display&&"none"!==e.style.display?e.style.display="none":e.style.display="flex"})),o(),function(){const n=document.querySelector(".project-form"),c=document.querySelector("#project-title");n.addEventListener("submit",(l=>{l.preventDefault();const s=new t(c.value);e.push(s),console.log(e),c.value=null,n.style.display="none",document.querySelector(".projects").innerHTML="",function(){const t=document.querySelector(".projects");for(let n=0;n<e.length;n++){const o=document.createElement("div");o.classList.add("project"),o.dataset.value=`${n}`,o.textContent=e[n].title,t.appendChild(o)}}(),o()}))}(),function(){const e=document.querySelector(".task-form"),t=document.querySelector("#task-title"),o=document.querySelector("#description"),c=document.querySelector("#dueDate"),l=document.querySelector("#priority");e.addEventListener("submit",(e=>{e.preventDefault(),new n(t.value,o.value,c.value,l.value)}))}()})();