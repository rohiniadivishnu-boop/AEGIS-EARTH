import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('🚀 [AEGIS COMMAND] Starting Backend Server (Port 5000)...');
const backend = spawn(process.execPath, [path.join(rootDir, 'server', 'index.js')], {
  cwd: rootDir,
  stdio: 'inherit',
  shell: true
});

console.log('⚡ [AEGIS COMMAND] Starting Vite Frontend Server (Port 3000)...');
const viteBin = path.join(rootDir, 'node_modules', 'vite', 'bin', 'vite.js');
const frontend = spawn(process.execPath, [viteBin, '--port', '3000'], {
  cwd: rootDir,
  stdio: 'inherit',
  shell: true
});

const cleanup = () => {
  console.log('\n🛑 Shutting down Aegis Command Center services...');
  backend.kill();
  frontend.kill();
  process.exit(0);
};

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
