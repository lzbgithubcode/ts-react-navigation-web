import { IObject } from '@/types';
import { combineReducers } from '@reduxjs/toolkit';

const modulesFiles = import.meta.glob('./modules/*.ts', {
  eager: true,
  import: 'default',
});

const modules: IObject = {};
for (const path in modulesFiles) {
  const moduleName = path.replace(/(.*\/)*([^.]+).*/gi, '$2');
  modules[moduleName] = modulesFiles[path].default;
}

export default combineReducers(modules);
