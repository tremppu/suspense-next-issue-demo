# Suspense error demo

There are 2 folders

- `suspense-next-nx` where serve command works but building fails
- `suspense-next-vanilla-ts` where both serving & building work

The nextjs apps in these project are basically the same. Only difference is `next.config.js` as nx adds "withNx" to the configuration. Nx app would still not build if I would remove the "withNx".
