import { describe, it, expect, beforeEach } from 'vitest';
import authReducer, { setToken, removeToken } from '../Service/features/authSlice';

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};

  return {
    getItem(key: string) {
      return store[key] || null;
    },
    setItem(key: string, value: string) {
      store[key] = value;
    },
    removeItem(key: string) {
      delete store[key];
    },
    clear() {
      store = {};
    },
  };
})();

beforeEach(() => {
  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
  });
  localStorageMock.clear();
});

describe('authSlice reducer', () => {
 
  it('should handle setToken', () => {
    const previousState = { token: null };
    const tokenValue = 'mockToken';

    const nextState = authReducer(previousState, setToken(tokenValue));

    expect(nextState.token).toBe(tokenValue);
    expect(localStorage.getItem('token')).toBe(tokenValue);
  });

  it('should handle removeToken', () => {
    const previousState = { token: 'mockToken' };

    const nextState = authReducer(previousState, removeToken());

    expect(nextState.token).toBeNull();
    expect(localStorage.getItem('token')).toBeNull();
  });
});
