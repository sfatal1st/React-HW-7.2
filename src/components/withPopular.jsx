import Popular from './Popular'

export default function withPopular(Component) {
    return function WrappedComponent(props) {
      return (
        <Popular>
          <Component {...props} />
        </Popular>
      );
    };
  }