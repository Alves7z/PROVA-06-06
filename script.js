//1

let NomeDaPessoa = document.getElementById("Nome")
let texto = document.getElementById("EnviarResultado")

function EnviarResultado()
{
    texto.innerHTML = "Olá, " + NomeDaPessoa.value + " tudo bem?"
}
//2

let conversao = document.getElementById("conversão")
let converta =  document.getElementById ("Converta")
let lesão = document.getElementById("Resultado1")

function Converta()
{
    Resultado1.innerHTML = parseInt (conversão.value)/100;

}

//3

let ante = document.getElementById("ante")
let textoante = document.getElementById("antetexto")

function antebotao()
{
    Antecessor.innerHTML = parseInt(ante.value) - 1
    Sucessor.innerHTML = parseInt(ante.value) + 1
}
//4

let numero1 = document.getElementById("valor1")
let numero2 = document.getElementById("valor2")
let resposta = document.getElementById("resposta")


function botaoresultado()
{
    if (numero1.value > numero2.value)
    {
        resposta.innerHTML = numero1.value
    }

    else
    {
        resposta.innerHTML = numero2.value
    }
}
//5

let salario = document.getElementById("sal")
let  t = document.getElementById("meusalario")

function bt()
{
    if  (sal.value >1250 )
        {
            t.innerHTML = ((parseInt (sal.value) + sal.value *10/100))
        }

        else (sal.value <1250)
        {
            t.innerHTML = ((parseInt (sal.value) + sal.value *15/100))
        }
}
        

//7
//8
//9

var he = 1;
while (he<101)
{
   console.log(he)
   he = he + 1
}

var it = 0
while (it<51)
    {
        console.log(it)
         it = it + 5
    }

    var or = 100
    while (or>=0)
        {
            console.log(or)
            tie = tie - 10
        }





