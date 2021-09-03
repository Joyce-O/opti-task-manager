import User from '../db/model/user';

describe('User model', () => {
  test('email, name, password are required', async () => {
    expect.assertions(3);
    try {
      await User.create({
        name: 'Julian',
        password: 'myPass',
      });
    } catch (e) {
      expect(e).toBeTruthy();
    }

    try {
      await User.create({
        email: 'test@example.com',
        password: 'myPass',
      });
    } catch (e) {
      expect(e).toBeTruthy();
    }

    try {
      await User.create({
        email: 'test@example.com',
        name: 'Julian',
      });
    } catch (e) {
      expect(e).toBeTruthy();
    }
  });
});
