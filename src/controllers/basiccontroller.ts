import express, { Request, Response } from 'express'
import { helloPostService, helloService } from '../services/basicservice'

// This is a simple GET that return hello world!
export async function hello(req: Request, res: Response) {
    const helloWorld = await helloService()
    res.status(200).send(helloWorld)
}

// This is a simple POST that return the body
export async function helloPost(req: Request, res: Response) {
    console.log('The body is: ' + JSON.stringify(req.body))
    const helloWorldPost = await helloPostService(req.body.bodyDiProva)
    res.status(200).send(helloWorldPost)
}
