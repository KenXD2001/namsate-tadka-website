/**
 * Environment configuration loader
 * All environment variables are accessed via Vite's import.meta.env
 * Variables must be prefixed with VITE_ to be exposed to client code
 */

interface EnvConfig {
  host: string;
  port: number;
  appName: string;
  appTitle: string;
  appDescription: string;
  appBuiltBy: string;
  apiUrl: string;
  apiTimeout: number;
  buildSourcemap: boolean;
}

function getEnvVar(key: string): string {
  const value = import.meta.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

function getEnvNumber(key: string): number {
  const value = getEnvVar(key);
  const num = Number(value);
  if (isNaN(num)) {
    throw new Error(`Environment variable ${key} must be a number, got: ${value}`);
  }
  return num;
}

function getEnvBoolean(key: string): boolean {
  const value = getEnvVar(key);
  return value === 'true';
}

export const env: EnvConfig = {
  host: getEnvVar('VITE_HOST'),
  port: getEnvNumber('VITE_PORT'),
  appName: getEnvVar('VITE_APP_NAME'),
  appTitle: getEnvVar('VITE_APP_TITLE'),
  appDescription: getEnvVar('VITE_APP_DESCRIPTION'),
  appBuiltBy: getEnvVar('VITE_APP_BUILT_BY'),
  apiUrl: getEnvVar('VITE_API_URL'),
  apiTimeout: getEnvNumber('VITE_API_TIMEOUT'),
  buildSourcemap: getEnvBoolean('VITE_BUILD_SOURCEMAP'),
};

// Freeze the config to prevent mutations
Object.freeze(env);

// Log configuration on load (only in development)
if (import.meta.env.DEV) {
  console.log('Environment Configuration Loaded:', {
    host: env.host,
    port: env.port,
    appName: env.appName,
  });
}
