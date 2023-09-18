class ListBinding{
    constructor(element){
        this.listElement = element;
        this.textList = ["text", "dcode"];
    
    }
    static createListItem(text){
        const li = document.createElement("li");

        li.textContent = text;

        return li;
    }
    update(){
           while(this.listElement.firstChild){
            this.listElement.removeChild(this.listElement.firstChild)
           }
           for(const text of this.textList){
            this.listElement.appendChild(ListBinding.createListItem(text))
           }
    }
    add(text){
        this.textList.push(text);;
        this.update();
    }

    remove(index){
        this.textList.splice(index,1);
        this.update();
    }
}