// classes de um jogo
class hero {
    //tybe: 0 = mago, 1 = guerreiro, 2 = monge, 3 = ninja;
    constructor(name, age, type){
        this.name = name;
        this.age = age;

         this.types = ["mago", "guerreiro", "monge", "ninja"];
         this.attacks = ["magia", "espada", "artes marcias", "thirinsun"]
         this.type = type % this.types.length;

         getType() {
            return this.types[this.type];
        {getAttack(){
            return this.attacks[this.type];}   
        }
        attack() {
            console.log(`O ${this.getType()} atacou usando ${this.getAttack()}`);
        }
        info(){
            console.log(`Nome: ${this.name}, idade: ${this.age}, Tipo: ${this.getType()}`);
        }
    }
    
    for(let i = 0; i < 4; i++) {
        let jmsmarcelo = new Hero("jmsmarcelo", 0, i);
        jmsmarcelo.attack();
    }
}