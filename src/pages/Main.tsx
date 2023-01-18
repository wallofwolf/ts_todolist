import Input from '../redux/components/Input';
import TodoList from '../redux/components/TodoList';
import Footer from '../redux/components/Footer';

function Main() {
  return (
    <>
      <Input />
      <TodoList isActive={true} />
      <TodoList isActive={false} />
      <Footer />
    </>
  );
}

export default Main;
