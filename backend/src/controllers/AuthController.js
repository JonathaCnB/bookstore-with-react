import jwt from 'jsonwebtoken';
import User from '../models/User';

class AuthController {
  async create(req, res) {
    try {
      const { email = '', password = '' } = req.body;

      if (!email || !password) {
        return res.status(401).json({ errors: ['Dados inválidos'] });
      }

      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(401).json({ errors: ['Dados inválidos'] });
      }

      if (!(await user.passwordIsValid(password))) {
        return res.status(401).json({ errors: ['Dados inválidos'] });
      }

      const { id } = user;
      const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });

      return res.status(200).json(
        {
          token,
          user: { id, email, first_name: user.first_name },
        },
      );
    } catch (e) {
      return res.status(400).json(
        { errors: ['Dados inválidos'] },
      );
    }
  }
}

export default new AuthController();
