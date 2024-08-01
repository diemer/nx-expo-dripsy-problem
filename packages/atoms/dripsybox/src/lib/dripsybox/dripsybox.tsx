import { PropsWithChildren } from 'react';

import { View, Text } from 'dripsy';

/* eslint-disable-next-line */
export interface DripsyboxProps { }

export function Dripsybox(props: PropsWithChildren<DripsyboxProps>) {
  return (
    <View>
      {props.children}
    </View>
  );
}

export default Dripsybox;
