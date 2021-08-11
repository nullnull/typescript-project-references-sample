import Ajv, { JSONSchemaType } from 'ajv'

const fooSchema: JSONSchemaType<number> = {
  type: 'number',
}

const ajv = new Ajv({
  verbose: true,
})
const validator = ajv.compile(fooSchema)

export const valueA = 1

export const functionA = () => {
  return 1
}