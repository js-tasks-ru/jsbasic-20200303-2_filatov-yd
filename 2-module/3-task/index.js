let calculator = {
  num1:null,
  num2:null,

  read(a,b){
    this.num1=a;
    this.num2=b;
  },
  sum(){
    let summ=0;
    summ=this.num1+this.num2;
    return summ;

  },
  mul(){
    let mull=0;
    mull=this.num1*this.num2;
    return mull;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
