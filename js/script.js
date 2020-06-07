document.querySelector('#laptop').addEventListener('submit', function(event){
    var title = document.querySelector('#title').value;
    var year = document.querySelector('#year').value;
    var cpu = document.querySelector('#cpu').value;
    var ram = document.querySelector('#ram').value;
    var cores = document.querySelector('#cores').value;
    var material = document.querySelector('#material').value;
    var weight = document.querySelector('#weight').value;

    var laptop = new Laptop(title, year, cpu, ram, cores, material, weight);
    var viewLaptop = new ViewLaptop();

    if(title.trim() == '' || year.trim() == '' || cpu.trim() == '' || ram.trim() == ''
     || cores.trim() == '' || material.trim() == '' || weight.trim() == ''){
        viewLaptop.getMessage('Ошибка! Заполните все поля для ноутбука!', 'no-success');
    } else { 
        if(weight > 3000){
            viewLaptop.getMessage('Вес не должен превышать 3000г', 'no-success');
    } else{
        viewLaptop.addLaptop(laptop);
        viewLaptop.getMessage('Ура! Добавили новый ноут!', 'success');
        viewLaptop.clearInput();
    }};

    event.preventDefault();
});

document.querySelector('#ultrabook').addEventListener('submit', function(event){
    var title = document.querySelector('#title-ultra').value;
    var year = document.querySelector('#year-ultra').value;
    var cpu = document.querySelector('#cpu-ultra').value;
    var ram = document.querySelector('#ram-ultra').value;
    var cores = document.querySelector('#cores-ultra').value;
    var color = document.querySelector('#color-ultra').value;
    var weight = document.querySelector('#weight-ultra').value;

    UltraBook.prototype = Object.create(Laptop.prototype);
    var ultraBook = new UltraBook(title, year, cpu, ram, cores, color, weight);
    var viewUltraBook = new ViewUltraBook();

    if(title.trim() == '' || year.trim() == '' || cpu.trim() == '' || ram.trim() == ''
     || cores.trim() == '' || color.trim() == '' || weight.trim() == ''){
        viewUltraBook.getMessage('Ошибка! Заполните все поля для ультрабука!', 'no-success');
    } else {
        if(weight > 1500){
            viewUltraBook.getMessage('Вес не должен превышать 1500г', 'no-success');
    } else{
         viewUltraBook.addUltraBook(ultraBook);
         viewUltraBook.getMessage('Ура! Добавили новый ультрабук!', 'success');
         viewUltraBook.clearInput();
    }};

    event.preventDefault();
});

function deleteButton(){
    var deleteBtn = document.getElementsByClassName('delete');
    for(let button of deleteBtn){
      button.addEventListener('click', function(){
          button.parentElement.remove();
          event.preventDefault();
      })
    }
};

function openInfo(){
    var buttonOpen = document.getElementsByClassName('info');
    for(let button of buttonOpen){
      button.addEventListener('click', function(){
          button.parentNode.querySelector('.info-block').classList.add('show');
          event.preventDefault();
      })
    }
  }


  function closeInfo(){
    var buttonClose = document.getElementsByClassName('close-info');
    for(let button of buttonClose){
      button.addEventListener('click', function(){
          button.parentElement.classList.remove('show');
          event.preventDefault();
      })
    }
    }