import { ShortLinkControllerInterface } from './controller/shortlinkController'
import express = require('express');

export interface ControllerWrapper {
    sortLinkController: ShortLinkControllerInterface;
}

export class Router {
    c: ControllerWrapper

    constructor(wrapper:ControllerWrapper){
        this.c = wrapper
    }

    Serve(app:express.Application, port:Number){        
        app.get('/shortlink', (res,req) => this.c.sortLinkController.LihatShortLink(res,req))
        app.listen(port)
        
        console.log(`Server has run on port ${port}`)
    }
}
