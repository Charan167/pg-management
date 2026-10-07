import type { DataProvider } from "react-admin";

function unsupported(operation: string, resource: string): Promise<never> {
  return Promise.reject(
    new Error(
      `${operation} is not supported for resource "${resource}"; no business resources are configured yet.`,
    ),
  );
}

export const dataProvider: DataProvider = {
  getList: (resource) => unsupported("getList", resource),
  getOne: (resource) => unsupported("getOne", resource),
  getMany: (resource) => unsupported("getMany", resource),
  getManyReference: (resource) => unsupported("getManyReference", resource),
  create: (resource) => unsupported("create", resource),
  update: (resource) => unsupported("update", resource),
  updateMany: (resource) => unsupported("updateMany", resource),
  delete: (resource) => unsupported("delete", resource),
  deleteMany: (resource) => unsupported("deleteMany", resource),
};
