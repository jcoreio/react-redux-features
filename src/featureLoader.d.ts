// @flow

import * as React from 'react'
import type { AnyAction } from 'redux'
import type {
  Feature,
  Features,
  FeatureState,
  FeatureStates,
} from 'redux-features'

export type Options<S, A extends AnyAction, P extends object> = {
  getFeatures?: (state: S) => Features<S, A> | null | undefined
  getFeatureStates?: (state: S) => FeatureStates | null | undefined
  featureId: string
  render?: (options: {
    featureState: FeatureState
    feature?: Feature<S, A> | null
    props: P
  }) => React.ReactElement | null | undefined
}

export default function featureLoader<S, A extends AnyAction, P extends object>(
  options: Options<S, A, P>
): React.ComponentType<P>
