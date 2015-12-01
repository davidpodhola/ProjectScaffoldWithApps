namespace FSharp.ProjectTemplate.WebSharper.UI.Next.wS

open WebSharper
open WebSharper.JavaScript
open WebSharper.UI.Next
open WebSharper.UI.Next.Client
open WebSharper.UI.Next.Html
open FSharp.ProjectTemplate.Domain

[<JavaScript>]
module Client =

    let Main () =
        let rvFirstName = Var.Create "First name"
        let rvLastName = Var.Create "Last name"
        let viewFullName = View.Map2 ( fun f l -> { FirstName = f; LastName = l } ) rvFirstName.View rvLastName.View
        let submit = Submitter.CreateOption viewFullName
        let vReversed =
            submit.View.MapAsync(function
                | None -> async { return "" }
                | Some input -> async { return "" } //input -> Server.DoSomething input
            )
        div [
            Doc.Input [] rvFirstName
            Doc.Input [] rvLastName
            Doc.Button "Send" [] submit.Trigger
            hr []
            h4Attr [attr.``class`` "text-muted"] [text "The server responded:"]
            divAttr [attr.``class`` "jumbotron"] [h1 [textView vReversed]]
        ]
