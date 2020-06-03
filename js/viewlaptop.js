function ViewLaptop(){

};

ViewLaptop.prototype.addLaptop = function(obj){
    var block = document.querySelector('#list-laptops');
    var ulList = document.createElement('ul');
    var infoBlock = document.createElement('div');
 
    infoBlock.classList.add('info-block');


    ulList.innerHTML = '<li>' + obj.title + '</li>' + 
    '<li>' + obj.cpu + '</li>' +
    '<li>' + obj.ram + '</li>' +
    '<li>' + obj.cores + '</li>' +
    '<button class="info">Дополнительно</button>' +
    '<button class="delete">Удалить</button>';

    infoBlock.innerHTML = '<p>' + obj.getOption() + '</p>' + 
    '<button class="close-info">Закрыть</button>';


    block.appendChild(ulList).append(infoBlock);
    deleteButton();
    openInfo();
    closeInfo();

};

ViewLaptop.prototype.getMessage = function(message, nameCl){
    var cont = document.querySelector('.container');
    var form = document.querySelector('.wrapper');

    var infoBlock = document.createElement('div');
    infoBlock.className = nameCl;
    infoBlock.innerText = message;

    cont.insertBefore(infoBlock, form);
};

ViewLaptop.prototype.clearInput = function(){
    document.querySelector('#title').value = '';
    document.querySelector('#year').value = '';
    document.querySelector('#cpu').value = '';
    document.querySelector('#ram').value = '';
    document.querySelector('#cores').value = '';
    document.querySelector('#material').value = '';
    document.querySelector('#weight').value = '';
} 