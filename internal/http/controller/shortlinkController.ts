import express = require('express');
import { ShortLinkServiceInterface } from '../../shortlink/shortlink'

export interface ShortLinkControllerInterface {
    LihatShortLink(req:express.Request , res:express.Response): any
}

export class ShortLinkController {
    shortLinkService:ShortLinkServiceInterface

    constructor(shortLinkService:ShortLinkServiceInterface){
        this.shortLinkService = shortLinkService
    }

    LihatShortLink(req:express.Request , res:express.Response): any {
        let query = req.query
        let message:any = query.message
    
        message != null 
        ? res.status(200).send(this.shortLinkService.CheckShortLink(message))
        : res.status(400).send({ error: 'Bad Request' }) 
    }
}
