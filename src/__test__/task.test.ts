import {Task} from '../db/model/task';

describe('Task model', () => {
  test('title is required', async () => {
    try {
      await Task.create({
        description: 'my task description',
        user: '613176a19c3608c6b7585423',
        completionTime: '2021-08-22T00:00:10Z',
        notificationTime: '2022-08-26T00:00:10Z',
      });
    } catch (e) {
      expect(e).toBeFalsy();
    }
  });

  test('description is required', async () => {
    try {
      await Task.create({
        title: 'This is a task title',
        user: '613176a19c3608c6b7585423',
        completionTime: '2021-08-29T00:00:10Z',
        notificationTime: '2022-08-25T00:00:10Z',
      });
    } catch (e) {
      expect(e).toBeFalsy();
    }
  });

  test('completionTime is required', async () => {
    try {
      await Task.create({
        description: 'my task description',
        title: 'This is a task title',
        user: '613176a19c3608c6b7585423',
        notificationTime: '2022-08-21T00:00:10Z',
      });
    } catch (e) {
      expect(e).toBeFalsy();
    }
  });

  test('notificationTime is required', async () => {
    expect.assertions(1);
    try {
      await Task.create({
        description: 'my task description',
        user: '613176a19c3608c6b7585423',
        title: 'This is a task title',
        completionTime: '2021-08-23T00:00:10Z',
      });
    } catch (e) {
      expect(e).toBeFalsy();
    }
  });
});
