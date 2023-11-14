/* @flow */

import * as React from 'react'
import { AnyAction } from 'redux'
import type { Feature, Features } from 'redux-features'

type Components<P extends object> =
  | React.ReactElement<P>
  | React.ComponentType<P>
  | Array<React.ReactElement<P> | React.ComponentType<P>>

type Options<S, A extends AnyAction, P extends object> = {
  getFeatures?: (state: S) => Features<S, A>
  sortFeatures?: (features: Features<S, A>) => Array<Feature<S, A>>
  getComponents: (feature: Feature<S, A>) => Components<P>
}

export default function featureComponents<
  S,
  A extends AnyAction,
  P extends object
>(options: Options<S, A, P>): React.ComponentType<P>
