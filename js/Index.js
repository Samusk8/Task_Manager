// js/index.js
import { Storage }  from "./Storage.js";
import { FormTask } from "./FormTask.js";

document.addEventListener("DOMContentLoaded", () => {
  const storage   = new Storage();

  const ui = new FormTask();
  ui.printActivities(storage.activities);
});



// esto lo he sacado por mis medios pero la ia me dio la idea y ayuda
//ya que me salia un arror muy raro que no me encontraba el div donde meter el dom pero si que estaba
// y con esto funcionó asi que no lo toco



/*<div class="activity">
<div class="activity-header">
    <h5 id="title">Titulo</h5>
    <h5 id="priority">Prioridad</h5>
</div>
<div class="activity-body">
    <div class="body-text">
        <p id="category">Categoria</p>
        <p id="date">19-09-25</p>
        <p id="description">bla bla bla</p>
    </div>
    <div class="body-boton">
        <input type="checkbox" name="done" id="done">
        <button id="deleteActivity">X</button>
    </div>
</div>
</div> */