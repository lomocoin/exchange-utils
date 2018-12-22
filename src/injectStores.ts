export default (inject: any) => (...storeNames: string[]) =>
  inject(({ store }: { store: any }) =>
    storeNames.reduce(
      (s, name) => ({
        ...s,
        ...{
          [name]: store[name],
        },
      }),
      {
        store,
      },
    ),
  );
