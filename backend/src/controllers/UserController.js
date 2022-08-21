import User from '../models/User';

class UserController {
  async create(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch (e) {
      return res.status(400).json(
        { errors: e.errors.map((err) => err.message) },
      );
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.status(200).json(users);
    } catch (e) {
      return res.status(400).json(null);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      return res.status(200).json(user);
    } catch (e) {
      return res.status(404).json(null);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({
          errors: ['ID inválido'],
        });
      }

      const updateData = await user.update(req.body);

      return res.status(200).json(updateData);
    } catch (e) {
      return res.status(404).json(
        { errors: e.errors.map((err) => err.message) },
      );
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }

      const user = await User.findByPk(id);

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
