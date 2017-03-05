/* @flow */
import { GraphQLID, GraphQLNonNull, GraphQLBoolean } from 'graphql';

import { ItemModel } from '../../models';

const deleteItem = {
  type: GraphQLBoolean,
  description: 'Create a new item in the database.',
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The unique id of the item.',
    },
  },
  resolve: (_: any, { id }: { id: string }) => ItemModel.destroy({ where: { id } }),
};

export default deleteItem;