
    const Pausar = document.querySelector('#Pausar')
    const Começar = document.querySelector('#Começar')
    const Resetar = document.querySelector('#Resetar')
    Pausar.addEventListener('click', Pause)
    Começar.addEventListener('click', Start)
    Resetar.addEventListener('click', Reset)
    let Hora = 00
    let Minuto = 00
    let Segundo = 00
    let Milisegundo = 00
    var Cron

    function Start(){
        clearInterval(Cron)
        Cron = setInterval(Timer, 10)
    }
    function Pause(){
        clearInterval(Cron)
    }
    function Reset(){
        clearInterval(Cron)
        Hora = 00
        Minuto = 00
        Segundo = 00
        Milisegundo = 00
        H_M_S = (`${Formatador(Hora)}:${Formatador(Minuto)}:${Formatador(Segundo)}`)
        Ms = (`.${FormatadorMili(Milisegundo)}`)
        document.querySelector('#hms').innerHTML = (H_M_S)
        document.querySelector('#mili').innerHTML = (Ms)
    }

    function Timer(){
        Milisegundo += 10

        if(Milisegundo > 999){
            Milisegundo = 0
            Segundo++
        }
        if(Segundo > 59){ 
            Segundo = 00
            Minuto++ 
        }
        if(Minuto > 59){
            Minuto = 00
            Hora++
        }

        var H_M_S = (`${Formatador(Hora)}:${Formatador(Minuto)}:${Formatador(Segundo)}`)
        var Ms = (`.${FormatadorMili(Milisegundo)}`)

        document.querySelector('#hms').innerHTML = (H_M_S)
        document.querySelector('#mili').innerHTML = (Ms)
        
    }

    function Formatador(input){
        return (input < 10) ? (`0${input}`):(input) 
    }
    function FormatadorMili(input){
        if (input == 0) {
            input = ('00'+ input)
        }
        else if(input < 100) {
            input = ('0' + input)
        }
        return input
    }
    
