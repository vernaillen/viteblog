import type { FilterPattern } from '@rollup/pluginutils'

export interface Options {
  test: boolean
  extentions?: string[]
  include?: FilterPattern
  exclude?: FilterPattern
}
