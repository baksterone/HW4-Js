function ViewUltraBook(){
    
};

ViewUltraBook.prototype.addUltraBook = function(obj){
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

ViewUltraBook.prototype.getMessage = function(message, nameCl){
    var cont = document.querySelector('.container');
    var form = document.querySelector('.wrapper');

    var infoBlock = document.createElement('div');
    infoBlock.className = nameCl;
    infoBlock.innerText = message;

    cont.insertBefore(infoBlock, form);

};

ViewUltraBook.prototype.clearInput = function(){
    document.querySelector('#title-ultra').value = '';
    document.querySelector('#year-ultra').value = '';
    document.querySelector('#cpu-ultra').value = '';
    document.querySelector('#ram-ultra').value = '';
    document.querySelector('#cores-ultra').value = '';
    document.querySelector('#color-ultra').value = '';
    document.querySelector('#weight-ultra').value = '';
} 
