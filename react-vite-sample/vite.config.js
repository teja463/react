import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(configObj => {
  let baseUrl = '';
  console.log(configObj);
  if(configObj.mode === 'dev'){
    baseUrl = '/dev'
  }
  if(configObj.mode === 'qa'){
    baseUrl = '/qa'
  }
  return { plugins: [react()], base:baseUrl };
});
