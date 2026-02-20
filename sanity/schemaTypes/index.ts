import { type SchemaTypeDefinition } from 'sanity'
import { Products } from './products'
import category from './category'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Products,category],
}
