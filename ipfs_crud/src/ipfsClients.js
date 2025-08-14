import { create } from 'ipfs-http-client';

// Локальная нода (запусти: ipfs daemon)
// export const localNode = create({ url: 'http://127.0.0.1:5001' });

// Gateway (Infura как пример)
const projectId = 'Bd5RmA6zPcOi6L598fOvZsldO9PLRkhLcTG9YKLhHnHX9AXiadB95g';
const projectSecret = '6c36d4476ceb421780d8a1bd1d66bae3';
const auth = 'Basic ' + btoa(projectId + ':' + projectSecret);

export const infuraGateway = create({
  url: 'https://ipfs.infura.io:5001',
  headers: { authorization: auth }
});