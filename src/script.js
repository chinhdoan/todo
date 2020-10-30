const list = document.querySelector('ul');
const addForm = document.querySelector('.add-form');
const searchForm = document.querySelector('.search-form');
function addTodoUI(doc){

  const id = doc.id;
  const todo = doc.data().todo;
  list.innerHTML += `<li data-id=${id} class="list-group-item">
                        <span>${todo}</span>
                        <span class="fas fa fa-trash"></span>
                      </li>`

  
  console.log(todo);
}
function deleteTodoUI(item){
    item.remove();
    if(item.getAttribute('data-id')){
      const todoID = item.getAttribute('data-id');
      db.collection('todoDB').doc(todoID).delete().then(() => {
        console.log('item remove done!');
      }).catch((err)=> console.log(err));
    }

}

db.collection('todoDB').onSnapshot((snapshots) => {
  const snapshot = snapshots.docChanges();
  console.log(snapshot);
  for ( let i = 0 ; i < snapshots.docChanges().length ; i++){
    if(snapshot[i].type === 'added'){
      console.log(snapshot[i].doc);
      addTodoUI(snapshot[i].doc);
    }else if(snapshot[i].type === 'removed'){
      console.log('remove');
    }
  }
})

  addForm.addEventListener('submit', e => {
    e.preventDefault();
    const now = new Date();
    db.collection('todoDB').add({
      todo: addForm.firstElementChild.value,
      created_at: now
    })
    addForm.reset();
  })



  //delete 
  list.addEventListener('click', e =>{
    e.preventDefault();
    if(e.target.classList.contains('fa-trash')){
      console.log(e.target.parentElement);
      deleteTodoUI(e.target.parentElement);
    }
  
  })


searchForm.addEventListener('keyup', e => {
  e.preventDefault();
  const searchValue = searchForm.firstElementChild.value.toUpperCase();
  console.log(searchValue);
  for(let i = 0 ; i < list.childElementCount; i++){
    const todoItem = list.children[i].firstElementChild;
    const todoValue = todoItem.textContent.toUpperCase();
    //if in todoValue has more than 1 text of searchValue do something
    if (parseInt(todoValue.indexOf(searchValue)) > -1 ){
      todoItem.parentElement.style.display = 'flex';
    }else{
      todoItem.parentElement.style.display = 'none';
    }
    //if searchValue not have any text in todo value do nothing
  }
})

