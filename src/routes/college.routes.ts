import { Router } from 'express';
import { getRepository, getCustomRepository } from 'typeorm';
import college from '../models/College';
import ClassRepository from '../repositories/ClassRepository';

const TesteRouter = Router();

TesteRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(college);
    const res = await repo.save(request.body);
    return response.status(201).json(res);
  } catch (err) {
    console.log('err.message :>> ', err.message);
  }
});

TesteRouter.get('/', async (request, response) => {
  response.json(await getRepository(college).find());
});

TesteRouter.get('/:name', async (request, response) => {
  const repository = getCustomRepository(ClassRepository);
  const res = await repository.findByName(request.params.name);
  response.json(res);
});

export default TesteRouter;