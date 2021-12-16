import { Router } from 'express';
import { getRepository, getCustomRepository, getConnection } from 'typeorm';
import Class from '../models/Class';
import ClassRepository from '../repositories/ClassRepository';

const classRouter = Router();

classRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(Class);
    const res = await repo.save(request.body);
    await getConnection().queryResultCache?.remove(['listClass'])
    return response.status(201).json(res);
  } catch (err) {
    console.log('err.message :>> ', err.message);
  }
});

classRouter.get('/', async (request, response) => {
  response.json(await getRepository(Class).find({cache: {id:'listClass', milliseconds: 20000}}));
});

classRouter.get('/:name', async (request, response) => {
  const repository = getCustomRepository(ClassRepository);
  const res = await repository.findByName(request.params.name);
  response.json(res);
});

export default classRouter;
