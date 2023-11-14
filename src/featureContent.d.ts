/* @flow */

import * as React from 'react'
import { AnyAction } from 'redux'
import type { Feature, Features } from 'redux-features'

type Options<S, A extends AnyAction> = {
  getFeatures?: (state: S) => Features<S, A>
  sortFeatures?: (features: Features<S, A>) => Array<Feature<S, A>>
  getContent: (feature: Feature<S, A>) => any
}

export default function featureContent<
  S,
  A extends AnyAction,
  P extends object
>(
  options: Options<S, A>
): React.ComponentType<
  P & {
    children: (content: Array<any>) => React.ReactElement | null | undefined
  }
>
