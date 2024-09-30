import { GatsbyNode } from 'gatsby';
import data from './src/data/data.json';
import path from 'path';

let urls: string[] = [];

try {
  // Asegúrate de que el menú tiene solo cadenas válidas
  urls = Object.keys(data.menu).filter((key) => isNaN(Number(key)) && key !== "");
} catch (error) {
  console.error("Error loading data.json:", error);
}

const urlUndefined = (validPath: string): boolean => {
  return !urls.includes(validPath);
};

export const createPages: GatsbyNode['createPages'] = async ({ actions }) => {
  const { createPage } = actions;

  urls.forEach(url => {
    createPage({
      path: `/${url === 'home' ? '' : url}`,
      component: path.resolve(`./src/pages/${url === 'home' ? 'index' : url}.tsx`),
    });
  });

  // Página de 404
  createPage({
    path: '/*',
    matchPath: '/:slug',
    component: path.resolve('./src/pages/404.tsx'),
    context: {
      invalidPath: urlUndefined,
    },
  });
};
