import { types, Instance, SnapshotIn, SnapshotOut } from 'mobx-state-tree';
import uuidV4 from 'uuid/v4';

export const Template = types
  .model('Template', {
    id: types.optional(types.identifier, uuidV4),
  })
  .actions(_ => ({}));

export type ITemplateStore = Instance<typeof Template>;
export type ITemplateSnapshotIn = SnapshotIn<typeof Template>;
export type ITemplateSnapshotOut = SnapshotOut<typeof Template>;
