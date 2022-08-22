import P from 'prop-types';
import { Contaier } from './styles';

export const App = ({ children }) => {
  return <Contaier>{children}</Contaier>;
};

App.propTypes = {
  children: P.node.isRequired,
};
