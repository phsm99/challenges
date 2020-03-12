import { Router, Application } from 'express'
import HeroController from '../controllers/HeroController'

const routes = Router()

routes.get('/', HeroController.list)
routes.post('/', HeroController.create)
routes.get('/:id', HeroController.index)
routes.put('/:id', HeroController.update)
routes.delete('/:id', HeroController.delete)


module.exports = (app:Application) => app.use('/heros', routes)
