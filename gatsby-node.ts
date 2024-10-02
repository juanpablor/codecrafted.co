import { GatsbyNode } from 'gatsby';
import data from './src/data/data.json';
import path from 'path';


let urls: string[] = data[0]?.menu || [];


try {
  urls = data[0]?.menu || [];
} catch (error) {
  console.error("Error loading data.json:", error);
}

const urlUndefined = (validPath: string): boolean => {
  return !urls.includes(validPath);
};

export const createPages: GatsbyNode['createPages'] = async ({ actions }) => {
  const { createPage } = actions;
  urls.filter(url => url && url !== 'undefined').forEach(url => {
    createPage({
      path: `/${url === 'home' ? '' : url}`,
      component: path.resolve(`./src/pages/${url === 'home' ? 'index' : url}.tsx`),
    });
  });
  

  createPage({
    path: '/*',
    matchPath: '/:slug',
    component: path.resolve('./src/pages/404.tsx'),
    context: {
      invalidPath: urlUndefined,
    },
  });
};
