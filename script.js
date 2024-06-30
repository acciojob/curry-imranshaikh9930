function curry(callback) {
  return function curried(...args) {
    if (args.length === 0) {
      return callback();
    } else {
      return function(...nextArgs) {
        if (nextArgs.length === 0) {
          return callback(...args);
        } else {
          return curried(...args, ...nextArgs);
        }
      };
    }
  };
}

module.export=curry
