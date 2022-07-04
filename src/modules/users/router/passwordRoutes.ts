import { celebrate ,Joi, Segments} from 'celebrate';
import { Router } from 'express';
import forgotControllers from '../controllers/ForgotControllers';

const routes =  Router()

const user = new forgotControllers()


routes.post('/forgot',celebrate({
  [Segments.BODY]:{
    email:Joi.string().required(),
  }
}),user.create)



export default routes
