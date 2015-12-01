namespace FSharp.ProjectTemplate.WebSharper.UI.Next.wS

open WebSharper
open FSharp.ProjectTemplate.Domain

module Server =

    [<Rpc>]
    let DoSomething person =
        let R (s: string) = System.String(Array.rev(s.ToCharArray()))
        async {
            return R (person.FirstName + " " + person.LastName)
        }
