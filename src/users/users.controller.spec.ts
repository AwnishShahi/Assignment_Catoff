import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    // Create a testing module to isolate and test the UsersController
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController], // Specify the controller to be tested
    }).compile();

    // Retrieve an instance of the UsersController from the testing module
    controller = module.get<UsersController>(UsersController);
  });

  // Test if the UsersController is defined
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
