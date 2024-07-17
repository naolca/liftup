
'use client';
import { Provider } from 'react-redux';
import { Store } from '../../app/redux/store';

export default function StoreProviderComponent({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={Store}>
      {children}
    </Provider>
  );
}