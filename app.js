const base = document.querySelector('.base');
const box = document.querySelectorAll('.case');





base.addEventListener('dragstart', dragStart);
base.addEventListener('dragend', dragEnd);


function dragStart() {
    this.className += ' hold';

   setTimeout(() =>  (this.className = 'invisible'), 0);

    
}

function dragEnd() {
    this.className = 'base';
    
}
 
 
for (const elem of box) {

    elem.addEventListener('dragover', dragOver);

    elem.addEventListener('dragenter', dragEnter);

    elem.addEventListener('dragleave', dragLeave);

    elem.addEventListener('drop', dragDrop);
    
}

function dragOver(e){
    e.preventDefault();

}

function dragEnter(e){
    e.preventDefault();
    this.className += ' hovered';

}

function dragLeave(){
    this.className = 'case';
   

}

function dragDrop(){
    this.className = 'case';
    this.append(base);
}