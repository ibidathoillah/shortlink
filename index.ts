const port = 3000
import { Router, ControllerWrapper } from './internal/http/router'
import { ShortLinkController } from './internal/http/controller/shortlinkController'
import { ShortLinkService } from './internal/shortlink/shortlink'
import express = require('express');
const app: express.Application = express();

// list all services
let shortLinkService = new ShortLinkService()

// list all controller
let shortLinkController = new ShortLinkController(shortLinkService)


let wrapper: ControllerWrapper = {
    sortLinkController: shortLinkController
}

new Router(wrapper).Serve(app, port)