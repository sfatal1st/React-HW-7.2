import New from './New'

export default function withNew(Component) {
    return function WrappedComponent(props) {
      return (
        <New>
          <Component {...props} />
        </New>
      );
    };
  }