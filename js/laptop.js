function Laptop(title, year, cpu, ram, cores, material, weight){
    this.title = title;
    this.year = year;
    this.cpu = cpu;
    this.ram = ram;
    this.cores = cores;
    this.material = material;
    this.weight = weight;

    this.getOption = function(){
        return "Вес: " + this.weight + "\n" +
        "Материал корпуса: " + this.material + "\n" +
        "Год выпуска: " + this.year;  
    }
}

function UltraBook(title, year, cpu, ram, cores, color, weight){
    this.title = title;
    this.year = year;
    this.cpu = cpu;
    this.ram = ram;
    this.cores = cores;
    this.color = color;
    this.weight = weight;

    this.getOption = function(){
        return "Вес: " + this.weight + '\n' 
        + "Цвет: " + this.color + '\n' 
        + "Год: " + this.year;
    }
}