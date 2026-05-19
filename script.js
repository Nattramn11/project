function pievienotUzdevumu() {
 let input = document.getElementById('taskInput');
 let teksts = input.value;
    
  if (teksts === "") return;

 let ul = document.getElementById('taskList');
 let li = document.createElement('li');
    
  li.innerHTML = `<span onclick="izsvitrot(this)">${teksts}</span>`;
  ul.appendChild(li);
  input.value = ""; 
    
 aprekinatProduktivitati(); 
}

function izsvitrot(elements) {
 elements.classList.toggle('done');
 aprekinatProduktivitati(); 
}

function aprekinatProduktivitati() {
 let visiUzdevumi = document.querySelectorAll('#taskList li').length;
 let izpilditie = document.querySelectorAll('#taskList li span.done').length;
    
if (visiUzdevumi === 0) {
 document.getElementById('result').innerText = "Nav uzdevumu";
 return; }
    
let procents = (izpilditie / visiUzdevumi) * 100;
document.getElementById('result').innerText = "Produktivitate: " + Math.round(procents) + "%";
}