import User from '../models/User';

class UserController {
  async create(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const {
        id, first_name, last_name, email,
      } = novoUser;
      return res.json({
        id, first_name, last_name, email,
      });
    } catch (e) {
      return res.status(400).json(
        { errors: e.errors.map((err) => err.message) },
      );
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(
        id,
        { attributes: ['id', 'first_name', 'last_name', 'email'] },
      );
      return res.status(200).json(user);
    } catch (e) {
      return res.status(404).json(null);
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(404).json({
          errors: ['ID inválido'],
        });
      }

      const { first_name, last_name, email } = await user.update(req.body);

      return res.status(200).json({ first_name, last_name, email });
    } catch (e) {
      return res.status(404).json(
        { errors: e.errors.map((err) => err.message) },
      );
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(404).json({
          errors: ['ID inválido'],
        });
      }

      await user.destroy();

      return res.status(204).json(null);
    } catch (e) {
      return res.status(404).json(
        { errors: e.errors.map((err) => err.message) },
      );
    }
  }
}

export default new UserController();
