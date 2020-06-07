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
    Laptop.call(this, title, year, cpu, ram, cores, weight);
    this.color = color;

    this.getOption = function(){
        return "Вес: " + weight + '\n' 
        + "Цвет: " + color + '\n' 
        + "Год: " + year;
    }
}

