namespace FSharp.ProjectTemplate.WebSharper.UI.Next.wS

open WebSharper

module Server =

    [<Rpc>]
    let DoSomething firstName lastName =
        let R (s: string) = System.String(Array.rev(s.ToCharArray()))
        async {
            return R (firstName + " " + lastName)
        }
