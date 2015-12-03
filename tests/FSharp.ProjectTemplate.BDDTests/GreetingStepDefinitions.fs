module GreetingStepDefinitions

open TickSpec
open NUnit.Framework

let [<Given>] ``a customer buys a black jumper`` () = 
    ()
      
let [<Given>] ``I have (.*) black jumpers left in stock`` (n:int) =  
    ()
      
let [<When>] ``I meet (.*)`` (someone:string) =  
    ()
      
let [<Then>] ``I say (.*)`` (greeting:string) =     
     Assert.True("Hello John Doe" = greeting)
