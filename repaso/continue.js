
i = 0;
n = 0;

while(i < 5) {
    
    i++;
    if(i == 3)
    continue;
    n += i;
}

console.log(n);

// ! continue va a saltar del loop unicamente en la iteracion que se logra evaluar
// !continue hace que se ejevuten las demas lineas de codigo mientras se cumpla la condicional
